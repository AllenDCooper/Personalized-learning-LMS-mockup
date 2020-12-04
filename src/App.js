import React, { useState } from 'react';
import './App.css';

// importing react-boostrap styles
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Accordion, Card, Spinner } from 'react-bootstrap';

// importing components
import Main from './Views/Main';
import Reports from './Views/Reports';
// import Goals from './Views/Goals';
import NavBar from './Components/NavBar/NavBar';

function App(props) {

  const [clickedLink, setClickedLink] = useState('aces');

  return (
    <div style={{ fontFamily: 'Source Sans Pro, sans-serif'}}>
      <NavBar clickedLink={clickedLink} setClickedLink={setClickedLink} />
      <Main clickedLink={clickedLink} setClickedLink={setClickedLink} />
      {/* <Goals clickedLink={clickedLink} setClickedLink={setClickedLink} /> */}
      <Reports clickedLink={clickedLink} setClickedLink={setClickedLink} />
    </div>
  )
}

export default App;
