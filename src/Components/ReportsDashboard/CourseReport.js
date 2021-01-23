import React, { useState } from 'react';
import { Card, Accordion, ProgressBar, Row, Col, Button, Dropdown } from 'react-bootstrap';
import './ClassReport.css';
import scales from '../../ACES_Assessment/scales.js';
import RosterAccordionScale from '../AccordionScale/RosterAccordionScale';

function CourseReport(props) {
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

    // instantiate an array to hold the 3 tiers of skill
    const strengthsArr = [{ "Strengths": [] }, { "Developing_Strengths": [] }, { "Growth_Areas": [] }]

    // map descending array, sorting out into 3 tiers and pushing into appropriate object in strengthsArr
    descendingArr.forEach((element, index) => {
      if (element[props.scoreType][props.scoreCohort].highScoreCountPercent > 30) {
        const arrCopy1 = strengthsArr.Strengths
        let arr1 = []
        arrCopy1 === undefined ? arr1 = [] : arr1 = [...arrCopy1]
        arr1.push(element)
        strengthsArr.Strengths = arr1
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

  // const strengthsArr = sortStrengths([...props.reportsDataArr])
  // console.log(strengthsArr)

  // const sortStrengthsByScale = () => {
  //   let sortedStrengthsByScaleArr = []
  //   scales.forEach((scale, scaleIndex) => {
  //     sortedStrengthsByScaleArr.push(sortStrengths(props.userModelSeed, scaleIndex, props.scoreType, props.scoreTypeAlt))
  //   })
  //   return sortedStrengthsByScaleArr
  // }

  // const strengthsArrByScale = sortStrengthsByScale()
  // console.log(strengthsArrByScale)

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
      {props.reportsDataArr.map((scale, index) => (
        <Accordion style={scale.scaleName === scaleShowName ? { display: 'inherit' } : { display: 'none' }}>
          {scale[props.scoreType][props.scoreCohort].map(classScore => (
            <Card style={{ border: 'none' }}>
              <Accordion.Toggle as={Button} variant="link" eventKey={index} style={{ width: '100%', boxShadow: 'none', padding: '0' }}>
                <Row className={props.scoreTypeAlt ? 'comparison-progress-row' : null}>
                  <Col xs={12} md={4} style={window.innerWidth <= 740 ? styles.scaleTitleMobile : styles.scaleTitle}>
                    <span style={{ fontWeight: "400" }}>{`Class-${classScore.classID}`}</span>
                  </Col>
                  <Col xs={12} md={8} style={{ margin: 'auto' }}>
                    <ProgressBar style={{ position: 'relative' }}>
                        <ProgressBar now={classScore.lowScoreCountPercent} label={`${classScore.lowScoreCountPercent}%`} style={{ backgroundColor: '#4da3ff' }} />
                        <ProgressBar now={classScore.moderateScoreCountPercent} label={`${classScore.moderateScoreCountPercent}%`} />
                        <ProgressBar now={classScore.highScoreCountPercent} label={`${classScore.highScoreCountPercent}%`} style={{ backgroundColor: '#0056b3' }} />
                    </ProgressBar>
                  </Col>
                </Row>
              </Accordion.Toggle>
            </Card>
          ))}
        </Accordion>
      ))
      }
    </div>
  )
}

export default CourseReport;