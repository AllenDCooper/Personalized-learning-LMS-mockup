import React, { useState } from 'react';
import { Card, Accordion, ProgressBar, Row, Col, Button, Dropdown } from 'react-bootstrap';
import './ClassReport.css';
import scales from '../../ACES_Assessment/scales.js';

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
      {scales.map((scale, index) => (
        props.userModelSeed.map(userScore => (
          // <div>{userScore.scores[index].rawScoreInitial}</div>
          userScore.inClass ?
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
                            <ProgressBar animated now={userScore.scores[index][props.scoreTypeAlt]} label={`${userScore.scores[index][props.scoreType]}%`} />
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