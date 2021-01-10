import React from 'react';
import { Card, Accordion, ProgressBar, Row, Col, Button } from 'react-bootstrap';
import './ClassReport.css';

function ChangeClassReport(props) {
  console.log(props)

  const styles = {
    scaleTitle: {
      textAlign: 'right'
    },
    scaleTitleMobile: {
      textAlign: 'left'
    }
  }

  return (
    <div>
      <div className='report-instructions'>
        The ACES Change Class Report shows your class's average percent change in raw score, from the ACES (Initial) to the ACES (Progress) self-assessment, on all scales. A positive change appears in blue, while a negative change appears in red.
      </div>
      {props.reportsDataArr.map((scale, index) => (
        <Accordion>
          <Card style={{ border: 'none' }}>
            <Accordion.Toggle as={Button} variant="link" eventKey={index} style={{ width: '100%', boxShadow: 'none', padding: '0' }}>
              <Row>
                <Col xs={12} md={4} style={window.innerWidth <= 740 ? styles.scaleTitleMobile : styles.scaleTitle}>
                  <span style={{ fontWeight: "400" }}>{scale.scaleName}</span>
                </Col>
                <Col xs={12} md={8} style={{ margin: 'auto' }}>
                  <ProgressBar style={{ position: 'relative' }}>
                    {/* <span style={{ textAlign: 'center', position: 'absolute', width: `${scale.percentileScoreCurrent}%`, left: '0px', color: 'white', lineHeight: '1.25' }}>{`${props.scale.percentileScoreCurrent}%`}</span> */}
                    <ProgressBar now={scale.changeScores[props.scoreCohort].rawScoreAvgChangePercent} label={`${scale.changeScores[props.scoreCohort].rawScoreAvgChangePercent}%`} style={scale.changeScores[props.scoreCohort].rawScoreAvgChangePercent < 0 ? { backgroundColor: 'red' } : {}} />
                  </ProgressBar>
                </Col>
              </Row>
            </Accordion.Toggle>
          </Card>
        </Accordion>
      )
      )}
    </div>
  )
}

export default ChangeClassReport;