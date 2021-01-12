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
        {props.ReportDescription}
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
                    <ProgressBar now={scale.initialScores[props.scoreCohort].lowScoreCountPercent} label={`${scale.initialScores[props.scoreCohort].lowScoreCountPercent}%`} style={{ backgroundColor: '#4da3ff' }} />
                    <ProgressBar now={scale.initialScores[props.scoreCohort].moderateScoreCountPercent} label={`${scale.initialScores[props.scoreCohort].moderateScoreCountPercent}%`} />
                    <ProgressBar now={scale.initialScores[props.scoreCohort].highScoreCountPercent} label={`${scale.initialScores[props.scoreCohort].highScoreCountPercent}%`} style={{ backgroundColor: '#0056b3' }} />
                  </ProgressBar>
                </Col>
                <Col xs={12} md={4} style={{ textAlign: 'right' }}>
                  <span style={{ fontWeight: "400" }}></span>
                </Col>
                <Col xs={12} md={8} style={{ margin: 'auto' }}>
                  <ProgressBar style={{ position: 'relative' }}>
                    {/* <span style={{ textAlign: 'center', position: 'absolute', width: `${scaleObj.percentileScoreCurrent}%`, left: '0px', color: 'white', lineHeight: '1.25' }}>{`${props.scaleObj.percentileScoreCurrent}%`}</span> */}
                    <ProgressBar animated now={scale.progressScores[props.scoreCohort].lowScoreCountPercent} label={`${scale.progressScores[props.scoreCohort].lowScoreCountPercent}%`} style={{ backgroundColor: '#4da3ff' }} />
                    <ProgressBar animated now={scale.progressScores[props.scoreCohort].moderateScoreCountPercent} label={`${scale.progressScores[props.scoreCohort].moderateScoreCountPercent}%`} />
                    <ProgressBar animated now={scale.progressScores[props.scoreCohort].highScoreCountPercent} label={`${scale.progressScores[props.scoreCohort].highScoreCountPercent}%`} style={{ backgroundColor: '#0056b3' }} />
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