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
        const randomAnswer = Math.floor(Math.random() * 6) + 1
        console.log(randomAnswer)
        answerArr.push(randomAnswer)
        console.log(answerArr)
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

    let rawScoreArr = []

    scales.forEach(element => {
      const scaleName = element.name
      let rawScoreSum = 0
      element.itemIndexes.forEach(index => {
        const score = this.state.answerArr[index]
        rawScoreSum += score
        console.log(rawScoreSum)
      })
      const scoreObj = {name: scaleName, score: rawScoreSum}
      rawScoreArr.push(scoreObj)
    })
    console.log(rawScoreArr);;

    const criticalThinkingScore = this.convertToPercentile((rawScoreArr[0].score), 1)
    const motivationScore = this.convertToPercentile((rawScoreArr[1].score), 2);
    const learningScore = this.convertToPercentile((rawScoreArr[2].score), 3);
    const timeManagementScore = this.convertToPercentile((rawScoreArr[3].score), 4);
    const readingScore = this.convertToPercentile((rawScoreArr[4].score), 5);
    const noteTakingScore = this.convertToPercentile((rawScoreArr[5].score), 6);
    const memoryScore = this.convertToPercentile((rawScoreArr[6].score), 7);
    const testTakingScore = this.convertToPercentile((rawScoreArr[7].score), 8);
    const commScore = this.convertToPercentile((rawScoreArr[8].score), 9);
    const connectingScore = this.convertToPercentile((rawScoreArr[9].score), 10);
    const healthScore = this.convertToPercentile((rawScoreArr[10].score), 11)
    const planningScore = this.convertToPercentile((rawScoreArr[11].score), 12);

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
