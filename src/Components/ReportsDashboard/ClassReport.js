import React from 'react';
import { Card, Accordion, ProgressBar, Row, Col, Button } from 'react-bootstrap';
import './ClassReport.css';

function ClassReport(props) {
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
        The ACES Initial Class Report compares your class of students to nationwide norming tables.
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
      )}
    </div>
  )
}

export default ClassReport;