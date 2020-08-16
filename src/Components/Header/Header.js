import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

function Header(props) {
  return (
    <Jumbotron>
      <h1>ACES Goal-Setter</h1>
      <Button variant="primary" onClick={props.onClickReset} style={{ marginRight: "20px" }}>
        Reset
            </Button>
      <Button variant="primary" onClick={props.onClickSeeAll} style={{ marginRight: "20px" }}>
        Toggle See All
            </Button>
    </Jumbotron>
  )
}

export default Header;

