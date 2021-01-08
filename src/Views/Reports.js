import React, { useState } from 'react';
import seedData from '../Data/seed.js';
import InitialClassReport from '../Components/ReportsDashboard/InitialClassReport';
import ProgressClassReport from '../Components/ReportsDashboard/ProgressClassReport';
import ComparisonClassReport from '../Components/ReportsDashboard/ComparisonClassReport';
import ChangeClassReport from '../Components/ReportsDashboard/ChangeClassReport';

// importing react-boostrap styles
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Form, Accordion, Card, Spinner, Jumbotron } from 'react-bootstrap';

function Reports(props) {
  console.log(seedData)

  const [report, setReport] = useState("initial")
  const [view, setView] = useState("class")

  const reportName = `${report}_${view}`

  const handleReportClick = (event) => {
    setReport(event.target.name)
  }

  const handleViewClick = (event) => {
    setView(event.target.id)
  }

  let reportsObj = {
    initialClass: [],
    initialRoster: {},
    initialInstitutional: {},
    progressClass: [],
    progressRoster: {},
    progressInstitutional: {},
    changeClass: {},
    changeRoster: {},
    changeInstitutional: {}
  }

  const getReportsObj = (classType, reportsObj, index, scaleName) => {
    if (reportsObj[classType][index]) {
      return reportsObj
    }
    else {
      reportsObj[classType][index] = {
        name: scaleName,
        total: 0,
        low: 0,
        moderate: 0,
        high: 0,
        rawScore: 0,
        rawScoreAvg: 0,
      }
    }
    console.log(reportsObj)
    return reportsObj
  }

  seedData.forEach(userScore => {
    console.log('initialSeedRun')
    let updatedReportsObj = {}
    // first check to see if user is in this class
    if (userScore.class) {
      userScore.scores.forEach((scale, index) => {
        const scaleName = scale.name.name;

        // add scale if not yet added to reportsObj
        updatedReportsObj = getReportsObj('initialClass', reportsObj, index, scaleName)
        // add score to total
        updatedReportsObj.initialClass[index].total++
        // update total raw score and avg raw score
        updatedReportsObj.initialClass[index].rawScore += scale.rawScoreInitial;
        updatedReportsObj.initialClass[index].rawScoreAvg = (updatedReportsObj.initialClass[index].rawScore / updatedReportsObj.initialClass[index].total).toFixed(2)

        if (scale.percentileScoreInitial <= 25) {
          updatedReportsObj.initialClass[index].low++
        } else if (scale.percentileScoreInitial > 25 && scale.percentileScoreInitial <= 75) {
          updatedReportsObj.initialClass[index].moderate++
        } else if (scale.percentileScoreInitial > 75) {
          updatedReportsObj.initialClass[index].high++
        }
      })
      reportsObj = updatedReportsObj;
    }
  })

  seedData.forEach(userScore => {
    console.log('progressSeed run')
    let updatedReportsObj = {}
    // first check to see if user is in this class
    if (userScore.class) {
      userScore.scores.forEach((scale, index) => {
        const scaleName = scale.name.name;

        // add scale if not yet added to reportsObj
        updatedReportsObj = getReportsObj('progressClass', reportsObj, index, scaleName)
        // add score to total
        updatedReportsObj.progressClass[index].total++
        // update total raw score and avg raw score
        updatedReportsObj.progressClass[index].rawScore += scale.rawScoreProgress;
        updatedReportsObj.progressClass[index].rawScoreAvg = (updatedReportsObj.progressClass[index].rawScore / updatedReportsObj.progressClass[index].total).toFixed(2)

        if (scale.percentileScoreCurrent <= 25) {
          updatedReportsObj.progressClass[index].low++
        } else if (scale.percentileScoreCurrent > 25 && scale.percentileScoreCurrent <= 75) {
          updatedReportsObj.progressClass[index].moderate++
        } else if (scale.percentileScoreCurrent > 75) {
          updatedReportsObj.progressClass[index].high++
        }
      })
      reportsObj = updatedReportsObj;
    }
  })

  console.log(reportsObj)

  return (
    <div style={props.clickedLink === "Reports" ? { display: 'initial', backgroundColor: '#f3f3f3', minHeight: '740px' } : { display: 'none', backgroundColor: '#f3f3f3', minHeight: '740px' }}>
      <Container>
        <div className='tab-title-container'>
          <h1 className="tab-title">ACES Instructor Reports</h1>
        </div>
        <div>
          <Nav variant="tabs" defaultActiveKey="link-1" >
            <Nav.Item>
              <Nav.Link onClick={handleReportClick} name='initial' eventKey="link-1">Initial</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={handleReportClick} name='progress' eventKey="link-2">Progress</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={handleReportClick} name='comparison' eventKey="link-3">Comparison</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={handleReportClick} name='change' eventKey="link-4">Change</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <div className='reports-view'>
          <Form>
            <Form.Check onClick={handleViewClick} inline label="Class" type='radio' id='class' name='view' defaultChecked />
            <Form.Check onClick={handleViewClick} inline label="Roster" type='radio' id='roster' name='view' />
            <Form.Check onClick={handleViewClick} inline label="Institutional" type='radio' id='institutional' name='view' />
          </Form>
        </div>
        <div className='reports-view-title'>
          <h5 className='reports-view-heading'>{`${report} ${view} Report`}</h5>
          <div className='reports-view-hr'>
          </div>
        </div>
        {/* <iframe src="https://allendcooper.github.io/ACES-reports-dashboard/" height="1000px" width="100%" frameBorder="0" title="ACES reports">
        </iframe> */}
        {/* <img className='report-img' src={`${process.env.PUBLIC_URL}/images/${reportName}.PNG`} /> */}
        {report === 'initial' ?
          <InitialClassReport reportsObj={reportsObj} />
          :
          report === 'progress' ?
            <ProgressClassReport reportsObj={reportsObj} />
            :
            report === 'comparison' ?
              <ComparisonClassReport reportsObj={reportsObj} />
              :
              report === 'change' ?
                <ChangeClassReport reportsObj={reportsObj} />
                :
                null
        }
      </Container>
    </div>
  )
}

export default Reports;
