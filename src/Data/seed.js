import normTable from '../ACES_Assessment/normTable.js'
import scales from '../ACES_Assessment/scales.js'

const convertToPercentile = (value, scaleIndex) => {
  // scaleIndex determines which of the scales in the norm table should be used
  // loops through each score for that particular scale in the norm table
  for (var i = 0; i < normTable[scaleIndex].length; i++) {
    const normScore = normTable[scaleIndex][i]
    // finds normScore that is equal to passed in value, and returns it
    if (value === parseInt(Object.keys(normScore))) {
      return (parseInt(Object.values(normScore)))
    }
  }
}

const scaleConstructor = (scaleName, rawScoreInitial, rawScoreProgress, scaleIndex) => {
  return {
    name: scaleName,
    rawScoreInitial: rawScoreInitial,
    rawScoreProgress: rawScoreProgress,
    percentileScoreCurrent: convertToPercentile(rawScoreProgress, scaleIndex),
    percentileScoreInitial: convertToPercentile(rawScoreInitial, scaleIndex)
  }
}

const createScoreArr = (scaleArr) => {
  let newScoreArr = []
  scaleArr.forEach((scaleName, index) => {
    const possibleScoreArr = normTable[index]
    const rn = Math.floor(Math.random() * (possibleScoreArr.length - 20) + 10)
    const rn2 = Math.floor(Math.random() * (possibleScoreArr.length - 10) + 9)
    const rawScoreInitial = parseInt(Object.keys(possibleScoreArr[rn])[0])
    const rawScoreProgress = parseInt(Object.keys(possibleScoreArr[rn2])[0])
    let newScoreObj = scaleConstructor(scaleName, rawScoreInitial, rawScoreProgress, index)
    newScoreArr.push(newScoreObj)
  })
  return newScoreArr
}

const User = (scoreArr, userName) => {
  this.userName = userName;
  this.scoreArr = scoreArr
}

const createSeedData = (numUsersToCreate) => {
  let seedDataArr = []
  for (let i = 0; i < numUsersToCreate; i++) {
    const seedUserData = createScoreArr(scales);
    const userName = `user-${i}`
    let thisClass = false;
    if (i < 20) {
      thisClass = true;
    }
    const newUser = {userName: userName, scores: seedUserData, class: thisClass}
    seedDataArr.push(newUser)
  }
  return seedDataArr
}

const seedData = createSeedData(100)

export default seedData;