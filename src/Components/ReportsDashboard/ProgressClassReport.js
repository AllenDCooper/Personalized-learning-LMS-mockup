import React from 'react';
import { Card, Accordion, Spinner, ProgressBar, Row, Col, Button } from 'react-bootstrap';
import resources from '../../ACES_Assessment/resources';
import './ClassReport.css';

function ProgressClassReport(props) {

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
                    <ProgressBar now={scale.progressScores.classScores.lowScoreCountPercent} label={`${scale.progressScores.classScores.lowScoreCountPercent}%`} style={{ backgroundColor: '#4da3ff' }} />
                    <ProgressBar now={scale.progressScores.classScores.moderateScoreCountPercent} label={`${scale.progressScores.classScores.moderateScoreCountPercent}%`} />
                    <ProgressBar now={scale.progressScores.classScores.highScoreCountPercent} label={`${scale.progressScores.classScores.highScoreCountPercent}%`} style={{ backgroundColor: '#0056b3' }} />
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

export default ProgressClassReport;