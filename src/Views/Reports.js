import React, { useEffect, useState } from 'react';
import userModelSeed from '../Data/userModelSeed.js';
import ClassReport from '../Components/ReportsDashboard/ClassReport';
import ComparisonClassReport from '../Components/ReportsDashboard/ComparisonClassReport';
import ChangeClassReport from '../Components/ReportsDashboard/ChangeClassReport';
import RosterReport from '../Components/ReportsDashboard/RosterReport';
import RosterComparisonReport from '../Components/ReportsDashboard/ComparisonRosterReport';
import CourseReport from '../Components/ReportsDashboard/CourseReport';
// import ChangeCourseReport from '../Components/ReportsDashboard/ChangeCourseReport';
import reportsDataArr from '../Data/classModelSeed';
import ReportDescriptions from '../Components/ReportsDashboard/ReportDescriptions';

// importing react-boostrap styles
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Form, Row, Col } from 'react-bootstrap';

function Reports(props) {

  const styles = {
    strengthsSwitch: {
      paddingTop: '0px'
    },
    mobileStrengthsSwitch: {
      paddingBottom: '20px',
      textAlign: 'center'
    }
  }

  const [report, setReport] = useState("initial")
  const [view, setView] = useState('class')
  const [strengthsViewOn, setStrengthsViewOn] = useState(false)

  useEffect(() => {
    if(props.roleSelected === "Instructor" && view === "course") {
      setView("class")
    }
    if(props.roleSelected === "Administrator" && view === "class") {
      setView("course")
    }
  });

  const handleClick = () => {
    setStrengthsViewOn(!strengthsViewOn)
  }

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
        return <ClassReport reportsDataArr={reportsDataArr} scoreType={'initialScores'} scoreCohort={'classScores'} ReportDescription={ReportDescriptions['initial_class']} strengthsViewOn={strengthsViewOn} cohortName={'Class'} />
      case 'initial_roster':
        return <RosterReport userModelSeed={userModelSeed} scoreType={'percentileScoreInitial'} scoreCohort={'classScores'} ReportDescription={ReportDescriptions['initial_roster']} strengthsViewOn={strengthsViewOn} cohortName={"Students with"} />
      case 'initial_institutional':
        return <ClassReport reportsDataArr={reportsDataArr} scoreType={'initialScores'} scoreCohort={'institutionalScores'} ReportDescription={ReportDescriptions['initial_institutional']} strengthsViewOn={strengthsViewOn} cohortName={'Institutional'} />
      case 'initial_course':
        return <CourseReport reportsDataArr={reportsDataArr} scoreType={'initialScores'} scoreCohort={'classScores'} ReportDescription={ReportDescriptions['initial_class']} strengthsViewOn={strengthsViewOn} cohortName={'Class'} />
      case 'progress_class':
        return <ClassReport reportsDataArr={reportsDataArr} scoreType={'progressScores'} scoreCohort={'classScores'} ReportDescription={ReportDescriptions['progress_class']} strengthsViewOn={strengthsViewOn} cohortName={'Class'} />
      case 'progress_roster':
        return <RosterReport userModelSeed={userModelSeed} scoreType={'percentileScoreCurrent'} scoreCohort={'classScores'} ReportDescription={ReportDescriptions['progress_roster']} strengthsViewOn={strengthsViewOn} cohortName={"Students with"} />
      case 'progress_institutional':
        return <ClassReport reportsDataArr={reportsDataArr} scoreType={'progressScores'} scoreCohort={'institutionalScores'} ReportDescription={ReportDescriptions['progress_institutional']} strengthsViewOn={strengthsViewOn} cohortName={'Institutional'} />
      case 'progress_course':
        return <CourseReport reportsDataArr={reportsDataArr} scoreType={'progressScores'} scoreCohort={'classScores'} ReportDescription={ReportDescriptions['progress_class']} strengthsViewOn={strengthsViewOn} cohortName={'Class'} />
      case 'comparison_class':
        return <ComparisonClassReport reportsDataArr={reportsDataArr} scoreCohort={'classScores'} ReportDescription={ReportDescriptions['comparison_class']} strengthsViewOn={strengthsViewOn} cohortName={'Class'} />
      case 'comparison_roster':
        return <RosterReport userModelSeed={userModelSeed} scoreType={'percentileScoreInitial'} scoreTypeAlt={'percentileScoreCurrent'} ReportDescription={ReportDescriptions['comparison_roster']} strengthsViewOn={strengthsViewOn} cohortName={"Students with"} />
      case 'comparison_institutional':
        return <ComparisonClassReport reportsDataArr={reportsDataArr} scoreCohort={'institutionalScores'} ReportDescription={ReportDescriptions['comparison_institutional']} strengthsViewOn={strengthsViewOn} cohortName={'Institutional'} />
      case 'comparison_course':
        return <CourseReport reportsDataArr={reportsDataArr} scoreType={'initialScores'} scoreTypeAlt={'progressScores'} scoreCohort={'classScores'} ReportDescription={ReportDescriptions['comparison_course']} strengthsViewOn={strengthsViewOn} cohortName={'Class'} />
      case 'change_class':
        return <ClassReport reportsDataArr={reportsDataArr} scoreType={'changeScores'} scoreCohort={'classScores'} ReportDescription={ReportDescriptions['change_class']} strengthsViewOn={strengthsViewOn} cohortName={'Class'} />
      case 'change_roster':
        return <RosterReport userModelSeed={userModelSeed} scoreType={'percentileScoreChange'} ReportDescription={ReportDescriptions['change_roster']} strengthsViewOn={strengthsViewOn} cohortName={"Students with"} />
      case 'change_institutional':
        return <ClassReport reportsDataArr={reportsDataArr} scoreType={'changeScores'} scoreCohort={'institutionalScores'} ReportDescription={ReportDescriptions['change_institutional']} strengthsViewOn={strengthsViewOn} cohortName={'Institutional'} />
      case 'change_course':
        return <CourseReport reportsDataArr={reportsDataArr} scoreType={'changeScores'} scoreCohort={'classScores'} ReportDescription={ReportDescriptions['change_class']} strengthsViewOn={strengthsViewOn} cohortName={'Class'} />
      default:
        return null
    }
  }

  return (
    <div style={props.clickedLink === "ACES Reports" ? { display: 'initial', backgroundColor: '#f3f3f3', minHeight: '740px' } : { display: 'none', backgroundColor: '#f3f3f3', minHeight: '740px' }}>
      <Container>
        <div className='tab-title-container'>
          <h1 className="tab-title">{props.roleSelected === "Instructor" ? "ACES Instructor Reports" : "ACES Institutional Reports"}</h1>
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
            <Row>
              <Col xs={12} md={10} >
                <Form>
                  {props.roleSelected === "Instructor" ?
                    <>
                      <Form.Check onClick={handleViewClick} inline label="Class" type='radio' id='class' name='view' defaultChecked />
                      <Form.Check onClick={handleViewClick} inline label="Roster" type='radio' id='roster' name='view' />
                    </>
                    :
                    <Form.Check onClick={handleViewClick} inline label="Course" type='radio' id='course' name='view' defaultChecked />
                  }
                  <Form.Check onClick={handleViewClick} inline label="Institutional" type='radio' id='institutional' name='view' />
                </Form>
              </Col>
              <Col xs={12} md={2} >
                <Form>
                  <Form.Check
                    type="switch"
                    id="strengths-switch"
                    label="Sort Strengths"
                    style={window.innerWidth <= 740 ? styles.mobileStrengthsSwitch : styles.strengthsSwitch}
                    onClick={handleClick}
                  />
                </Form>
              </Col>
            </Row>
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
