import React from 'react';
import { Card, Accordion, Spinner, ProgressBar, Row, Col, Button } from 'react-bootstrap';
import resources from '../../ACES_Assessment/resources';
import scales from '../../ACES_Assessment/scales';
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

  const convertToPercentile = (reportsObj) => {
    reportsObj.forEach(scale => {
      scale.lowPercentage = Math.round(scale.low / scale.total * 100);
      scale.moderatePercentage = Math.round(scale.moderate / scale.total * 100);
      scale.highPercentage = Math.round(scale.high / scale.total * 100);
      if (scale.lowPercentage + scale.moderatePercentage + scale.highPercentage === 99) {
        scale.highPercentage++
      }
    })
    return reportsObj
  }

  const renderComparison = () => {
    const initialPercentileArr = convertToPercentile(props.reportsObj.initialClass)
    const progressPercentileArr = convertToPercentile(props.reportsObj.progressClass)
    let newArr = []
    for (let index = 0; index < scales.length; index++) {
      const scaleName = initialPercentileArr[index].name
      let initialLowPercentage = initialPercentileArr[index].lowPercentage
      let initialModeratePercentage = initialPercentileArr[index].moderatePercentage
      let initialHighPercentage = initialPercentileArr[index].highPercentage
      let progressLowPercentage = progressPercentileArr[index].lowPercentage
      let progressModeratePercentage = progressPercentileArr[index].moderatePercentage
      let progressHighPercentage = progressPercentileArr[index].highPercentage
      let scaleObj = {
        name: scaleName,
        initialLowPercentage: initialLowPercentage,
        initialModeratePercentage: initialModeratePercentage,
        initialHighPercentage: initialHighPercentage,
        progressLowPercentage: progressLowPercentage,
        progressModeratePercentage: progressModeratePercentage,
        progressHighPercentage: progressHighPercentage
      }
      newArr.push(scaleObj);
    }
    return newArr
  }

  return (
    <div>
      <div className='report-instructions'>
        The ACES Comparison Class Report compares your class's results on the ACES (Initial) and ACES (Progress) self-assessments for all scales. For each topic, the Initial score appears above the Progress score.
      </div>
      {renderComparison().map((scaleObj, index) => (
        <Accordion>
          <Card style={{ border: 'none' }}>
            <Accordion.Toggle as={Button} variant="link" eventKey={index} style={{ width: '100%', boxShadow: 'none', padding: '0' }}>
              <Row className='comparison-progress-row'>
                <Col xs={12} md={4} style={window.innerWidth <= 740 ? styles.scaleTitleMobile : styles.scaleTitle}>
                  <span style={{ fontWeight: "400" }}>{scaleObj.name}</span>
                </Col>
                <Col xs={12} md={8} style={{ margin: 'auto' }}>
                  <ProgressBar style={{ position: 'relative' }}>
                    {/* <span style={{ textAlign: 'center', position: 'absolute', width: `${scale.percentileScoreCurrent}%`, left: '0px', color: 'white', lineHeight: '1.25' }}>{`${props.scale.percentileScoreCurrent}%`}</span> */}
                    <ProgressBar now={scaleObj.initialLowPercentage} label={`${scaleObj.initialLowPercentage}%`} style={{ backgroundColor: '#4da3ff' }} />
                    <ProgressBar now={scaleObj.initialModeratePercentage} label={`${scaleObj.initialModeratePercentage}%`} />
                    <ProgressBar now={scaleObj.initialHighPercentage} label={`${scaleObj.initialHighPercentage}%`} style={{ backgroundColor: '#0056b3' }} />
                  </ProgressBar>
                </Col>
                <Col xs={12} md={4} style={{ textAlign: 'right' }}>
                  <span style={{ fontWeight: "400" }}></span>
                </Col>
                <Col xs={12} md={8} style={{ margin: 'auto' }}>
                  <ProgressBar style={{ position: 'relative' }}>
                    {/* <span style={{ textAlign: 'center', position: 'absolute', width: `${scaleObj.percentileScoreCurrent}%`, left: '0px', color: 'white', lineHeight: '1.25' }}>{`${props.scaleObj.percentileScoreCurrent}%`}</span> */}
                    <ProgressBar animated now={scaleObj.progressLowPercentage} label={`${scaleObj.progressLowPercentage}%`} style={{ backgroundColor: '#4da3ff' }} />
                    <ProgressBar animated now={scaleObj.progressModeratePercentage} label={`${scaleObj.progressModeratePercentage}%`} />
                    <ProgressBar animated now={scaleObj.progressHighPercentage} label={`${scaleObj.progressHighPercentage}%`} style={{ backgroundColor: '#0056b3' }} />
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

export default ComparisonClassReport;