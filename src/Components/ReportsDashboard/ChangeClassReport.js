import React from 'react';
import { Card, Accordion, Spinner, ProgressBar, Row, Col, Button } from 'react-bootstrap';
import scales from '../../ACES_Assessment/scales';
import resources from '../../ACES_Assessment/resources';
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

  const renderChange = () => {
    const newArr = []
    for (let index = 0; index < scales.length; index++) {
      const scaleName = props.reportsObj.initialClass[index].name
      let rawScoreDif = (((props.reportsObj.progressClass[index].rawScoreAvg - props.reportsObj.initialClass[index].rawScoreAvg) / props.reportsObj.initialClass[index].rawScoreAvg) * 100).toFixed(1)
      let scaleObj = {
        name: scaleName,
        change: rawScoreDif
      }
      newArr.push(scaleObj);
    }
    console.log(newArr);
    return newArr
  }

  return (
    <div>
      <div className='report-instructions'>
        The ACES Change Class Report shows your class's average percent change in raw score, from the ACES (Initial) to the ACES (Progress) self-assessment, on all scales. A positive change appears in blue, while a negative change appears in red.
      </div>
      {renderChange().map((scale, index) => (
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
                    <ProgressBar now={scale.change} label={`${scale.change}%`} style={scale.change < 0 ? { backgroundColor: 'red' }: {}} />
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

export default ChangeClassReport;