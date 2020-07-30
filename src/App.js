import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AccordionUnit from './Accordion/Accordion'
import { Container, Jumbotron } from 'react-bootstrap'

function App() {
  return (
    <div>
      <Container>
        <Jumbotron>
          <h1>App</h1>
        </Jumbotron>
        <section>
          <AccordionUnit />
        </section>
      </Container>
    </div>
  );
}

export default App;
