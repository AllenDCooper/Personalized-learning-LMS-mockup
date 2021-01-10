import seedData from '../Data/seed.js'
import reportsObjConstructor from './model.js'
import scales from '../ACES_Assessment/scales'

let reportsDataArrTemplate = scales.map(scale => reportsObjConstructor(scale.name))

const updateReportsObj = (reportsObj, userName, rawScore, percentScore) => {

  // push user into userScore array
  reportsObj.userScores.push({
    userName: userName,
    rawScore: rawScore,
    percentScore: percentScore
  })

  reportsObj.rawScoreTotal += rawScore;
  reportsObj.totalScoreCount++;
  reportsObj.rawScoreAvg = (reportsObj.rawScoreTotal / reportsObj.totalScoreCount).toFixed(2)
  if (percentScore <= 25) {
    reportsObj.lowScoreCount++
  } else if (percentScore > 25 && percentScore <= 75) {
    reportsObj.moderateScoreCount++
  } else if (percentScore > 75) {
    reportsObj.highScoreCount++
  }
  reportsObj.lowScoreCountPercent = Math.round(reportsObj.lowScoreCount / reportsObj.totalScoreCount * 100);
  reportsObj.moderateScoreCountPercent = Math.round(reportsObj.moderateScoreCount / reportsObj.totalScoreCount * 100);
  reportsObj.highScoreCountPercent = Math.round(reportsObj.highScoreCount / reportsObj.totalScoreCount * 100)
  if (reportsObj.lowScoreCountPercent + reportsObj.moderateScoreCountPercent + reportsObj.highScoreCountPercent === 99) {
    reportsObj.highScoreCountPercent++
  }
}

const updateInitialAndProgressObjects = (seedData, reportsDataArr) => {
  seedData.forEach(userScore => {
    const { inClass, userName, scores } = userScore;
    // scores = [
    //   {
    //     scaleName: '',
    //     percentileScoreCurrent: 37,
    //     percentileScoreInitial: 95,
    //     rawScoreInitial: 26,
    //     rawScoreProgress: 20
    //   },
    //   ...
    // ]
    scores.forEach((scoreObj, index) => {
      // add initial score to low, moderate or high bucket
      const institutionalInitScoreObj = reportsDataArr[index].initialScores.institutionalScores
      const institutionalProgScoreObj = reportsDataArr[index].progressScores.institutionalScores
      const classInitScoreObj = reportsDataArr[index].initialScores.classScores
      const classProgScoreObj = reportsDataArr[index].progressScores.classScores

      // generate initial and progress institutional report objects
      updateReportsObj(institutionalInitScoreObj, userName, scoreObj.rawScoreInitial, scoreObj.percentileScoreInitial)
      updateReportsObj(institutionalProgScoreObj, userName, scoreObj.rawScoreProgress, scoreObj.percentileScoreCurrent)

      if (inClass) {
        updateReportsObj(classInitScoreObj, userName, scoreObj.rawScoreInitial, scoreObj.percentileScoreInitial)
        updateReportsObj(classProgScoreObj, userName, scoreObj.rawScoreProgress, scoreObj.percentileScoreCurrent)
      }
    })
  })
  return reportsDataArr
}

const updateChangeObject = (reportsDataArr) => {
  reportsDataArr.forEach(scale => {
    // calculate class change scores
    const classRawScoreAvgChange = (scale.progressScores.classScores.rawScoreAvg - scale.initialScores.classScores.rawScoreAvg).toFixed(2)
    const classRawScoreAvgChangePercent = (classRawScoreAvgChange / scale.initialScores.classScores.rawScoreAvg * 100).toFixed(1)
    // calculate institutional change scores
    const institutionalRawScoreAvgChange = (scale.progressScores.institutionalScores.rawScoreAvg  - scale.initialScores.institutionalScores.rawScoreAvg).toFixed(2)
    const institutionalRawScoreAvgChangePercent = (institutionalRawScoreAvgChange / scale.initialScores.institutionalScores.rawScoreAvg * 100).toFixed(1)
    // update change object
    scale.changeScores = {
      classScores: {
        rawScoreAvgChange: classRawScoreAvgChange,
        rawScoreAvgChangePercent: classRawScoreAvgChangePercent
      },
      institutionalScores: {
        rawScoreAvgChange: institutionalRawScoreAvgChange,
        rawScoreAvgChangePercent: institutionalRawScoreAvgChangePercent
      }
    }
  })
  // console.log(JSON.stringify(reportsDataArr));
  return reportsDataArr;
}

const BuildSeedModel = (seedData, reportsDataArr) => {
  const updatedReportsDataArr = updateInitialAndProgressObjects(seedData, reportsDataArr)
  return updateChangeObject(updatedReportsDataArr);
}

const reportsDataArr = BuildSeedModel(seedData, reportsDataArrTemplate);
// console.log(reportsDataArr);

export default reportsDataArr;
