import React, { useState } from 'react';
import './App.css';

// importing react-boostrap styles
import 'bootstrap/dist/css/bootstrap.min.css';

// importing components
import Main from './Views/Main';
import Reports from './Views/Reports';
import Ebook from './Views/Ebook';
import NavBar from './Components/NavBar/NavBar';

function App(props) {

  const [clickedLink, setClickedLink] = useState('ACES');
  const [roleSelected, setRoleSelected] = useState('Student');

  return (
    <div style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>
      <NavBar clickedLink={clickedLink} setClickedLink={setClickedLink} roleSelected={roleSelected} setRoleSelected={setRoleSelected} />
      <Main clickedLink={clickedLink} setClickedLink={setClickedLink} roleSelected={roleSelected} />
      {/* <Goals clickedLink={clickedLink} setClickedLink={setClickedLink} /> */}
      <Reports clickedLink={clickedLink} setClickedLink={setClickedLink} roleSelected={roleSelected} />
      <Ebook clickedLink={clickedLink} setClickedLink={setClickedLink} />
    </div>
  )
}

export default App;
