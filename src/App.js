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
    // scoreArr stores percentile scores for each scale
    scoreArr: [],
    // rawScoreArr stores raw scores for each scale
    rawScoreArr: [],
    // answerArr stores raw scores for each item in the self-assessment
    answerArr: [],
    // strengthsArr stores percentile scores sorted by strengths, developing strengths, and growth areas
    strengthsArr: [],
    percentileGoalsArr: [],
    // goalsToCompleteArr stores percentile scores for each scale for which user has NOT yet completed a content unit
    // arranged in descending order, i.e. with lowest scores at the end
    goalsToCompleteArr: [],
    // completedGoalsArr stores percentile scores for each scale for which user has ALREADY completed a content unit for
    completedGoalsArr: [],
    goalsToDisplay: 3,
  }

  // this function will update the answerArr in state each time the user clicks on a radio button to answer an assessment question
  // it will be passed into ModelAssessment (child) and then into FormCheck (grandchild) as props
  updateScore = (event, index) => {
    console.log(event.target.value)
    console.log(index)
    const value = parseInt(event.target.value);
    this.setState(state => {
      const answerArr = state.answerArr;
      answerArr[index] = value;
      return {
        answerArr
      }
    },
      () => { console.log(this.state.answerArr) }
    )
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
        // console.log(answerArr)
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
    // scaleIndex determines which of the scales in the norm table should be used
    // loops through each score for that particular scale in the norm table
    for (var i = 0; i < normTable[scaleIndex].length; i++) {
      const normScore = normTable[scaleIndex][i]
      // finds normScore that is equal to passed in value, and returns it
      if (value === parseInt(Object.keys(normScore))) {
        return Object.values(normScore)
      }
    }
  }

  // function aggregates individual answers stored in answerArr into scales
  // passed as props into ModalAssessment component where it is called when assessment is submitted
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
      const scoreObj = { name: scaleName, value: scaleSum }
      // push it into the rawScoreArr
      rawScoreArr.push(scoreObj)
      // convert scale sum to percentile score
      const percentileScore = parseInt(this.convertToPercentile(scaleSum, scaleIndex))
      // create percentile object that holds scale name and percentile rank, and then push it into percentile array
      const percentileObj = { name: scaleName, value: percentileScore }
      percentileArr.push(percentileObj)
    })
    console.log(rawScoreArr);
    console.log(percentileArr);

    // sort percentile array into 3 arrays: strengths, developing strengths, and growth areas
    const strengthsArr = this.sortStrengths(percentileArr)

    // save into state
    this.setState(state => {
      
      let goalsToCompleteArr = []
      if (state.goalsToCompleteArr.length > 0) {
        goalsToCompleteArr = [...state.goalsToCompleteArr]
      } else {
        goalsToCompleteArr = [...percentileArr]
      }
      console.log(goalsToCompleteArr)

      return {
      takenAssessment: true,
      scoreArr: percentileArr,
      strengthsArr: strengthsArr,
      goalsToCompleteArr
    }
  }, ()=> {this.getGoalDisplayArr(this.state.goalsToCompleteArr)});
  }

  saveCompletedGoal = (score) => {
    console.log(`saveCompletedGoal run`)
    console.log(score);
    setTimeout(
      () => {
        this.setState(prevState => {
          let completedGoalsArr = [...prevState.completedGoalsArr];

          completedGoalsArr.push(score);
          console.log(completedGoalsArr);

          console.log(this.state.goalsToCompleteArr)

          let goalsToCompleteArr = this.state.goalsToCompleteArr.filter(item => (item.name !== score.name))
          console.log(goalsToCompleteArr)

          return {
            completedGoalsArr,
            goalsToCompleteArr,
          }
        },
          () => {console.log(`saveCompletedGoal run for ${score.name}`)
          console.log(this.state.goalsToCompleteArr)}
        )
      }, 1000)
  }

  // function to reset all user data
  // will be passed into Header component as props and called on click of Reset button
  handleReset = () => {
    this.setState({
      takenAssessment: false,
      seeAll: false,
      scoreArr: [],
      rawScoreArr: [],
      answerArr: [],
      strengthsArr: [],
      goalsToCompleteArr: [],
    })
  }

  // function that will toggle between show all and hide all content units
  // will be passed into Header as props and called on click of Toggle See All button
  handleSeeAll = () => {
    this.setState({
      seeAll: !this.state.seeAll
    })
  }

  // sort function that takes an array and will return new array with items in order from largest to smallest
  sortValuesDescending = (arr) => {
    console.log(arr);
    arr.sort(function (a, b) {
      return b.value - a.value
    })
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
      newArr.push(arr[i])
    }
    console.log(newArr)
    return newArr
  }

  // function that sorts percentile array into 3 tiers: strengths, developing strengths, and growth areas.
  sortStrengths = (arr) => {
    // sort the percentile array into descending order so that top strengths will appear first
    const descendingArr = this.sortValuesDescending(arr);
    console.log(`descendingArr: ${descendingArr}`);

    // instantiate an array to hold the 3 tiers of skill
    const strengthsArr = [{ "Strengths": [] }, { "Developing_Strengths": [] }, { "Growth_Areas": [] }]

    // map descending array, sorting out into 3 tiers and pushing into appropriate object in strengthsArr
    descendingArr.forEach((element, index) => {
      console.log(`element.value: ${element.value}`);
      if (element.value > 75) {
        const arrCopy1 = strengthsArr[0].Strengths
        let arr1 = []
        arrCopy1 === undefined ? arr1 = [] : arr1 = [...arrCopy1]
        arr1.push(element)
        strengthsArr[0].Strengths = arr1
      } else if (element.value <= 75 && element.value > 25) {
        const arrCopy2 = strengthsArr[1].Developing_Strengths
        let arr2 = []
        arrCopy2 === undefined ? arr2 = [] : arr2 = [...arrCopy2]
        arr2.push(element)
        strengthsArr[1].Developing_Strengths = arr2
      } else {
        const arrCopy3 = strengthsArr[2].Growth_Areas
        let arr3 = []
        arrCopy3 === undefined ? arr3 = [] : arr3 = [...arrCopy3]
        arr3.push(element)
        strengthsArr[2].Growth_Areas = arr3
      }
    })
    console.log(`strengthsArr: ${JSON.stringify(strengthsArr)}`)
    return strengthsArr
  }

  handleChange = (event) => {
    this.setState({
      goalsToDisplay: event.target.value
    })
  }

  getGoalDisplayArr = (goalArr) => {
    console.log(`goalArr: ${goalArr}`)
    const arrCopy = [...goalArr];
    console.log(`arrCopy = ${arrCopy}`)
    const limit = (arrCopy.length - this.state.goalsToDisplay) - 1
    console.log(`limit: ${limit}`)
    let newArr = [];
    for (let i = (arrCopy.length - 1); i > limit; i--) {
      console.log(arrCopy[i]);
      newArr.push(arrCopy[i])
      console.log(`i: ${i} / newArr: ${newArr}`)
    }
    console.log(`newArr: ${JSON.stringify(newArr)}`)
    return newArr
  }

  numUnitsToDisplay = (goalsArr) => {
    console.log(goalsArr.length)
    if (goalsArr.length > 0) {
      return goalsArr
    }
    return scales
  }

  // helper function that will conditionally return components, and will be called in the render
  renderSections = (seeAll, takenAssessment) => {
    // displays three goal content units after assessment is taken
    if (!seeAll && takenAssessment) {
      return (
        <div>
          <Scorecard strengthsArr={this.state.strengthsArr} scoreArr={this.state.scoreArr} />
          <section>
            {this.state.completedGoalsArr.length > 0 ?
              <div style={{ marginBottom: "30px" }}>
                <h4 style={{ paddingLeft: "20px" }}>
                  Your Completed Goals
              </h4>
                <Accordion>
                  {this.state.completedGoalsArr.map(item => (
                    <AccordionUnit score={item} saveCompletedGoal={this.saveCompletedGoal} />
                  ))}
                </Accordion>
              </div>
              :
              null
            }
            <Accordion>
              <h4 style={{ paddingLeft: "20px" }}>
                Your Personalized Goals
              </h4>
              {this.getGoalDisplayArr(this.state.goalsToCompleteArr).map(item => (
                <AccordionUnit score={item} saveCompletedGoal={this.saveCompletedGoal} updateScore={this.updateScore} submitScore={this.submitScore} />
              ))}
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
              {this.state.goalsToCompleteArr.length > 0 ?
                (this.state.goalsToCompleteArr.map(item => (
                  <AccordionUnit score={item} saveCompletedGoal={this.saveCompletedGoal} updateScore={this.updateScore} submitScore={this.submitScore} />
                ))) : (scales.map(item => (
                  <AccordionUnit score={item} updateScore={this.updateScore} submitScore={this.submitScore} />
                )))
              }
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
          <Header onClickReset={this.handleReset} onClickSeeAll={this.handleSeeAll} handleChange={this.handleChange} numUnits={this.numUnitsToDisplay(this.state.goalsToCompleteArr)} />
          {this.renderSections(this.state.seeAll, this.state.takenAssessment)}
        </Container>
      </div>
    )
  }
}

export default App;
