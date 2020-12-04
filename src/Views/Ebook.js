import React, { useState } from 'react';

// importing react-boostrap styles
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Form, Accordion, Card, Spinner, Jumbotron } from 'react-bootstrap';

function Ebook(props) {

  return (
    <div style={props.clickedLink === "ebook" ? { display: 'initial', backgroundColor: '#f3f3f3', minHeight: '740px' } : { display: 'none', backgroundColor: '#f3f3f3', minHeight: '740px' }}>
      <Container>
        <div className='tab-title-container'>
          <h1 className="tab-title">E-Book</h1>
        </div>
        <img className='report-img' src={`${process.env.PUBLIC_URL}/images/ebook.PNG`} />
      </Container>
    </div>
  )
}

export default Ebook; 