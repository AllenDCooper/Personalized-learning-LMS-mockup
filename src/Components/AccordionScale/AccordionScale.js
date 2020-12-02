import React from 'react';
import { Card, Accordion, Spinner, ProgressBar, Row, Col, Button } from 'react-bootstrap';

function AccordionScale(props) {

  return (
    <Accordion>
      <Card style={{ border: 'none' }}>
        <Accordion.Toggle as={Button} variant="link" eventKey={props.index + 20} style={{ width: '100%', boxShadow: 'none', padding: '0' }}>
          <Row>
            <Col xs={12} md={4} style={{ textAlign: 'right' }}>
              <span style={{ fontWeight: "400" }}>{props.scale.name}</span>
            </Col>
            <Col xs={12} md={8} style={{ margin: 'auto' }}>
              {props.scale.percentileScoreInitial ?
                <ProgressBar style={{ position: 'relative' }}>
                  <span style={{ textAlign: 'center', position: 'absolute', width: `${props.scale.percentileScoreCurrent}%`, left: '0px', color: 'white', lineHeight: '1.25' }}>{`${props.scale.percentileScoreCurrent}%`}</span>
                  <ProgressBar now={props.scale.percentileScoreInitial} />
                  <ProgressBar animated variant='success' now={props.scale.percentileScoreCurrent - props.scale.percentileScoreInitial} />
                </ProgressBar>
                :
                <ProgressBar now={props.scale.percentileScoreCurrent} label={`${props.scale.percentileScoreCurrent}%`} />
              }
            </Col>
          </Row>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={props.index + 20}>
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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Erat velit scelerisque in dictum non consectetur. In cursus turpis massa tincidunt dui ut ornare lectus sit. Scelerisque eu ultrices vitae auctor eu augue ut lectus. Quam nulla porttitor massa id neque. Tellus id interdum velit laoreet id donec ultrices. Eget nunc scelerisque viverra mauris. Pretium quam vulputate dignissim suspendisse in est. Vel facilisis volutpat est velit egestas dui id. Adipiscing bibendum est ultricies integer. Aliquam sem et tortor consequat id porta nibh venenatis cras. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Consectetur a erat nam at lectus. Ut tristique et egestas quis. Aliquet eget sit amet tellus cras adipiscing enim eu turpis. Augue lacus viverra vitae congue eu consequat ac felis. Consectetur lorem donec massa sapien faucibus et molestie. Viverra adipiscing at in tellus integer. Elementum integer enim neque volutpat ac tincidunt.</p>
                <p>Venenatis urna cursus eget nunc scelerisque. Morbi tempus iaculis urna id volutpat lacus laoreet non. Adipiscing bibendum est ultricies integer quis auctor elit sed vulputate. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Massa tempor nec feugiat nisl pretium fusce id. Faucibus in ornare quam viverra orci. Pellentesque diam volutpat commodo sed. Purus semper eget duis at. Sit amet dictum sit amet. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui.</p>
              </Col>
            </Row>
          </div>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  )
}

export default AccordionScale;