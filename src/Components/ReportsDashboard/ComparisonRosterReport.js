import React, { useState } from 'react';
import { Card, Accordion, ProgressBar, Row, Col, Button, Dropdown } from 'react-bootstrap';
import './ClassReport.css';
import scales from '../../ACES_Assessment/scales.js';

function ComparisonRosterReport(props) {
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
          userScore.inClass ?
            <Accordion style={scale.scaleName === scaleShowName ? { display: 'inherit' } : { display: 'none' }}>
              <Card style={{ border: 'none' }}>
                <Accordion.Toggle as={Button} variant="link" eventKey={index} style={{ width: '100%', boxShadow: 'none', padding: '0' }}>
                  <Row className='comparison-progress-row'>
                    <Col xs={12} md={4} style={window.innerWidth <= 740 ? styles.scaleTitleMobile : styles.scaleTitle}>
                      <span style={{ fontWeight: "400" }}>{userScore.userName}</span>
                    </Col>
                    <Col xs={12} md={8} style={{ margin: 'auto' }}>
                      <ProgressBar style={{ position: 'relative' }}>
                        <ProgressBar now={userScore.scores[index].percentileScoreInitial} label={`${userScore.scores[index].percentileScoreInitial}%`} />
                      </ProgressBar>
                    </Col>
                    <Col xs={12} md={4} style={{ textAlign: 'right' }}>
                      <span style={{ fontWeight: "400" }}></span>
                    </Col>
                    <Col xs={12} md={8} style={{ margin: 'auto' }}>
                      <ProgressBar style={{ position: 'relative' }}>
                        <ProgressBar now={userScore.scores[index].percentileScoreCurrent} label={`${userScore.scores[index].percentileScoreCurrent}%`} />
                      </ProgressBar>
                    </Col>
                  </Row>
                </Accordion.Toggle>
              </Card>
            </Accordion>
            :
            null
        ))
      )
      )}
    </div>
  )
}

export default ComparisonRosterReport;