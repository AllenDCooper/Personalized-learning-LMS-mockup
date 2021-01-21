import React from 'react';
import { Card, Accordion, ProgressBar, Row, Col, Button } from 'react-bootstrap';
import './ClassReport.css';
import InstructorAccordionScale from '../AccordionScale/InstructorAccordionScale'

function ClassReport(props) {
  console.log(props)

  const styles = {
    scaleTitle: {
      textAlign: 'right'
    },
    scaleTitleMobile: {
      textAlign: 'left'
    },
    strengthsCard: {
      border: 'none',
    },
    strengthsCardBody: {
      paddingTop: '0px'
    }
  }

  // sort function that takes an array and will return new array with items in order from largest to smallest
  const sortValuesDescending = (arr) => {
    console.log(arr);
    arr.sort(function (a, b) {
      return b[props.scoreType][props.scoreCohort].highScoreCountPercent - a[props.scoreType][props.scoreCohort].highScoreCountPercent
    })
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
      newArr.push(arr[i])
    }
    console.log(newArr)
    return newArr
  }

  const sortStrengths = (arr) => {
    // sort the percentile array into descending order so that top strengths will appear first
    const descendingArr = sortValuesDescending(arr);
    console.log(`descendingArr: ${descendingArr}`);

    // instantiate an array to hold the 3 tiers of skill
    const strengthsArr = [{ "Strengths": [] }, { "Developing_Strengths": [] }, { "Growth_Areas": [] }]

    // map descending array, sorting out into 3 tiers and pushing into appropriate object in strengthsArr
    descendingArr.forEach((element, index) => {
      if (element[props.scoreType][props.scoreCohort].highScoreCountPercent > 30) {
        const arrCopy1 = strengthsArr[0].Strengths
        let arr1 = []
        arrCopy1 === undefined ? arr1 = [] : arr1 = [...arrCopy1]
        arr1.push(element)
        strengthsArr[0].Strengths = arr1
      } else if (element[props.scoreType][props.scoreCohort].highScoreCountPercent <= 30 && element[props.scoreType][props.scoreCohort].highScoreCountPercent > 20) {
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
    return strengthsArr
  }

  const strengthsArr = sortStrengths([...props.reportsDataArr])
  console.log(strengthsArr)

  return (
    <div>
      <Row>
        <Col xs={12} md={12} >
          <div className='report-instructions'>
            {props.ReportDescription}
          </div>
        </Col>
      </Row>
      {props.strengthsViewOn ?
        <Accordion>
          <Card style={styles.strengthsCard}>
            <Card.Body style={styles.strengthsCardBody} >
              <h5 className='strengths-header'>{props.cohortName} Strengths</h5>
              <div style={{ margin: '20px 0px' }}>
                {strengthsArr[0].Strengths.length === 0 ? <li>[empty]</li> : (
                  strengthsArr[0].Strengths.map((scale, index) => (
                    <InstructorAccordionScale scale={scale} index={index} scoreType={props.scoreType} scoreCohort={props.scoreCohort} level={'high'} />
                  ))
                )}
              </div>
              <h5 className='strengths-header'>{props.cohortName} Developing Strengths</h5>
              <div style={{ margin: '20px 0px' }}>
                {strengthsArr[1].Developing_Strengths.length === 0 ? <li>[empty]</li> : (
                  strengthsArr[1].Developing_Strengths.map((scale, index) => (
                    <InstructorAccordionScale scale={scale} index={index} scoreType={props.scoreType} scoreCohort={props.scoreCohort} level={'moderate'} />
                  ))
                )}
              </div>
              <h5 className='strengths-header'>{props.cohortName} Growth Areas</h5>
              <div style={{ margin: '20px 0px' }}>
                {strengthsArr[2].Growth_Areas.length === 0 ? <li>[empty]</li> : (
                  strengthsArr[2].Growth_Areas.map((scale, index) => (
                    <InstructorAccordionScale scale={scale} index={index} scoreType={props.scoreType} scoreCohort={props.scoreCohort} level={'low'} />
                  ))
                )}
              </div>
            </Card.Body>
          </Card>
        </Accordion>
        :
        props.reportsDataArr.map((scale, index) => (
          <Accordion>
            <Card style={{ border: 'none' }}>
              <Accordion.Toggle as={Button} variant="link" eventKey={index} style={{ width: '100%', boxShadow: 'none', padding: '0' }}>
                <Row>
                  <Col xs={12} md={4} style={window.innerWidth <= 740 ? styles.scaleTitleMobile : styles.scaleTitle}>
                    <span style={{ fontWeight: "400" }}>{scale.scaleName}</span>
                  </Col>
                  <Col xs={12} md={8} style={{ margin: 'auto' }}>
                    <ProgressBar style={{ position: 'relative' }}>
                      <ProgressBar now={scale[props.scoreType][props.scoreCohort].lowScoreCountPercent} label={`${scale[props.scoreType][props.scoreCohort].lowScoreCountPercent}%`} style={{ backgroundColor: '#4da3ff' }} />
                      <ProgressBar now={scale[props.scoreType][props.scoreCohort].moderateScoreCountPercent} label={`${scale[props.scoreType][props.scoreCohort].moderateScoreCountPercent}%`} />
                      <ProgressBar now={scale[props.scoreType][props.scoreCohort].highScoreCountPercent} label={`${scale[props.scoreType][props.scoreCohort].highScoreCountPercent}%`} style={{ backgroundColor: '#0056b3' }} />
                    </ProgressBar>
                  </Col>
                </Row>
              </Accordion.Toggle>
            </Card>
          </Accordion>
        )
        )
      }
    </div >
  )
}

export default ClassReport;