import React from 'react';

// importing react-boostrap styles
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Accordion, Card, Spinner, Jumbotron } from 'react-bootstrap';

function Reports(props) {

  return (
    <div style={props.clickedLink === "reports" ? { display: null, backgroundColor: '#f3f3f3', minHeight: '740px' } : { display: 'none', backgroundColor: '#f3f3f3', minHeight: '740px' }}>
      <Container>
        <div style={{ backgroundColor: '#f3f3f3', padding: '40px 40px 40px 0px' }}>
          <h1 className="sans-pro-header">ACES Instructor Reports</h1>
        </div>
        <iframe src="https://allendcooper.github.io/ACES-reports-dashboard/" height="1000px" width="100%" frameBorder="0" title="ACES reports">
        </iframe>
      </Container>
    </div>
  )
}

export default Reports;
