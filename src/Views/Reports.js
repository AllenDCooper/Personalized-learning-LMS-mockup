import React, { useState } from 'react';
import userModelSeed from '../Data/userModelSeed.js';
import ClassReport from '../Components/ReportsDashboard/ClassReport';
import ComparisonClassReport from '../Components/ReportsDashboard/ComparisonClassReport';
import ChangeClassReport from '../Components/ReportsDashboard/ChangeClassReport';
import RosterReport from '../Components/ReportsDashboard/RosterReport';
import RosterComparisonReport from '../Components/ReportsDashboard/ComparisonRosterReport';
import reportsDataArr from '../Data/classModelSeed';
import ReportDescriptions from '../Components/ReportsDashboard/ReportDescriptions';

// importing react-boostrap styles
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Form } from 'react-bootstrap';

function Reports(props) {
  console.log(userModelSeed)

  const [report, setReport] = useState("initial")
  const [view, setView] = useState("class")

  const reportName = `${report}_${view}`

  const handleReportClick = (event) => {
    setReport(event.target.name)
  }

  const handleViewClick = (event) => {
    setView(event.target.id)
  }

  const getReport = (reportName) => {
    switch (reportName) {
      case 'initial_class':
        return <ClassReport reportsDataArr={reportsDataArr} scoreType={'initialScores'} scoreCohort={'classScores'} ReportDescription={ReportDescriptions['initial_class']} />
      case 'initial_roster':
        return <RosterReport userModelSeed={userModelSeed} scoreType={'percentileScoreInitial'} scoreCohort={'classScores'} ReportDescription={ReportDescriptions['initial_roster']} />
      case 'initial_institutional':
        return <ClassReport reportsDataArr={reportsDataArr} scoreType={'initialScores'} scoreCohort={'institutionalScores'} ReportDescription={ReportDescriptions['initial_institutional']} />
      case 'progress_class':
        return <ClassReport reportsDataArr={reportsDataArr} scoreType={'progressScores'} scoreCohort={'classScores'} ReportDescription={ReportDescriptions['progress_class']} />
      case 'progress_roster':
        return <RosterReport userModelSeed={userModelSeed} scoreType={'percentileScoreCurrent'} scoreCohort={'classScores'} ReportDescription={ReportDescriptions['progress_roster']} />
      case 'progress_institutional':
        return <ClassReport reportsDataArr={reportsDataArr} scoreType={'progressScores'} scoreCohort={'institutionalScores'} ReportDescription={ReportDescriptions['progress_institutional']} />
      case 'comparison_class':
        return <ComparisonClassReport reportsDataArr={reportsDataArr} scoreCohort={'classScores'} ReportDescription={ReportDescriptions['comparison_class']} />
      case 'comparison_roster':
        return <RosterReport userModelSeed={userModelSeed} scoreType={'percentileScoreInitial'} scoreTypeAlt={'percentileScoreCurrent'} ReportDescription={ReportDescriptions['comparison_roster']} />
      case 'comparison_institutional':
        return <ComparisonClassReport reportsDataArr={reportsDataArr} scoreCohort={'institutionalScores'} ReportDescription={ReportDescriptions['comparison_institutional']} />
      case 'change_class':
        return <ChangeClassReport reportsDataArr={reportsDataArr} scoreCohort={'classScores'} ReportDescription={ReportDescriptions['change_class']} />
      case 'change_roster':
        return <RosterReport userModelSeed={userModelSeed} scoreType={'percentileScoreChange'} ReportDescription={ReportDescriptions['change_roster']} />
      case 'change_institutional':
        return <ChangeClassReport reportsDataArr={reportsDataArr} scoreCohort={'institutionalScores'} ReportDescription={ReportDescriptions['change_institutional']} />
      default:
        return null
    }
  }

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
        <div className='reports-container'>
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
          {getReport(reportName)}
        </div>
      </Container>
    </div>
  )
}

export default Reports;
