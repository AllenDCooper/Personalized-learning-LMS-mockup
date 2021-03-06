import React from 'react';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import './NavBar.css'

function NavBar(props) {

  const styles = {
    dropdown: {
      position: 'absolute',
      left: '-80px',
      bottom: '-36px',
      width: '160px',
      backgroundColor: 'none',
      textAlign: 'center'
    },
    button: {
      color: 'white',
      fontWeight: 'bold',
      textDecoration: 'none',
      borderBottom: '2px solid white',
      borderRight: 'none',
      borderLeft: 'none',
      borderTop: 'none',
      borderRadius: '0',
      outline: '0',
      boxShadow: 'none',
      background: 'none',
      padding: '12px',
      fontSize: '14px'
    },
    dropdownRole: {
      position: 'absolute',
      right: '40px',
      bottom: '0px',
      backgroundColor: 'none',
      textAlign: 'center',
    },
    dropdownRoleMobile: {
      position: 'absolute',
      right: '0px',
      bottom: '0px',
      backgroundColor: 'none',
      textAlign: 'center',
    },
    buttonRole: {
      outline: '0',
      boxShadow: 'none',
      align: 'right',
      fontSize: '14px',
      padding: '12px'
    },
    dropdownRoleItem: {
      textAlign: 'right',
      padding: '4px 12px 4px 0px'
    },
    selectedMenuLink: {
      color: 'white',
      fontWeight: 'bold',
      textDecoration: 'none',
      borderBottom: '2px solid white'
    },
    menuLink: {
      color: 'gray',
      fontWeight: '300',
      padding: '0 10px'
    }
  }
  const handleClick = (event) => {
    event.preventDefault();
    console.log('clicked');
    props.setClickedLink(event.target.name);
    console.log(props.clickedLink);
  }

  let menuItemsArr = props.roleSelected === 'Instructor' || props.roleSelected === 'Administrator'
    ? [
      'ACES Reports',
      'E-book'
    ] :
    [
      'ACES',
      'My Goals',
      'Completed Goals',
      'E-book'
    ]

  let roleArr = [
    'Student',
    'Instructor',
    'Administrator'
  ]

  const handleRoleSelect = (event) => {
    props.setRoleSelected(event.target.name)
    if (event.target.name === "Instructor" || event.target.name === "Administrator") {
      props.setClickedLink('ACES Reports')
    } else if (event.target.name === "Student") {
      props.setClickedLink('ACES')
    }
  }

  const returnLogo = () => {
    if (window.innerWidth <= 740) {
      return <img style={{ width: '30px', height: '30px', position: 'absolute', bottom: '12px', left: '20px' }} src={`${process.env.PUBLIC_URL}/images/logo.png`} />
    }
    return <img style={{ width: '140px', height: '30px' }} src={`${process.env.PUBLIC_URL}/images/logo.svg`} />
  }

  return (
    <Navbar style={{ backgroundColor: '#0a181f', color: 'white', padding: '0 60px', height: '72px', position: 'relative' }}>
      <Navbar.Brand style={{ color: 'white' }} href="#home">{returnLogo()}</Navbar.Brand>
      {window.innerWidth <= 740 ?
        <Nav style={{ position: 'absolute', left: '50%' }}>
          <Dropdown style={styles.dropdown}>
            <Dropdown.Toggle variant="success" id="dropdown-basic" style={styles.button} >
              {props.clickedLink}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {menuItemsArr.map(menuItem => (
                <Dropdown.Item name={menuItem} onClick={handleClick}>{menuItem}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
        :
        <Nav style={{ margin: '0 auto', paddingTop: '40px', height: '72px', transform: 'translate(-140px, 0px)' }}>
          {props.roleSelected === 'Instructor' || props.roleSelected === 'Administrator'
            ?
            <>
            <a name='ACES Reports' onClick={handleClick} className='sans-pro-caps navbar-link' style={props.clickedLink === 'ACES Reports' ? styles.selectedMenuLink : styles.menuLink}>ACES Reports</a>
            <a name='E-book' onClick={handleClick} className='sans-pro-caps navbar-link' style={props.clickedLink === 'E-book' ? styles.selectedMenuLink : styles.menuLink}>E-book</a>
            </>
            :
            <>
            <a name='ACES' onClick={handleClick} className='sans-pro-caps navbar-link' style={props.clickedLink === 'ACES' ? styles.selectedMenuLink : styles.menuLink}>ACES</a>
            <a name='My Goals' onClick={handleClick} className='sans-pro-caps navbar-link' style={props.clickedLink === 'My Goals' ? styles.selectedMenuLink : styles.menuLink}>My Goals</a>
            <a name='Completed Goals' onClick={handleClick} className='sans-pro-caps navbar-link' style={props.clickedLink === 'Completed Goals' ? styles.selectedMenuLink : styles.menuLink}>Completed</a>
            <a name='E-book' onClick={handleClick} className='sans-pro-caps navbar-link' style={props.clickedLink === 'E-book' ? styles.selectedMenuLink : styles.menuLink}>E-book</a>
            </>
          }
        </Nav>
      }
      <span style={styles.instructorSwitch}>
        {/* <Form>
          <Form.Check
            type="switch"
            id="custom-switch"
            onClick={handleSwitch}
            label={props.instructorView ? "Instructor View On" : "Instructor View Off"}
          />
        </Form> */}
        <Dropdown style={window.innerWidth <= 740 ? styles.dropdownRoleMobile : styles.dropdownRole} alignRight='true'>
          <Dropdown.Toggle variant="primary" id="dropdown-basic" style={styles.buttonRole} >
            {props.roleSelected}
          </Dropdown.Toggle>
          <Dropdown.Menu align='right'>
            {roleArr.map(role => (
              <Dropdown.Item style={styles.dropdownRoleItem} name={role} onClick={handleRoleSelect}>{role}</Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </span>
    </Navbar>
  )
}

export default NavBar;