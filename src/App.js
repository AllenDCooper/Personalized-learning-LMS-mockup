import React, { Component } from 'react';
import './App.css';

// importing react-boostrap styles
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Accordion, Card } from 'react-bootstrap';

// importing components
import ModalAssessment from './Components/ModalAssessment/ModalAssessment';
import AccordionUnit from './Components/AccordionUnit/AccordionUnit';
import Scorecard from './Components/Scorecard/Scorecard';
import Header from './Components/Header/Header';

// importing ACES Assessment
import normTable from './ACES_Assessment/normTable.js';
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
    scoreArr: [],
    rawScoreArr: [],
    answerArr: [],
    strengthsArr: [],
    goalOne: null,
    goalTwo: null,
    goalThree: null,
  }

  // this function will update the answerArr in state each time the user clicks on a radio button to answer an assessment question
  // it will be passed into ModelAssessment (child) and then into FormCheck (grandchild) as props
  updateScore = (event, index) => {
    const value = parseInt(event.target.value);
    this.setState(state => {
      const answerArr = state.answerArr;
      answerArr[index] = value;
      return {
        answerArr
      }
    })
  }

  // this function will fill out the answerArr in state with random answers for each assessment question
  // it will be passed into ModelAssessment (child) as props and be called when Random Score button is clicked
  randomScore = () => {
    this.setState(state => {
      const answerArr = []
      // a for loop ensures one random answer will be generated for each question item
      for (let i = 0; i < itemsArr.length; i++) {
        // randomly generate a score between 1 and 6 for each item
        const randomAnswer = Math.floor(Math.random() * 6) + 1
        answerArr.push(randomAnswer)
        console.log(answerArr)
      }
      return {
        answerArr,
      }
    },
    // callback function used to submit score async (after state is updated)
      () => {
        this.submitScore()
        console.log(`answerArr: ${this.state.answerArr}`)
      }
    )
  }

  // function runs raw score through norm table and returns corresponding percentile rank
  convertToPercentile = (value, scaleIndex) => {
    for (var i = 0; i < normTable[scaleIndex].length; i++) {
      if (value === parseInt(Object.keys(normTable[scaleIndex][i]))) {
        return Object.values(normTable[scaleIndex][i])
      }
    }
  }

  // function aggregates individual answers stored in answerArr into scales
  submitScore = () => {
    // instantiate two arrays that will hold scale objects, one for raw scores and one for percentiles
    let rawScoreArr = []
    let percentileArr = []
    // loop through scales array to retrieve array of index locations in the rawScoreArr for the items of that particular scale 
    scales.forEach((scale, scaleIndex) => {
      const scaleName = scale.name
      // instantiate scaleSum variable which will increase as item scores are added up for that scale
      let scaleSum = 0
      // loop through itemIndexes array stored in each scale object 
      scale.itemIndexes.forEach(index => {
        // create score variable to get the particular score for the given index
        const score = this.state.answerArr[index]
        // add that score to the scaleSum
        scaleSum += score
        console.log(scaleSum)
      })
      // create score object that holds scale name and scale sum
      const scoreObj = { name: scaleName, score: scaleSum }
      // push it into the rawScoreArr
      rawScoreArr.push(scoreObj)
      // convert scale sum to percentile score
      const percentileScore = parseInt(this.convertToPercentile(scaleSum, scaleIndex))
      // create percentile object that holds scale name and percentile rank, and then push it into percentile array
      const percentileObj = { name: scaleName, score: percentileScore }
      percentileArr.push(percentileObj)
    })
    console.log(rawScoreArr);
    console.log(percentileArr);

    // sort the array from smallest to largest
    const arrCopy = [...percentileArr]
    const sortedPercentileValues = this.sortValues(arrCopy);

    // save the three smallest values
    const goalOne = sortedPercentileValues[0]
    const goalTwo = sortedPercentileValues[1]
    const goalThree = sortedPercentileValues[2]

    // sort percentile array into 3 arrays: strengths, developing strengths, and growth areas
    const strengthsArr = this.sortStrengths(percentileArr)

    // save into state
    this.setState({
      takenAssessment: true,
      goalOne: goalOne,
      goalTwo: goalTwo,
      goalThree: goalThree,
      scoreArr: percentileArr,
      strengthsArr: strengthsArr,
    });
  }

  // function to reset all user data
  // will be passed into Header component as props and called on click of Reset button
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

  // function that will toggle between show all and hide all content units
  // will be passed into Header as props and called on click of Toggle See All button
  handleSeeAll = () => {
    this.setState({
      seeAll: this.state.seeAll === false ? true : false
    })
  }

  // sort function that takes an array and will return new array with items in order from smallest to largest
  sortValues = (arr) => {
    console.log(arr);
    arr.sort(function (a, b) {
      return a.score - b.score
    })
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
      newArr.push(arr[i])
    }
    console.log(newArr)
    return newArr
  }

  reverseSortValues = (arr) => {
    console.log(arr);
    arr.sort(function (a, b) {
      return b.score - a.score
    })
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
      newArr.push(arr[i])
    }
    console.log(newArr)
    return newArr
  } 

  sortStrengths = (arr) => {
    const descendingArr = this.reverseSortValues(arr);
    console.log(`descendingArr: ${descendingArr}`);
    const strengthsArr = [{"Strengths": []}, {"Developing Strengths": []}, {"Growth Areas": []}]
    descendingArr.forEach((element, index) => {
      console.log(`element.score: ${element.score}`);
      if (element.score > 75) {
        const arrCopy1 = strengthsArr[0].Strengths
        console.log(arrCopy1)
        let arr1 = []
        arrCopy1 === undefined ? arr1 = [] : arr1 = [...arrCopy1]
        arr1.push(element)
        console.log(arr1)
        strengthsArr[0].Strengths = arr1
        console.log(strengthsArr)
      } else if (element.score <= 75 && element.score > 25) {
        const arrCopy2 = strengthsArr[1].Strengths
        console.log(arrCopy2)
        let arr2 = []
        arrCopy2 === undefined ? arr2 = [] : arr2 = [...arrCopy2]
        arr2.push(element)
        console.log(arr2)
        strengthsArr[1].Strengths = arr2
        console.log(strengthsArr)
      } else {
        const arrCopy3 = strengthsArr[2].Strengths
        console.log(arrCopy3)
        let arr3 = []
        arrCopy3 === undefined ? arr3 = [] : arr3 = [...arrCopy3]
        arr3.push(element)
        console.log(arr3)
        strengthsArr[2].Strengths = arr3
        console.log(strengthsArr)
      }
    })
    console.log(`strengthsArr: ${strengthsArr}`)
    return strengthsArr
  }

  // helper function that will conditionally return components, and will be called in the render
  renderSections = (seeAll, takenAssessment) => {
    // displays three goal content units after assessment is taken
    if (!seeAll && takenAssessment) {
      return (
        <div>
          <Scorecard strengthsArr={this.state.strengthsArr} scoreArr={this.state.scoreArr} />
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
    } 
    // displays initial assessment to get started
    else if (!seeAll) {
      return (
        <div>
          <section>
            <Scorecard strengthsArr={this.state.strengthsArr} scoreArr={this.state.scoreArr} />
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
    } 
    // displays all content modules when seeAll is true
    else {
      return (
        <div>
          <Scorecard strengthsArr={this.state.strengthsArr} scoreArr={this.state.scoreArr} />
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

  // calls renderSections helper function to display appropriate components
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
