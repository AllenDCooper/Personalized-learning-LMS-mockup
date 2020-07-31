import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Jumbotron, Accordion, Card, Button } from 'react-bootstrap'
import ModalAssessment from './ModalAssessment/ModalAssessment';
import AccordionUnit from './AccordionUnit/AccordionUnit'

class App extends Component {

  constructor() {
    super();
    this.updateScore = this.updateScore.bind(this);
    this.submitScore = this.submitScore.bind(this);
  }

  state = {
    takenAssessment: false,
    seeAll: false,
    goalOne: null,
    goalTwo: null,
    goalThree: null,
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
    item11: null,
    item12: null,
    item13: null,
    item14: null,
    item15: null,
    item16: null,
    item17: null,
    item18: null,
    item19: null,
    item20: null,
    item21: null,
    item22: null,
    item23: null,
    item24: null,
    item25: null,
    item26: null,
    item27: null,
    item28: null,
    item29: null,
    item30: null,
    item31: null,
    item32: null,
    item33: null,
    item34: null,
    item35: null,
    item36: null,
    item37: null,
    item38: null,
    item39: null,
    item40: null,
    item41: null,
    item42: null,
    item43: null,
    item44: null,
    item45: null,
    item46: null,
    item47: null,
    item48: null,
    item49: null,
    item50: null,
    item51: null,
    item52: null,
    item53: null,
    item54: null,
    item55: null,
    item56: null,
    item57: null,
    item58: null,
    item59: null,
    item60: null,
    item61: null,
    item62: null,
    item63: null,
    item64: null,
    item65: null,
    item66: null,
    item67: null,
    item68: null,
    item69: null,
    item70: null,
    item71: null,
    item72: null,
    item73: null,
    item74: null,
    item75: null,
    item76: null,
    item77: null,
    item78: null,
    item79: null,
    item80: null,
    item81: null,
    item82: null,
    item83: null,
    item84: null
  }

  updateScore = (event) => {
    const name = event.target.name;
    const value = event.target.value

    this.setState({
      [name]: parseInt(value)
    });

    const answerStr = JSON.stringify(this.state)
    console.log(`Updated state ${answerStr}`)
  }

  submitScore = () => {
    // sum individual item scores to create aggregate raw scores for each scale
    const criticalThinkingScore = this.state.item1 + this.state.item35 + this.state.item43 + this.state.item60 + this.state.item69 + this.state.item77

    const motivationScore = this.state.item2 + this.state.item9 + this.state.item17 + this.state.item28 + this.state.item44 + (7 - this.state.item61) + this.state.item70 + (7 - this.state.item78)
    
    const learningScore = this.state.item3 + this.state.item10+(7-this.state.item22)+this.state.item29+this.state.item36+(7-this.state.item45)+(7-this.state.item52)+this.state.item62+this.state.item79

    const timeManagementScore = (7-this.state.item11)+(7-this.state.item23)+this.state.item30+(7-this.state.item46)+(7-this.state.item46)+(7-this.state.item53)+(7-this.state.item63)+(7-this.state.item71)

    const readingScore = this.state.item4+this.state.item12+this.state.item37+this.state.item47+this.state.item54+this.state.item72+this.state.item80

    const noteTakingScore = this.state.item5+this.state.item18+this.state.item24+this.state.item31+this.state.item38+this.state.item55+this.state.item64

    const memoryScore = this.state.item6+this.state.item19+this.state.item39+this.state.item56+this.state.item65+this.state.item81

    const testTakingScore = this.state.item13+this.state.item25+this.state.item40+this.state.item48+this.state.item66+this.state.item73+this.state.item82

    const commScore = this.state.item7+this.state.item20+this.state.item26+this.state.item49+this.state.item67+this.state.item74+this.state.item83

    const connectingScore = this.state.item14+this.state.item32+this.state.item41+this.state.item50+this.state.item57+this.state.item75+this.state.item84

    const healthScore = this.state.item15+this.state.item27+this.state.item33+this.state.item42+this.state.item58+this.state.item68+this.state.item58

    const planningScore = this.state.item8+this.state.item16+(7-this.state.item21)+this.state.item34+this.state.item51+(7-this.state.item59)+(7-this.state.item76)

    // store the aggregate raw scores for each scale into an array
    const answerArr = [{name: "criticalThinkingScore", value: criticalThinkingScore}, {name: "motivationScore", value: motivationScore}, {name: "learningScore", value: learningScore}, {name: "timeManagementScore", value: timeManagementScore}, {name: "readingScore", value: readingScore}, {name: "noteTakingScore", value: noteTakingScore}, {name: "memoryScore", value: memoryScore}, {name: "testTakingScore", value: testTakingScore}, {name: "commScore", value: commScore}, {name: "connectingScore", value: connectingScore}, {name: "healthScore", value: healthScore}, {name: "planningScore", value: planningScore}]

    // sort the array from smallest to largest
    const sortedValues = this.sortValues(answerArr)

    // save the three smallest values
    const goalOne = sortedValues[0]
    const goalTwo = sortedValues[1]
    const goalThree = sortedValues[2]

    this.setState({
      takenAssessment: true,
      goalOne: goalOne,
      goalTwo: goalTwo,
      goalThree: goalThree
    });
    alert(`Total Scores = ${JSON.stringify(this.state)}`)
  }

  handleReset = () => {
    this.setState({
      takenAssessment: null
    })
  }

  handleSeeAll = () => {
    this.setState({
      seeAll: this.state.seeAll === false ? true : false
    })
  }


  sortValues = (arr) => {
    console.log(arr)
    arr.sort(function (a, b) { 
      return a.value - b.value
    })
    let newArr = []
    for (let i=0; i<arr.length; i++) {
      newArr.push(arr[i])
    }
    return newArr
  }

  getScales = (sortedArr) => {
    console.log(sortedArr)
    let newArr = []
    for (let i=0; i<sortedArr.length; i++) {
      newArr.push(sortedArr[i])
    }
    return newArr
  }
  render() {

    
    if (this.state.seeAll === false && this.state.takenAssessment) {
      return (
        <div>
          <Container>
            <Jumbotron>
              <h1>App</h1>
              <Button variant="primary" onClick={this.handleReset} style={{ marginRight: "20px" }}>
                Reset
              </Button>
              <Button variant="primary" onClick={this.handleSeeAll}>
                Toggle See All
              </Button>
            </Jumbotron>
            <section>
              <Accordion>
                <AccordionUnit score={this.state.goalOne} />
                <AccordionUnit score={this.state.goalTwo} />
                <AccordionUnit score={this.state.goalThree} />
              </Accordion>
            </section>
          </Container>
        </div>
      )
    } else if (this.state.seeAll === false) {
      return (
        <div>
          <Container>
            <Jumbotron>
              <h1>App</h1>
              <Button variant="primary" onClick={this.handleReset} style={{ marginRight: "20px" }}>
                Reset
              </Button>
              <Button variant="primary" onClick={this.handleSeeAll}>
                Toggle See All
              </Button>
            </Jumbotron>
            <section>
              <Accordion>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    Self-Assessment (Initial)
                </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <div>
                      <ModalAssessment updateScore={this.updateScore} submitScore={this.submitScore} />
                    </div>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </section>
          </Container>
        </div>
      );
    } else {
      return (
        <div>
          <Container>
            <Jumbotron>
              <h1>App</h1>
              <Button variant="primary" onClick={this.handleReset} style={{ marginRight: "20px" }}>
                Reset
              </Button>
              <Button variant="primary" onClick={this.handleSeeAll}>
                Toggle See All
              </Button>
            </Jumbotron>
            <section>
              <Accordion>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    Self-Assessment (Initial)
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <div>
                      <ModalAssessment updateScore={this.updateScore} submitScore={this.submitScore} />
                    </div>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="4">
                    Organization and Time Management
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="4">
                    <div>
                      <Card.Body>Activity 1</Card.Body>
                      <Card.Body>Activity 2</Card.Body>
                      <Card.Body>Activity 3</Card.Body>
                    </div>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="6">
                    Note Taking
                </Accordion.Toggle>
                  <Accordion.Collapse eventKey="6">
                    <div>
                      <Card.Body>Activity 1</Card.Body>
                      <Card.Body>Activity 2</Card.Body>
                      <Card.Body>Activity 3</Card.Body>
                    </div>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </section>
          </Container>
        </div>
      )
    }
  }
}
export default App;
