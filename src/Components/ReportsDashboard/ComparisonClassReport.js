import React from 'react';
import { Card, Accordion, ProgressBar, Row, Col, Button } from 'react-bootstrap';
import './ClassReport.css';

function ComparisonClassReport(props) {
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
        The ACES Comparison Class Report compares your class's results on the ACES (Initial) and ACES (Progress) self-assessments for all scales. For each topic, the Initial score appears above the Progress score.
      </div>
      {props.reportsDataArr.map((scale, index) => (
        <Accordion>
          <Card style={{ border: 'none' }}>
            <Accordion.Toggle as={Button} variant="link" eventKey={index} style={{ width: '100%', boxShadow: 'none', padding: '0' }}>
              <Row className='comparison-progress-row'>
                <Col xs={12} md={4} style={window.innerWidth <= 740 ? styles.scaleTitleMobile : styles.scaleTitle}>
                  <span style={{ fontWeight: "400" }}>{scale.scaleName}</span>
                </Col>
                <Col xs={12} md={8} style={{ margin: 'auto' }}>
                  <ProgressBar style={{ position: 'relative' }}>
                    {/* <span style={{ textAlign: 'center', position: 'absolute', width: `${scale.percentileScoreCurrent}%`, left: '0px', color: 'white', lineHeight: '1.25' }}>{`${props.scale.percentileScoreCurrent}%`}</span> */}
                    <ProgressBar now={scale.initialScores.classScores.lowScoreCountPercent} label={`${scale.initialScores.classScores.lowScoreCountPercent}%`} style={{ backgroundColor: '#4da3ff' }} />
                    <ProgressBar now={scale.initialScores.classScores.moderateScoreCountPercent} label={`${scale.initialScores.classScores.moderateScoreCountPercent}%`} />
                    <ProgressBar now={scale.initialScores.classScores.highScoreCountPercent} label={`${scale.initialScores.classScores.highScoreCountPercent}%`} style={{ backgroundColor: '#0056b3' }} />
                  </ProgressBar>
                </Col>
                <Col xs={12} md={4} style={{ textAlign: 'right' }}>
                  <span style={{ fontWeight: "400" }}></span>
                </Col>
                <Col xs={12} md={8} style={{ margin: 'auto' }}>
                  <ProgressBar style={{ position: 'relative' }}>
                    {/* <span style={{ textAlign: 'center', position: 'absolute', width: `${scaleObj.percentileScoreCurrent}%`, left: '0px', color: 'white', lineHeight: '1.25' }}>{`${props.scaleObj.percentileScoreCurrent}%`}</span> */}
                    <ProgressBar animated now={scale.progressScores.classScores.lowScoreCountPercent} label={`${scale.progressScores.classScores.lowScoreCountPercent}%`} style={{ backgroundColor: '#4da3ff' }} />
                    <ProgressBar animated now={scale.progressScores.classScores.moderateScoreCountPercent} label={`${scale.progressScores.classScores.moderateScoreCountPercent}%`} />
                    <ProgressBar animated now={scale.progressScores.classScores.highScoreCountPercent} label={`${scale.progressScores.classScores.highScoreCountPercent}%`} style={{ backgroundColor: '#0056b3' }} />
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

export default ComparisonClassReport;