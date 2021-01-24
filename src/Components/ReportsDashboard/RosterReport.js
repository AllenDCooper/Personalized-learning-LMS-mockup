import React, { useState } from 'react';
import { Card, Accordion, ProgressBar, Row, Col, Button, Dropdown } from 'react-bootstrap';
import './ClassReport.css';
import scales from '../../ACES_Assessment/scales.js';
import RosterAccordionScale from '../AccordionScale/RosterAccordionScale';

function RosterReport(props) {
  console.log(props)

  const styles = {
    scaleTitle: {
      textAlign: 'right'
    },
    scaleTitleMobile: {
      textAlign: 'left'
    },
    dropdownButton: {
      boxShadow: 'none',
      outline: 'none'
    }
  }

  const [scaleShowName, setScaleShowName] = useState(scales[0].name)

  const handleSelect = (event) => {
    setScaleShowName(event.target.name)
    console.log(scaleShowName);
  }

  // sort function that takes an array and will return new array with items in order from largest to smallest
  const sortValuesDescending = (userArr, scaleIndex, scoreType) => {
    userArr.sort(function (a, b) {
      return b.scores[scaleIndex][scoreType] - a.scores[scaleIndex][scoreType]
    })
    let newArr = []
    for (let i = 0; i < userArr.length; i++) {
      newArr.push(userArr[i])
    }
    // console.log(newArr)
    return newArr
  }

  const sortStrengths = (arr, scaleIndex, scoreType, scoreTypeAlt) => {

    const scoreTypeConfirmed = scoreType === 'percentileScoreChange' ?
      'percentileScoreCurrent' :
      scoreTypeAlt ?
        scoreTypeAlt :
        scoreType
    console.log(scoreTypeConfirmed);
    // sort the percentile array into descending order so that top strengths will appear first
    const descendingArr = sortValuesDescending(arr, scaleIndex, scoreTypeConfirmed);
    // console.log(`descendingArr: ${descendingArr}`);

    // instantiate an array to hold the 3 tiers of skill
    const strengthsArr = [{ "Strengths": [] }, { "Developing_Strengths": [] }, { "Growth_Areas": [] }]

    // map descending array, sorting out into 3 tiers and pushing into appropriate object in strengthsArr
    descendingArr.forEach((userScore, index) => {
      if (userScore.classID === 1) {
        if (userScore.scores[scaleIndex][scoreTypeConfirmed] > 75) {
          const arrCopy1 = strengthsArr[0].Strengths
          let arr1 = []
          arrCopy1 === undefined ? arr1 = [] : arr1 = [...arrCopy1]
          arr1.push(userScore)
          strengthsArr[0].Strengths = arr1
        } else if (userScore.scores[scaleIndex][scoreTypeConfirmed] <= 75 && userScore.scores[scaleIndex][scoreTypeConfirmed] > 25) {
          const arrCopy2 = strengthsArr[1].Developing_Strengths
          let arr2 = []
          arrCopy2 === undefined ? arr2 = [] : arr2 = [...arrCopy2]
          arr2.push(userScore)
          strengthsArr[1].Developing_Strengths = arr2
        } else {
          const arrCopy3 = strengthsArr[2].Growth_Areas
          let arr3 = []
          arrCopy3 === undefined ? arr3 = [] : arr3 = [...arrCopy3]
          arr3.push(userScore)
          strengthsArr[2].Growth_Areas = arr3
        }
      }
    })
    // console.log(`strengthsArr: ${JSON.stringify(strengthsArr)}`)
    return strengthsArr
  }

  const sortStrengthsByScale = () => {
    let sortedStrengthsByScaleArr = []
    scales.forEach((scale, scaleIndex) => {
      sortedStrengthsByScaleArr.push(sortStrengths(props.userModelSeed, scaleIndex, props.scoreType, props.scoreTypeAlt))
    })
    return sortedStrengthsByScaleArr
  }

  const strengthsArrByScale = sortStrengthsByScale()
  console.log(strengthsArrByScale)

  return (
    <div>
      <div className='report-instructions'>
        {props.ReportDescription}
      </div>
      <div className={'roster-dropdown'}>
        <Dropdown>
          <Dropdown.Toggle variant="outline-dark" id="dropdown-basic" style={styles.dropdownButton} >
            {scaleShowName}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {scales.map(scale => (
              <Dropdown.Item as="button" name={scale.name} onClick={handleSelect}>{scale.name}</Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
      {props.strengthsViewOn ?
        strengthsArrByScale.map((strengthsArr, scaleIndex) => (
          <Accordion style={scales[scaleIndex].name === scaleShowName ? { display: 'inherit' } : { display: 'none' }}>
            <Card style={styles.strengthsCard}>
              <Card.Body style={styles.strengthsCardBody} >
                <h5 className='strengths-header'>{props.cohortName} Strengths</h5>
                <div style={{ margin: '20px 0px' }}>
                  {strengthsArr[0].Strengths.length === 0 ? <li>[empty]</li> : (
                    strengthsArr[0].Strengths.map((userScore, index) => (
                      <RosterAccordionScale scale={scales[scaleIndex]} index={scaleIndex} scoreType={props.scoreType} scaleShowName={scaleShowName} scoreTypeAlt={props.scoreTypeAlt} styles={styles} userScore={userScore} />
                    ))
                  )
                  }
                </div>
                <h5 className='strengths-header'>{props.cohortName} Developing Strengths</h5>
                <div style={{ margin: '20px 0px' }}>
                  {strengthsArr[1].Developing_Strengths.length === 0 ? <li>[empty]</li> : (
                    strengthsArr[1].Developing_Strengths.map((userScore, index) => (
                      <RosterAccordionScale scale={scales[scaleIndex]} index={scaleIndex} scoreType={props.scoreType} scaleShowName={scaleShowName} scoreTypeAlt={props.scoreTypeAlt} styles={styles} userScore={userScore} />
                    ))
                  )}
                </div>
                <h5 className='strengths-header'>{props.cohortName} Growth Areas</h5>
                <div style={{ margin: '20px 0px' }}>
                  {strengthsArr[2].Growth_Areas.length === 0 ? <li>[empty]</li> : (
                    strengthsArr[2].Growth_Areas.map((userScore, index) => (
                      <RosterAccordionScale scale={scales[scaleIndex]} index={scaleIndex} scoreType={props.scoreType} scaleShowName={scaleShowName} scoreTypeAlt={props.scoreTypeAlt} styles={styles} userScore={userScore} />
                    ))
                  )}
                </div>
              </Card.Body>
            </Card>
          </Accordion>
        ))
        :
        scales.map((scale, index) => (
          props.userModelSeed.map(userScore => (
            userScore.classID === 1 ?
              <Accordion style={scale.name === scaleShowName ? { display: 'inherit' } : { display: 'none' }}>
                <Card style={{ border: 'none' }}>
                  <Accordion.Toggle as={Button} variant="link" eventKey={index} style={{ width: '100%', boxShadow: 'none', padding: '0' }}>
                    <Row className={props.scoreTypeAlt ? 'comparison-progress-row' : null}>
                      <Col xs={12} md={4} style={window.innerWidth <= 740 ? styles.scaleTitleMobile : styles.scaleTitle}>
                        <span style={{ fontWeight: "400" }}>{userScore.userName}</span>
                      </Col>
                      <Col xs={12} md={8} style={{ margin: 'auto' }}>
                        <ProgressBar style={{ position: 'relative' }}>
                          <ProgressBar now={userScore.scores[index][props.scoreType]} label={`${userScore.scores[index][props.scoreType]}%`} style={userScore.scores[index][props.scoreType] < 0 ? { backgroundColor: 'red' } : {}} />
                        </ProgressBar>
                      </Col>
                      {props.scoreTypeAlt ?
                        <>
                          <Col xs={12} md={4} style={window.innerWidth <= 740 ? styles.scaleTitleMobile : styles.scaleTitle}>
                          </Col>
                          <Col xs={12} md={8} style={{ margin: 'auto' }}>
                            <ProgressBar style={{ position: 'relative' }}>
                              <ProgressBar animated now={userScore.scores[index][props.scoreTypeAlt]} label={`${userScore.scores[index][props.scoreTypeAlt]}%`} />
                            </ProgressBar>
                          </Col>
                        </>
                        :
                        null
                      }
                    </Row>
                  </Accordion.Toggle>
                </Card>
              </Accordion>
              :
              null
          ))
        ))}
    </div>
  )
}

export default RosterReport;