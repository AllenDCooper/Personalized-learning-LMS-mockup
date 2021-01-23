import userModelSeed from './userModelSeed.js'
import reportsObjConstructor from './classModel.js'
import scales from '../ACES_Assessment/scales'

let reportsDataArrTemplate = scales.map(scale => reportsObjConstructor(scale.name))

const updateReportsObj = (reportsObj, userName, rawScore, percentScore) => {

  // push user into userScore arra
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
    const { classID, userName, scores } = userScore;
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
      const institutionalInitScoreObj = reportsDataArr[index].initialScores.institutionalScores[0]
      const institutionalProgScoreObj = reportsDataArr[index].progressScores.institutionalScores[0]
      const classInitScoreObj = reportsDataArr[index].initialScores.classScores
      const classProgScoreObj = reportsDataArr[index].progressScores.classScores

      // generate initial and progress institutional report objects
      updateReportsObj(institutionalInitScoreObj, userName, scoreObj.rawScoreInitial, scoreObj.percentileScoreInitial)
      updateReportsObj(institutionalProgScoreObj, userName, scoreObj.rawScoreProgress, scoreObj.percentileScoreCurrent)

      if (!classInitScoreObj[classID - 1]) {
        classInitScoreObj.push({
          classID: classID,
          lowScoreCount: 0,
          // countPercents are used to populate the class report
          lowScoreCountPercent: 0,
          moderateScoreCount: 0,
          moderateScoreCountPercent: 0,
          highScoreCount: 0,
          highScoreCountPercent: 0,
          totalScoreCount: 0,
          rawScoreTotal: 0,
          // rawScoreAvg is used to calculate the change
          rawScoreAvg: 0,
          // user scores for progress ROSTER REPORT
          userScores: []
        })
      }
      if (!classProgScoreObj[classID - 1]) {
        classProgScoreObj.push({
          classID: classID,
          lowScoreCount: 0,
          // countPercents are used to populate the class report
          lowScoreCountPercent: 0,
          moderateScoreCount: 0,
          moderateScoreCountPercent: 0,
          highScoreCount: 0,
          highScoreCountPercent: 0,
          totalScoreCount: 0,
          rawScoreTotal: 0,
          // rawScoreAvg is used to calculate the change
          rawScoreAvg: 0,
          // user scores for progress ROSTER REPORT
          userScores: []
        })
      }
      updateReportsObj(classInitScoreObj[classID - 1], userName, scoreObj.rawScoreInitial, scoreObj.percentileScoreInitial)
      updateReportsObj(classProgScoreObj[classID - 1], userName, scoreObj.rawScoreProgress, scoreObj.percentileScoreCurrent)
    })
  })
  return reportsDataArr
}

const updateChangeObject = (reportsDataArr) => {
  reportsDataArr.forEach(scale => {
    // calculate class change scores
    scale.initialScores.classScores.forEach((classScoreObj, index) => {
      const classRawScoreAvgChange = (scale.progressScores.classScores[index].rawScoreAvg - scale.initialScores.classScores[index].rawScoreAvg).toFixed(2)
      const classRawScoreAvgChangePercent = (classRawScoreAvgChange / scale.initialScores.classScores[index].rawScoreAvg * 100).toFixed(1)
      scale.changeScores.classScores.push({
        classID: index + 1,
        rawScoreAvgChange: classRawScoreAvgChange,
        rawScoreAvgChangePercent: classRawScoreAvgChangePercent
      })
    })

    const institutionalRawScoreAvgChange = (scale.progressScores.institutionalScores[0].rawScoreAvg - scale.initialScores.institutionalScores[0].rawScoreAvg).toFixed(2)
    const institutionalRawScoreAvgChangePercent = (institutionalRawScoreAvgChange / scale.initialScores.institutionalScores[0].rawScoreAvg * 100).toFixed(1)
    // update change object
    scale.changeScores.institutionalScores.push(
      {
        rawScoreAvgChange: institutionalRawScoreAvgChange,
        rawScoreAvgChangePercent: institutionalRawScoreAvgChangePercent
      }
    )
  })
// console.log(JSON.stringify(reportsDataArr));
return reportsDataArr;
}

const BuildSeedModel = (seedData, reportsDataArr) => {
  const updatedReportsDataArr = updateInitialAndProgressObjects(seedData, reportsDataArr)
  return updateChangeObject(updatedReportsDataArr);
}

const reportsDataArr = BuildSeedModel(userModelSeed, reportsDataArrTemplate);
// console.log(reportsDataArr);

export default reportsDataArr;
