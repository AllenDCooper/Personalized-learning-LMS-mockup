import React from 'react';

// importing react-boostrap styles
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

function Ebook(props) {

  return (
    <div style={props.clickedLink === "E-book" ? { display: 'initial', backgroundColor: '#f3f3f3', minHeight: '740px' } : { display: 'none', backgroundColor: '#f3f3f3', minHeight: '740px' }}>
      <Container>
        <div className='tab-title-container'>
          <h1 className="tab-title">E-Book</h1>
        </div>
        <img className='report-img' src={`${process.env.PUBLIC_URL}/images/ebook.PNG`} alt='report' />
      </Container>
    </div>
  )
}

export default Ebook; 