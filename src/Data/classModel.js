// create this reportsObj when reports component mounts, and use it to build reports
const reportsObjConstructor = (scaleName) => {
  return (
    {
      scaleName: scaleName,
      // INITIAL SCORES FOR INITIAL REPORTS
      initialScores: {
        // data from just the class
        classScores: {
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
          // user scores for initial ROSTER REPORT
          userScores: [
            // {
            //   userName: `user-index`,
            //   rawScoreInitial: 0,
            //   percentScoreInitial: 0
            // }
            // ...
          ]
        },
        // all data from the institution
        institutionalScores: {
          lowScoreCount: 0,
          // countPercents are used to populate the institutional report
          lowScoreCountPercent: 0,
          moderateScoreCount: 0,
          moderateScoreCountPercent: 0,
          highScoreCount: 0,
          highScoreCountPercent: 0,
          totalScoreCount: 0,
          rawScoreTotal: 0,
          // rawScoreAvg is used to calculate the change
          rawScoreAvg: 0,
          // institutional initial roster report?
          userScores: [
            // {
            //   userName: `user-index`,
            //   rawScoreInitial: 0,
            //   percentScoreInitial: 0
            // }
            // ...
          ]
        }
      },
      // PROGRESS SCORES FOR PROGRESS REPORTS
      progressScores: {
        // data from just the class
        classScores: {
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
          userScores: [
            // {
            //   userName: `user-index`,
            //   rawScoreInitial: 0,
            //   percentScoreInitial: 0
            // }
            // ...
          ]
        },
        // all data from the institution
        institutionalScores: {
          lowScoreCount: 0,
          // countPercents are used to populate the institutional report
          lowScoreCountPercent: 0,
          moderateScoreCount: 0,
          moderateScoreCountPercent: 0,
          highScoreCount: 0,
          highScoreCountPercent: 0,
          totalScoreCount: 0,
          rawScoreTotal: 0,
          // rawScoreAvg is used to calculate the change
          rawScoreAvg: 0,
          // institutional progress roster report?
          userScores: [
            // {
            //   userName: `user-index`,
            //   rawScoreInitial: 0,
            //   percentScoreInitial: 0
            // }
            // ...
          ]
        }
      },
      // CHANGE SCORES FOR CHANGE REPORT
      changeScores: {
        classScores: {
          rawScoreAvgChange: 0,
          rawScoreAvgChangePercent: 0
        },
        institutionalScores: {
          rawScoreAvgChange: 0,
          rawScoreAvgChangePercent: 0
        }
      },
    }
  )
}

export default reportsObjConstructor;