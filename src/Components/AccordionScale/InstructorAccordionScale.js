import React from 'react';
import { Card, Accordion, Spinner, ProgressBar, Row, Col, Button } from 'react-bootstrap';
import resources from '../../ACES_Assessment/resources';

function InstructorAccordionScale(props) {

  const resourceObj = resources[props.scale.scaleName][props.level];
  console.log(resourceObj);

  const styles = {
    scaleTitle: {
      textAlign: 'right'
    },
    scaleTitleMobile: {
      textAlign: 'left'
    }
  }

  return (
    <Accordion>
      <Card style={{ border: 'none' }}>
        <Accordion.Toggle as={Button} variant="link" eventKey={props.index + 20} style={{ width: '100%', boxShadow: 'none', padding: '0' }}>
          <Row>
            <Col xs={12} md={4} style={window.innerWidth <= 740 ? styles.scaleTitleMobile : styles.scaleTitle}>
              <span style={{ fontWeight: "400" }}>{props.scale.scaleName}</span>
            </Col>
            <Col xs={12} md={8} style={{ margin: 'auto' }}>
              <ProgressBar style={{ position: 'relative' }}>
                <ProgressBar now={props.scale[props.scoreType][props.scoreCohort].lowScoreCountPercent} label={`${props.scale[props.scoreType][props.scoreCohort].lowScoreCountPercent}%`} style={{ backgroundColor: '#4da3ff' }} />
                <ProgressBar now={props.scale[props.scoreType][props.scoreCohort].moderateScoreCountPercent} label={`${props.scale[props.scoreType][props.scoreCohort].moderateScoreCountPercent}%`} />
                <ProgressBar now={props.scale[props.scoreType][props.scoreCohort].highScoreCountPercent} label={`${props.scale[props.scoreType][props.scoreCohort].highScoreCountPercent}%`} style={{ backgroundColor: '#0056b3' }} />
              </ProgressBar>
            </Col>
          </Row>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={props.index + 20}>
          <div>
            <Row>
              <Col xs={12} md={4} style={{ textAlign: 'right' }}>
                <span style={{ fontWeight: "400" }}></span>
              </Col>
              <Col xs={12} md={8} style={{ margin: 'auto' }}>
                <h5>{props.scale.scaleName}</h5>
                <p>{resourceObj.description}</p>
                <ul>
                  {resourceObj.resources.map(item =>
                    <li>
                      {`${item.resourceName}: `}<a target='_blank' href={`/${item.resourceURL}`}>{item.resourceURL}</a>
                      <p>{item.resourceText}</p>
                    </li>
                  )}
                </ul>
              </Col>
            </Row>
          </div>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  )
}

export default InstructorAccordionScale;