import React, {useState} from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './NavBar.css'

function NavBar(props) {

  const handleClick = (event) => {
    event.preventDefault();
    console.log('clicked');
    props.setClickedLink(event.target.name);
    console.log(props.clickedLink);
  }

  return (
    <Navbar style={{backgroundColor: '#0a181f', color: 'white', padding: '0 60px', height: '72px'}}>
      <Navbar.Brand style={{color: 'white'}} href="#home"><img style={{width: '140px', height: '30px' }} src={`${process.env.PUBLIC_URL}/images/logo.svg`}/></Navbar.Brand>
      <Nav style={{ margin: '0 auto', paddingTop: '40px', height: '72px', transform: 'translate(-140px, 0px)'}}>
        <a name='home' onClick={handleClick} className='sans-pro-caps navbar-link' style={props.clickedLink === 'home' ? {color: 'white', fontWeight: 'bold', textDecoration: 'none', fontWeight: '900', borderBottom: '2px solid white'} : { color: 'gray', fontWeight: '300', padding: '0 10px'}}>Home</a>
        <a name='reports' onClick={handleClick} className='sans-pro-caps navbar-link' style={props.clickedLink === 'reports' ? {color: 'white', fontWeight: 'bold', textDecoration: 'none', fontWeight: '900', borderBottom: '2px solid white'} : { color: 'gray', fontWeight: '300', padding: '0 10px'} }>Reports</a>
      </Nav>
    </Navbar>
  )
}

export default NavBar;