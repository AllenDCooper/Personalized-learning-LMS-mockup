import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Jumbotron, Accordion, Card } from 'react-bootstrap'
import ModalAssessment from './ModalAssessment/ModalAssessment';

class App extends Component {

  state = {
    item1: null,
    item2: null,
    item3: null,
    item4: null,
    item5: null,
    item6: null,
    item7: null,
    item8: null,
    item9: null,
    item10: null,
  }

  updateScore = (event) => {
    const name = event.target.name;
    const value = event.target.value

    this.setState({
      [name]: value
    });

    const answerStr = JSON.stringify(this.state)
    console.log(`Updated state ${answerStr}`)
  }

  alertScore = () => {
    alert(`Total Scores = ${JSON.stringify(this.state)}`)
  }

  render() {
    return (
      <div>
        <Container>
          <Jumbotron>
            <h1>App</h1>
          </Jumbotron>
          <section>
            <Accordion>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  Self-Assessment (Initial)
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <div>
                    <ModalAssessment updateScore={this.updateScore} alertScore={this.alertScore} />
                  </div>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  Critical Thinking and Goal Setting
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <div>
                    <Card.Body>Activity 1.1</Card.Body>
                    <Card.Body>Activity 1.2</Card.Body>
                    <Card.Body>Activity 1.3</Card.Body>
                  </div>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                  Motivation, Decision Making, and Personal Responsibility
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <div>
                    <Card.Body>Activity 2.1</Card.Body>
                    <Card.Body>Activity 2.2</Card.Body>
                    <Card.Body>Activity 2.3</Card.Body>
                  </div>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="3">
                  Learning Preferences
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                  <div>
                    <Card.Body>Activity 3.1</Card.Body>
                    <Card.Body>Activity 3.2</Card.Body>
                    <Card.Body>Activity 3.3</Card.Body>
                  </div>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="4">
                  Organization and Time Management
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="4">
                  <div>
                    <Card.Body>Activity 4.1</Card.Body>
                    <Card.Body>Activity 4.2</Card.Body>
                    <Card.Body>Activity 4.3</Card.Body>
                  </div>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="5">
                  Reading
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="5">
                  <div>
                    <Card.Body>Activity 5.1</Card.Body>
                    <Card.Body>Activity 5.2</Card.Body>
                    <Card.Body>Activity 5.3</Card.Body>
                  </div>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="6">
                  Note Taking
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="6">
                  <div>
                    <Card.Body>Activity 6.1</Card.Body>
                    <Card.Body>Activity 6.2</Card.Body>
                    <Card.Body>Activity 6.3</Card.Body>
                  </div>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="7">
                  Memory and Studying
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="7">
                  <div>
                    <Card.Body>Activity 7.1</Card.Body>
                    <Card.Body>Activity 7.2</Card.Body>
                    <Card.Body>Activity 7.3</Card.Body>
                  </div>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="8">
                  Test Taking
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="8">
                  <div>
                    <Card.Body>Activity 8.1</Card.Body>
                    <Card.Body>Activity 8.2</Card.Body>
                    <Card.Body>Activity 8.3</Card.Body>
                  </div>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="9">
                  Information Literacy and Communication
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="9">
                  <div>
                    <Card.Body>Activity 9.1</Card.Body>
                    <Card.Body>Activity 9.2</Card.Body>
                    <Card.Body>Activity 9.3</Card.Body>
                  </div>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="10">
                  Connecting with Others
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="10">
                  <div>
                    <Card.Body>Activity 10.1</Card.Body>
                    <Card.Body>Activity 10.2</Card.Body>
                    <Card.Body>Activity 10.3</Card.Body>
                  </div>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="11">
                  Personal and Financial Health
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="11">
                  <div>
                    <Card.Body>Activity 11.1</Card.Body>
                    <Card.Body>Activity 11.2</Card.Body>
                    <Card.Body>Activity 11.3</Card.Body>
                  </div>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="12">
                  Academic and Career Planning
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="12">
                  <div>
                    <Card.Body>Activity 12.1</Card.Body>
                    <Card.Body>Activity 12.2</Card.Body>
                    <Card.Body>Activity 12.3</Card.Body>
                  </div>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </section>
        </Container>
      </div>
    );
  }
}
export default App;
