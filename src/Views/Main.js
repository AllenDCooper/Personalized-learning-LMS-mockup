import React, { Component } from 'react';

// importing react-boostrap styles
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Accordion, Card, Spinner, Button, Col, Row } from 'react-bootstrap';

// importing components
import ModalAssessment from '../Components/ModalAssessment/ModalAssessment';
import AccordionUnit from '../Components/AccordionUnit/AccordionUnit';
import Scorecard from '../Components/Scorecard/Scorecard';
import Header from '../Components/Header/Header';

// importing ACES Assessment
import normTable from '../ACES_Assessment/normTable.js';
import itemsArr from '../ACES_Assessment/itemsArr';
import scales from '../ACES_Assessment/scales';

class Main extends Component {

  state = {
    takenAssessment: false,

    // scoreArr stores percentile scores for each scale
    scoreArr: [],

    // goalsArr stores all user data for each scale, including raw score and percentile score
    goalsArr: [],

    // answerArr stores raw scores for each item in the self-assessment
    answerArr: [],

    // strengthsArr stores percentile scores sorted by strengths, developing strengths, and growth areas
    strengthsArr: [],

    // goalsToCompleteArr stores percentile scores for each scale for which user has NOT yet completed a content unit
    // arranged in descending order, i.e. with lowest scores at the end
    goalsToCompleteArr: [],

    // completedGoalsArr stores percentile scores for each scale for which user has ALREADY completed a content unit for
    completedGoalsArr: [],

    // goalsToDisplayArr stores a certain number of items (determined by goalsToDisplay) from goalsToCompleteArr 
    goalsToDisplayArr: [],

    // goalsToDisplay determines numbers of goals to display at a time
    numGoalsToDisplay: 3,

    // spinnerOn is a boolean that triggers render of spinner
    spinnerOn: false,
    adaptiveLearningOn: false,
    showUnassigned: false,
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
        console.log(Object.values(normScore))
        return Object.values(normScore)
      }
    }
  }

  getGoalsArrOnSubmit = () => {
    let goalsArr = []
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
      // convert scale sum to percentile score
      const percentileScore = parseInt(this.convertToPercentile(scaleSum, scaleIndex))

      // create score object that holds scale name and scale sum
      const scoreObj = { name: scaleName, rawScoreInitial: scaleSum, percentileScoreCurrent: percentileScore, isComplete: false }
      // push it into the rawScoreArr
      goalsArr.push(scoreObj)
      console.log(goalsArr)
    })
    return goalsArr
  }

  getGoalsArrOnResubmit = (goalObj) => {
    const scaleObj = scales.filter(scale => scale.name === goalObj.name)
    const scaleIndex = scales.findIndex(scale => scale.name === goalObj.name)
    console.log(goalObj);

    console.log(scaleObj)
    console.log(scaleObj[0])
    console.log(scaleObj[0].itemIndexes)
    console.log(scaleIndex)

    let scaleSum = 0
    scaleObj[0].itemIndexes.forEach(index => {
      const score = this.state.answerArr[index]
      // add that score to the scaleSum
      scaleSum += score
      console.log(scaleSum)
    })

    const percentileScore = parseInt(this.convertToPercentile(scaleSum, scaleIndex))
    console.log(percentileScore)
    const prevScore = goalObj.percentileScoreCurrent
    console.log(prevScore)

    // update goalObj object
    goalObj.percentileScoreCurrent = percentileScore;
    goalObj.percentileScoreInitial = prevScore
    goalObj.rawScoreProgress = scaleSum
    goalObj.isComplete = true
    console.log(goalObj)
    // push it into the rawScoreArr
    const goalsArr = [...this.state.goalsArr]
    goalsArr[scaleIndex] = goalObj
    console.log(goalsArr)
    return goalsArr
  }

  // function aggregates individual answers stored in answerArr into scales
  // passed as props into ModalAssessment component where it is called when assessment is submitted
  submitScore = (goal) => {

    let goalsArr = []

    if (goal) {
      goalsArr = this.getGoalsArrOnResubmit(goal)
    } else {
      goalsArr = this.getGoalsArrOnSubmit();
    }

    // sort percentile array into 3 arrays: strengths, developing strengths, and growth areas
    const strengthsArr = this.sortStrengths([...goalsArr])
    console.log(strengthsArr)

    // save into state
    this.setState(state => {
      const goalsToCompleteArr = goalsArr.filter(goal => goal.isComplete === false)
      console.log(goalsToCompleteArr);

      const completedGoalsArr = goalsArr.filter(goal => goal.isComplete === true)
      console.log(completedGoalsArr);

      let numGoalsToDisplay = state.numGoalsToDisplay
      // if user has selected maximum number of goals to display, reduce by 1
      if (parseInt(state.numGoalsToDisplay) === state.goalsToCompleteArr.length) {
        numGoalsToDisplay--
      }
      console.log(numGoalsToDisplay)

      return {
        numGoalsToDisplay,
        takenAssessment: true,
        goalsArr,
        strengthsArr: strengthsArr,
        goalsToCompleteArr,
        completedGoalsArr,
      }
    }
      ,
      () => {
        console.log(`submitScore function successfully run`)
        this.saveCompletedGoal(scales)
      }
    );
  }

  saveCompletedGoal = (score) => {
    console.log(`saveCompletedGoal run`)
    console.log(score);
    this.setState({ spinnerOn: true })
    setTimeout(
      () => {
        this.setState(state => {

          let goalsToDisplayArr = this.getGoalDisplayArr(this.sortValuesDescending([...state.goalsToCompleteArr]), state.numGoalsToDisplay)

          return {
            goalsToDisplayArr,
            spinnerOn: false
          }
        }
        )
      }, 3000)
  }

  // function to reset all user data
  // will be passed into Header component as props and called on click of Reset button
  handleReset = () => {
    this.setState({
      takenAssessment: false,
      scoreArr: [],
      goalsArr: [],
      answerArr: [],
      strengthsArr: [],
      goalsToCompleteArr: [],
      completedGoalsArr: [],
      goalsToDisplayArr: [],
      numGoalsToDisplay: 3,
      spinnerOn: false,
      adaptiveLearningOn: false,
      showUnassigned: false,
    })
  }


  // function to loop through array of goals and render ones that are completed
  getCompletedGoals = (goalsArr, needsSort) => {
    const completedGoalArr = goalsArr.filter(goal => goal.isComplete = true)
    // needsSort ? completedGoalArr
    return completedGoalArr
  }

  getUncompletedGoals = (goalsArr, needsSort) => {
    const uncompletedGoalArr = goalsArr.filter(goal => goal.isComplete = false)
    return uncompletedGoalArr
  }

  // function that will toggle between show all and hide all content units
  // will be passed into Header as props and called on click of Toggle See All button
  handleShowUnassigned = () => {
    this.setState({
      showUnassigned: !this.state.showUnassigned
    })
  }

  handleAdaptiveLearningChange = () => {
    this.setState({
      adaptiveLearningOn: !this.state.adaptiveLearningOn,
    }, () => { console.log(this.state.adaptiveLearningOn) })
  }

  // sort function that takes an array and will return new array with items in order from largest to smallest
  sortValuesDescending = (arr) => {
    console.log(arr);
    arr.sort(function (a, b) {
      return b.percentileScoreCurrent - a.percentileScoreCurrent
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
      console.log(`element.percentileScoreCurrent: ${element.percentileScoreCurrent}`);
      if (element.percentileScoreCurrent > 75) {
        const arrCopy1 = strengthsArr[0].Strengths
        let arr1 = []
        arrCopy1 === undefined ? arr1 = [] : arr1 = [...arrCopy1]
        arr1.push(element)
        strengthsArr[0].Strengths = arr1
      } else if (element.percentileScoreCurrent <= 75 && element.percentileScoreCurrent > 25) {
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
      numGoalsToDisplay: event.target.value
    },
      () => {
        if (this.state.goalsToCompleteArr.length > 0) {
          // this.getGoalDisplayArr(this.state.goalsToCompleteArr)
          this.setState(state => {
            let goalsToDisplayArr = this.getGoalDisplayArr(this.sortValuesDescending([...state.goalsToCompleteArr]), state.numGoalsToDisplay)
            return {
              goalsToDisplayArr
            }
          },
            () => console.log(this.state.goalsToDisplayArr)
          )
        }
      }
    )
  }

  getGoalDisplayArr = (goalArr, numGoalsToDisplay) => {
    console.log(goalArr);
    console.log(numGoalsToDisplay)
    const arrCopy = [...goalArr];
    let limit = (arrCopy.length - numGoalsToDisplay) - 1
    console.log(`limit: ${limit}`)
    let newArr = [];
    for (let i = (arrCopy.length - 1); i > limit; i--) {
      console.log(arrCopy[i]);
      // check to ensure value is not null before pushing into array
      if (arrCopy[i]) {
        newArr.push(arrCopy[i])
      }
    }
    console.log(`newArr: ${JSON.stringify(newArr)}`)
    return newArr
  }

  getUnassignedGoalDisplayArr = (goalArr, numGoalsToDisplay) => {
    console.log(goalArr);
    console.log(numGoalsToDisplay);
    const arrCopy = [...goalArr];
    let limit = (arrCopy.length - numGoalsToDisplay) - 1
    console.log(`limit: ${limit}`)
    let newArr = [];
    for (let i = limit; i >= 0; i--) {
      console.log(arrCopy[i]);
      // check to ensure value is not null before pushing into array
      if (arrCopy[i]) {
        newArr.push(arrCopy[i])
      }
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

  handleButtonGoals = () => {
    this.props.setClickedLink('my-goals')
  }

  // helper function that will conditionally return components, and will be called in the render
  renderAssignedGoals = (adaptiveLearningOn, takenAssessment) => {
    // displays three goal content units after assessment is taken
    console.log(adaptiveLearningOn);
    console.log(takenAssessment)
    if (adaptiveLearningOn && takenAssessment) {
      return (
        <div>
          {/* <Scorecard spinnerOn={this.state.spinnerOn} strengthsArr={this.state.strengthsArr} goalsArr={this.state.goalsArr} /> */}
          <section>
            <Accordion>
              {/* <h4 style={{ paddingLeft: "20px" }}>
                My Goals
              </h4> */}
              {!this.state.spinnerOn ?
                this.state.goalsToDisplayArr.map(item => (
                  <AccordionUnit setClickedLink={this.props.setClickedLink} takenAssessment={this.state.takenAssessment} score={item} saveCompletedGoal={this.saveCompletedGoal} updateScore={this.updateScore} submitScore={this.submitScore} />
                ))
                :
                <div>
                  <Spinner animation="grow" role="status" variant="primary" style={{ marginLeft: "20px" }}>
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                  <span style={{ marginLeft: "10px" }}>Generating your goals...</span>
                </div>
              }
            </Accordion>
          </section>
        </div>
      )
    }
    else if (takenAssessment) {
      return (
        <div>
          <section>
            <Accordion>
              <>
                {this.state.spinnerOn
                  ?
                  <div>
                    <Spinner animation="grow" role="status" variant="primary" style={{ marginLeft: "20px" }}>
                      <span className="sr-only">Loading...</span>
                    </Spinner>
                    <span style={{ marginLeft: "10px" }}>Updating your goals...</span>
                  </div>
                  :
                  this.state.goalsToCompleteArr.map(item => (
                    <AccordionUnit setClickedLink={this.props.setClickedLink} takenAssessment={this.state.takenAssessment} score={item} saveCompletedGoal={this.saveCompletedGoal} updateScore={this.updateScore} submitScore={this.submitScore} />
                  ))}
              </>
            </Accordion>
          </section>
        </div>
      )
    } else {
      return (
        <div>
          <section>
            You have no current goals.
        </section>
        </div>
      )
    }
  }

  renderCompletedGoals = () => {
    return (
      this.state.completedGoalsArr.length > 0 ?
        <>
          {!this.state.spinnerOn ?
            <Accordion>
              {this.state.completedGoalsArr.map(item => (
                <AccordionUnit takenAssessment={this.state.takenAssessment} score={item} saveCompletedGoal={this.saveCompletedGoal} />
              ))}
            </Accordion>
            :
            <div>
              <Spinner animation="grow" role="status" variant="primary" style={{ marginLeft: "20px" }}>
                <span className="sr-only">Loading...</span>
              </Spinner>
              <span style={{ marginLeft: "10px" }}>Updating your goals...</span>
            </div>
          }
        </>
        :
        <p>You have not completed any goals.</p>
    )
  }

  // calls renderAssignedGoals helper function to display appropriate components
  render() {
    return (
      <div>
        <div style={this.props.clickedLink === "ACES" ? { display: 'initial', backgroundColor: '#f3f3f3', minHeight: '740px' } : { display: 'none', backgroundColor: '#f3f3f3', minHeight: '740px' }}>
          <Container>
            <div className='tab-title-container'>
              <h4 className='tab-title'>
                My Strengths Report
              </h4>
              {!this.state.takenAssessment && !this.state.spinnerOn ?
                <div className='tab-description'>
                  <p>Start by taking the ACES self-assessment to obtain your Strengths Report. </p>
                </div>
                :
                null
              }
              {this.state.takenAssessment && !this.state.spinnerOn ?
                window.innerWidth <= 740 ?
                  <div className='reset-button-mobile'>
                    <Button variant="outline-dark" onClick={this.handleReset}>Reset</Button>
                    <Button style={{ marginLeft: '10px' }} onClick={this.handleButtonGoals}>Go to Goals</Button>
                  </div>
                  :
                  <div className='reset-button'>
                    <Button variant="outline-dark" onClick={this.handleReset}>Reset</Button>
                    <Button style={{ marginLeft: '10px' }} onClick={this.handleButtonGoals}>Go to Goals</Button>
                  </div>
                :
                null
              }
            </div>
            <br></br>
            <div>
              <Scorecard spinnerOn={this.state.spinnerOn} strengthsArr={this.state.strengthsArr} goalsArr={this.state.goalsArr} />
              <section>
                <Accordion>
                  {this.state.takenAssessment ? null :
                    <Card style={{ marginBottom: "30px" }}>
                      <Accordion.Toggle as={Card.Header} style={{ marginBottom: "0px" }} eventKey="0">
                        Self-Assessment (Initial)
                  </Accordion.Toggle>
                      <Accordion.Collapse eventKey="0">
                        <div>
                          <ModalAssessment updateScore={this.updateScore} submitScore={this.submitScore} randomScore={this.randomScore} />
                        </div>
                      </Accordion.Collapse>
                    </Card>
                  }
                </Accordion>
              </section>
            </div>
          </Container>
        </div>

        <div style={this.props.clickedLink === "My Goals" ? { display: 'initial', backgroundColor: '#f3f3f3', minHeight: '740px' } : { display: 'none', backgroundColor: '#f3f3f3', minHeight: '740px' }}>
          <Container>
            <Row className='tab-title-container'>
              <Col>
                <h4 className='tab-title'>
                  My Goals
              </h4>
              </Col>
              {this.state.takenAssessment ?
                <Col>
                  <Header handleChange={this.handleChange} numUnits={this.numUnitsToDisplay(this.state.goalsToCompleteArr)} numGoalsToDisplay={this.state.numGoalsToDisplay} handleAdaptiveLearningChange={this.handleAdaptiveLearningChange} adaptiveLearningOn={this.state.adaptiveLearningOn} />
                </Col>
                :
                null
              }
            </Row>
            {this.renderAssignedGoals(this.state.adaptiveLearningOn, this.state.takenAssessment)}
          </Container>
        </div>

        <div style={this.props.clickedLink === "Completed Goals" ? { display: 'initial', backgroundColor: '#f3f3f3', minHeight: '740px' } : { display: 'none', backgroundColor: '#f3f3f3', minHeight: '740px' }}>
          <Container>
            <Row className='tab-title-container'>
              <Col>
                <h4 className='tab-title'>
                  Completed Goals
              </h4>
              </Col>
            </Row>
            {this.renderCompletedGoals()}
          </Container>
        </div>

      </div >
    )
  }
}

export default Main;
