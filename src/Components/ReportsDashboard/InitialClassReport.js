import React from 'react';
import { Card, Accordion, Spinner, ProgressBar, Row, Col, Button } from 'react-bootstrap';
import resources from '../../ACES_Assessment/resources';
import './ClassReport.css';

function InitialClassReport(props) {
  console.log(props)

  const styles = {
    scaleTitle: {
      textAlign: 'right'
    },
    scaleTitleMobile: {
      textAlign: 'left'
    }
  }

  const convertToPercentile = (reportsObj) => {
    reportsObj.forEach(scale => {
      scale.lowPercentage = Math.round(scale.low / scale.total * 100);
      scale.moderatePercentage = Math.round(scale.moderate / scale.total * 100);
      scale.highPercentage = Math.round(scale.high / scale.total * 100);
      if(scale.lowPercentage + scale.moderatePercentage + scale.highPercentage === 99) {
        scale.highPercentage++
      }
    })
    return reportsObj
  }

  return (
    <div>
      <div className='report-instructions'>
        The ACES Initial Class Report compares your class of students to nationwide norming tables.
      </div>
      {convertToPercentile(props.reportsObj.initialClass).map((scale, index) => (
        <Accordion>
          <Card style={{ border: 'none' }}>
            <Accordion.Toggle as={Button} variant="link" eventKey={index} style={{ width: '100%', boxShadow: 'none', padding: '0' }}>
              <Row>
                <Col xs={12} md={4} style={window.innerWidth <= 740 ? styles.scaleTitleMobile : styles.scaleTitle}>
                  <span style={{ fontWeight: "400" }}>{scale.name}</span>
                </Col>
                <Col xs={12} md={8} style={{ margin: 'auto' }}>
                  <ProgressBar style={{ position: 'relative' }}>
                    {/* <span style={{ textAlign: 'center', position: 'absolute', width: `${scale.percentileScoreCurrent}%`, left: '0px', color: 'white', lineHeight: '1.25' }}>{`${props.scale.percentileScoreCurrent}%`}</span> */}
                    <ProgressBar now={scale.lowPercentage} label={`${scale.lowPercentage}%`} style={{ backgroundColor: '#4da3ff' }} />
                    <ProgressBar now={scale.moderatePercentage} label={`${scale.moderatePercentage}%`} />
                    <ProgressBar now={scale.highPercentage} label={`${scale.highPercentage}%`} style={{ backgroundColor: '#0056b3' }} />
                  </ProgressBar>
                </Col>
              </Row>
            </Accordion.Toggle>
            {/* <Accordion.Collapse eventKey={props.index + 20}>
            <div>
              {props.scale.percentileScoreInitial ?
                <div>
                  <Row>
                    <Col xs={12} md={4} style={{ textAlign: 'right' }}>
                      <span style={{ fontWeight: "400" }}>{`Initial`}</span>
                    </Col>
                    <Col xs={12} md={8} style={{ margin: 'auto' }}>
                      <ProgressBar>
                        <ProgressBar style={{ backgroundColor: '#33AEFF' }} now={props.scale.percentileScoreInitial} label={`${props.scale.percentileScoreInitial}%`} />
                      </ProgressBar>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} md={4} style={{ textAlign: 'right' }}>
                      <span style={{ fontWeight: "400" }}>{`Progress`}</span>
                    </Col>
                    <Col xs={12} md={8} style={{ margin: 'auto' }}>
                      <ProgressBar>
                        <ProgressBar style={{ backgroundColor: '#33AEFF' }} now={props.scale.percentileScoreCurrent} label={`${props.scale.percentileScoreCurrent}%`} />
                      </ProgressBar>
                    </Col>
                  </Row>
                </div>
                :
                null
              }
              <Row>
                <Col xs={12} md={4} style={{ textAlign: 'right' }}>
                  <span style={{ fontWeight: "400" }}></span>
                </Col>
                <Col xs={12} md={8} style={{ margin: 'auto' }}>
                  <h5>{props.scale.name}</h5>
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
          </Accordion.Collapse> */}
          </Card>
        </Accordion>
      )
      )}
    </div>
  )
}

export default InitialClassReport;