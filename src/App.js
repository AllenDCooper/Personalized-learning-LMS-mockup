import React, { useState } from 'react';
import './App.css';

// importing react-boostrap styles
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Accordion, Card, Spinner } from 'react-bootstrap';

// importing components
import Main from './Views/Main';
import Reports from './Views/Reports';
import NavBar from './Components/NavBar/NavBar';

function App(props) {

  const [clickedLink, setClickedLink] = useState('home');

  return (
    <div style={{ fontFamily: 'Source Sans Pro, sans-serif'}}>
      <NavBar clickedLink={clickedLink} setClickedLink={setClickedLink} />
      <Main clickedLink={clickedLink} />
      <Reports clickedLink={clickedLink} />
    </div>
  )
}

export default App;
