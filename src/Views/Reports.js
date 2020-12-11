import React, { useState } from 'react';

// importing react-boostrap styles
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Form, Accordion, Card, Spinner, Jumbotron } from 'react-bootstrap';

function Reports(props) {

  const [report, setReport] = useState("initial")
  const [view, setView] = useState("class")

  const reportName = `${report}_${view}`

  const handleReportClick = (event) => {
    setReport(event.target.name)
  }

  const handleViewClick = (event) => {
    setView(event.target.id)
  }

  return (
    <div style={props.clickedLink === "reports" ? { display: 'initial', backgroundColor: '#f3f3f3', minHeight: '740px' } : { display: 'none', backgroundColor: '#f3f3f3', minHeight: '740px' }}>
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
        <img className='report-img' src={`${process.env.PUBLIC_URL}/images/${reportName}.PNG`} />
      </Container>
    </div>
  )
}

export default Reports;
