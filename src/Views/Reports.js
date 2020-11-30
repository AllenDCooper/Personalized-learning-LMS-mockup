import React from 'react';

// importing react-boostrap styles
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Accordion, Card, Spinner } from 'react-bootstrap';

function Reports(props) {

  return (
    <div style={props.clickedLink === "reports" ? {display: null} : {display: 'none'}}>
      <iframe src="https://allendcooper.github.io/ACES-reports-dashboard/" height="1000px" width="100%" title="ACES reports">
      </iframe>
    </div>
  )
}

export default Reports;
