import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Accordion, Card } from 'react-bootstrap';
import ModalAssessment from './ModalAssessment/ModalAssessment';
import AccordionUnit from './AccordionUnit/AccordionUnit';
import Scorecard from './Scorecard/Scorecard';
import normTable from './ACES_Assessment/normTable.js';
import Header from './Header/Header';
import itemsArr from './ACES_Assessment/itemsArr';
import scales from './ACES_Assessment/scales';

class App extends Component {

  constructor() {
    super();
    this.updateScore = this.updateScore.bind(this);
    this.submitScore = this.submitScore.bind(this);
    this.randomScore = this.randomScore.bind(this);
  }

  state = {
    takenAssessment: false,
    seeAll: false,
    goalOne: null,
    goalTwo: null,
    goalThree: null,
    scoreArr: [],
    rawScoreArr: [],
    answerArr: [],
  }

  updateScore = (event, index) => {
    // const index = parseInt(event.target.key);
    const value = parseInt(event.target.value);

    this.setState(state => {
      const answerArr = state.answerArr;
      answerArr[index] = value;
      return {
        answerArr
      }
    })
    console.log(`answerArr: ${this.state.answerArr}`)
    console.log(`answerArr[0]: ${this.state.answerArr[0]}`)
    console.log(`type of answerArr[0]: ${typeof this.state.answerArr[0]}`)
  }

  randomScore = () => {
    this.setState(state => {
      const answerArr = []
      for (let i = 0; i < itemsArr.length; i++) {
        answerArr.push(Math.floor(Math.random() * 6) + 1)
      }
      return {
        answerArr,
      }
    },
      () => {
        this.submitScore()
        console.log(`answerArr: ${this.state.answerArr}`)
      }
    )
  }

  convertToPercentile = (value, scaleNum) => {
    for (var i = 0; i < normTable[(scaleNum - 1)].length; i++) {
      if (value === parseInt(Object.keys(normTable[(scaleNum - 1)][i]))) {
        return Object.values(normTable[(scaleNum - 1)][i])
      }
    }
  }

  submitScore = () => {

    console.log(`answerArr[0]: ${this.state.answerArr[0]}`)
    console.log(`type of answerArr[0]: ${typeof this.state.answerArr[0]}`)
    // sum individual item scores to create aggregate raw scores for each scale
    const criticalThinkingRawScore = this.state.answerArr[0] + this.state.answerArr[34] + this.state.answerArr[42] + this.state.answerArr[59] + this.state.answerArr[68] + this.state.answerArr[76]

    const motivationRawScore = this.state.answerArr[1] + this.state.answerArr[8] + this.state.answerArr[16] + this.state.answerArr[27] + this.state.answerArr[43] + this.state.answerArr[60] + this.state.answerArr[69] + this.state.answerArr[77]

    const learningRawScore = this.state.answerArr[2] + this.state.answerArr[9] + this.state.answerArr[21] + this.state.answerArr[28] + this.state.answerArr[35] + this.state.answerArr[44] + this.state.answerArr[51] + this.state.answerArr[61] + this.state.answerArr[78]

    const timeManagementRawScore = this.state.answerArr[10] + this.state.answerArr[22] + this.state.answerArr[29] + this.state.answerArr[45] + this.state.answerArr[52] + this.state.answerArr[62] + this.state.answerArr[70]

    const readingRawScore = this.state.answerArr[3] + this.state.answerArr[11] + this.state.answerArr[36] + this.state.answerArr[46] + this.state.answerArr[53] + this.state.answerArr[71] + this.state.answerArr[79]

    const noteTakingRawScore = this.state.answerArr[4] + this.state.answerArr[17] + this.state.answerArr[23] + this.state.answerArr[30] + this.state.answerArr[37] + this.state.answerArr[54] + this.state.answerArr[63]

    const memoryRawScore = this.state.answerArr[5] + this.state.answerArr[18] + this.state.answerArr[38] + this.state.answerArr[55] + this.state.answerArr[64] + this.state.answerArr[80]

    const testTakingRawScore = this.state.answerArr[12] + this.state.answerArr[24] + this.state.answerArr[39] + this.state.answerArr[47] + this.state.answerArr[65] + this.state.answerArr[72] + this.state.answerArr[81]

    const commRawScore = this.state.answerArr[6] + this.state.answerArr[19] + this.state.answerArr[25] + this.state.answerArr[48] + this.state.answerArr[66] + this.state.answerArr[73] + this.state.answerArr[82]

    const connectingRawScore = this.state.answerArr[13] + this.state.answerArr[31] + this.state.answerArr[40] + this.state.answerArr[49] + this.state.answerArr[56] + this.state.answerArr[74] + this.state.answerArr[83]

    const healthRawScore = this.state.answerArr[14] + this.state.answerArr[26] + this.state.answerArr[32] + this.state.answerArr[41] + this.state.answerArr[57] + this.state.answerArr[67] + this.state.answerArr[84]

    const planningRawScore = this.state.answerArr[7] + this.state.answerArr[15] + this.state.answerArr[20] + this.state.answerArr[33] + this.state.answerArr[50] + this.state.answerArr[58] + this.state.answerArr[75]

    const criticalThinkingScore = this.convertToPercentile(criticalThinkingRawScore, 1)
    const motivationScore = this.convertToPercentile(motivationRawScore, 2);
    const learningScore = this.convertToPercentile(learningRawScore, 3);
    const timeManagementScore = this.convertToPercentile(timeManagementRawScore, 4);
    const readingScore = this.convertToPercentile(readingRawScore, 5);
    const noteTakingScore = this.convertToPercentile(noteTakingRawScore, 6);
    const memoryScore = this.convertToPercentile(memoryRawScore, 7);
    const testTakingScore = this.convertToPercentile(testTakingRawScore, 8);
    const commScore = this.convertToPercentile(commRawScore, 9);
    const connectingScore = this.convertToPercentile(connectingRawScore, 10);
    const healthScore = this.convertToPercentile(healthRawScore, 11)
    const planningScore = this.convertToPercentile(planningRawScore, 12);

    // store the percentile scores for each scale into an array
    const percentileArr = [{ name: "criticalThinkingScore", value: criticalThinkingScore }, { name: "motivationScore", value: motivationScore }, { name: "learningScore", value: learningScore }, { name: "timeManagementScore", value: timeManagementScore }, { name: "readingScore", value: readingScore }, { name: "noteTakingScore", value: noteTakingScore }, { name: "memoryScore", value: memoryScore }, { name: "testTakingScore", value: testTakingScore }, { name: "commScore", value: commScore }, { name: "connectingScore", value: connectingScore }, { name: "healthScore", value: healthScore }, { name: "planningScore", value: planningScore }]

    console.log(percentileArr);
    // sort the array from smallest to largest
    // const sortedValues = this.sortValues(answerArr);
    const sortedPercentileValues = this.sortValues(percentileArr);

    // save the three smallest values
    const goalOne = sortedPercentileValues[0]
    const goalTwo = sortedPercentileValues[1]
    const goalThree = sortedPercentileValues[2]

    this.setState({
      takenAssessment: true,
      goalOne: goalOne,
      goalTwo: goalTwo,
      goalThree: goalThree,
      scoreArr: [criticalThinkingScore, motivationScore, learningScore, timeManagementScore, readingScore, noteTakingScore, memoryScore, testTakingScore, commScore, connectingScore, healthScore, planningScore],
      rawScoreArr: [criticalThinkingRawScore, motivationRawScore, learningRawScore, timeManagementRawScore, readingRawScore, noteTakingRawScore, memoryRawScore, testTakingRawScore, commRawScore, connectingRawScore, healthRawScore, planningRawScore]
    });
  }

  handleReset = () => {
    this.setState({
      takenAssessment: null,
      goalOne: null,
      goalTwo: null,
      goalThree: null,
      scoreArr: [],
      rawScoreArr: [],
      answerArr: []
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
    for (let i = 0; i < arr.length; i++) {
      newArr.push(arr[i])
    }
    return newArr
  }

  getScales = (sortedArr) => {
    console.log(sortedArr)
    let newArr = []
    for (let i = 0; i < sortedArr.length; i++) {
      newArr.push(sortedArr[i])
    }
    return newArr
  }

  renderSections = (seeAll, takenAssessment) => {
    if (!seeAll && takenAssessment) {
      return (
        <div>
          <Scorecard scoreArr={this.state.scoreArr} />
          <section>
            <Accordion>
              <h4 style={{ paddingLeft: "20px" }}>
                Your Personalized Goals
                </h4>
              <AccordionUnit score={this.state.goalOne} />
              <AccordionUnit score={this.state.goalTwo} />
              <AccordionUnit score={this.state.goalThree} />
            </Accordion>
          </section>
        </div>
      )
    } else if (!seeAll) {
      return (
        <div>
          <section>
            <Scorecard scoreArr={this.state.scoreArr} />
            <Accordion>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  Self-Assessment (Initial)
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <div>
                    <ModalAssessment updateScore={this.updateScore} submitScore={this.submitScore} randomScore={this.randomScore} />
                  </div>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </section>
        </div>
      );
    } else {
      return (
        <div>
          <Scorecard scoreArr={this.state.scoreArr} />
          <section>
            <Accordion>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  Self-Assessment (Initial)
                  </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <div>
                    <ModalAssessment updateScore={this.updateScore} submitScore={this.submitScore} randomScore={this.randomScore} />
                  </div>
                </Accordion.Collapse>
              </Card>
              {scales.map(item => (
                <AccordionUnit score={item} />
              ))}
            </Accordion>
          </section>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <Container>
          <Header onClickReset={this.handleReset} onClickSeeAll={this.handleSeeAll} />
          {this.renderSections(this.state.seeAll, this.state.takenAssessment)}
        </Container>
      </div>
    )
  }
}

export default App;
