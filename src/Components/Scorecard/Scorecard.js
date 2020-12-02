import React, { Component } from 'react';
import { Card, Accordion, Spinner, ProgressBar, Row, Col, Button } from 'react-bootstrap';

class Scorecard extends Component {

  render() {
    console.log(this.props.strengthsArr)
    console.log(this.props.spinnerOn)

    // if no scores because assessment hasn't been taken yet, then no content modules will be delivered to user
    if (this.props.goalsArr.length === 0) {
      return (
        null
      )
    }
    // otherwise will display a strengths report module
    else {
      return (
        <div>
          <h4 style={{ paddingLeft: "20px" }}>
            Your Strengths Report
          </h4>
          {this.props.spinnerOn ?
            <div style={{ marginBottom: "30px" }}>
              <Spinner animation="grow" role="status" variant="primary" style={{ marginLeft: "20px" }}>
                <span className="sr-only">Loading...</span>
              </Spinner>
              <span style={{ marginLeft: "10px" }}>Creating your strengths report...</span>
            </div>
            :
            <Accordion style={{ marginBottom: "30px" }} >
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="14">
                  View Report
            </Accordion.Toggle>
                <Accordion.Collapse eventKey="14">
                  <Card.Body>
                    <h5 className='strengths-header'>Your Strengths</h5>
                    <div style={{ margin: '20px 0px' }}>
                      {this.props.strengthsArr[0].Strengths.length === 0 ? <li>[empty]</li> : (
                        this.props.strengthsArr[0].Strengths.map((scale, index) => (
                          <Accordion>
                            <Card style={{ border: 'none' }}>
                              <Accordion.Toggle as={Button} variant="link" eventKey={index + 20} style={{ width: '100%', boxShadow: 'none', padding: '0' }}>
                                <Row>
                                  <Col xs={12} md={4} style={{ textAlign: 'right' }}>
                                    <span style={{ fontWeight: "400" }}>{scale.name}</span>
                                  </Col>
                                  <Col xs={12} md={8} style={{ margin: 'auto' }}>
                                    {scale.percentileScoreInitial ?
                                      <ProgressBar style={{position: 'relative'}}>
                                        <span style={{textAlign: 'center', position: 'absolute', width: `${scale.percentileScoreCurrent}%`, left: '0px', color: 'white', lineHeight: '1.25'}}>{`${scale.percentileScoreCurrent}%`}</span>
                                        <ProgressBar now={scale.percentileScoreInitial} />
                                        <ProgressBar animated variant='success' now={scale.percentileScoreCurrent - scale.percentileScoreInitial} />
                                      </ProgressBar>
                                      :
                                      <ProgressBar now={scale.percentileScoreCurrent} label={`${scale.percentileScoreCurrent}%`} />
                                    }
                                  </Col>
                                </Row>
                              </Accordion.Toggle>
                              <Accordion.Collapse eventKey={index + 20}>
                                <div>
                                  {scale.percentileScoreInitial ?
                                    <div>
                                      <Row>
                                        <Col xs={12} md={4} style={{ textAlign: 'right' }}>
                                          <span style={{ fontWeight: "400" }}>{`Initial`}</span>
                                        </Col>
                                        <Col xs={12} md={8} style={{ margin: 'auto' }}>
                                          <ProgressBar>
                                            <ProgressBar style={{backgroundColor: '#33AEFF'}} now={scale.percentileScoreInitial} label={`${scale.percentileScoreInitial}%`} />
                                          </ProgressBar>
                                        </Col>
                                      </Row>
                                      <Row>
                                        <Col xs={12} md={4} style={{ textAlign: 'right' }}>
                                          <span style={{ fontWeight: "400" }}>{`Progress`}</span>
                                        </Col>
                                        <Col xs={12} md={8} style={{ margin: 'auto' }}>
                                          <ProgressBar>
                                            <ProgressBar style={{backgroundColor: '#33AEFF'}} now={scale.percentileScoreCurrent} label={`${scale.percentileScoreCurrent}%`} />
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
                                      <h5>{scale.name}</h5>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Erat velit scelerisque in dictum non consectetur. In cursus turpis massa tincidunt dui ut ornare lectus sit. Scelerisque eu ultrices vitae auctor eu augue ut lectus. Quam nulla porttitor massa id neque. Tellus id interdum velit laoreet id donec ultrices. Eget nunc scelerisque viverra mauris. Pretium quam vulputate dignissim suspendisse in est. Vel facilisis volutpat est velit egestas dui id. Adipiscing bibendum est ultricies integer. Aliquam sem et tortor consequat id porta nibh venenatis cras. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Consectetur a erat nam at lectus. Ut tristique et egestas quis. Aliquet eget sit amet tellus cras adipiscing enim eu turpis. Augue lacus viverra vitae congue eu consequat ac felis. Consectetur lorem donec massa sapien faucibus et molestie. Viverra adipiscing at in tellus integer. Elementum integer enim neque volutpat ac tincidunt.</p>
                                      <p>Venenatis urna cursus eget nunc scelerisque. Morbi tempus iaculis urna id volutpat lacus laoreet non. Adipiscing bibendum est ultricies integer quis auctor elit sed vulputate. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Massa tempor nec feugiat nisl pretium fusce id. Faucibus in ornare quam viverra orci. Pellentesque diam volutpat commodo sed. Purus semper eget duis at. Sit amet dictum sit amet. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui.</p>
                                    </Col>
                                  </Row>
                                </div>
                              </Accordion.Collapse>
                            </Card>
                          </Accordion>
                        ))
                      )}
                    </div>
                    <h5 className='strengths-header'>Your Developing Strengths</h5>
                    <div style={{ margin: '20px 0px' }}>
                      {this.props.strengthsArr[1].Developing_Strengths.length === 0 ? <li>[empty]</li> : (
                        this.props.strengthsArr[1].Developing_Strengths.map((scale, index) => (
                          <Accordion>
                            <Card style={{ border: 'none' }}>
                              <Accordion.Toggle as={Button} variant="link" eventKey={index + 20} style={{ width: '100%', boxShadow: 'none', padding: '0' }}>
                                <Row>
                                  <Col xs={12} md={4} style={{ textAlign: 'right' }}>
                                    <span style={{ fontWeight: "400" }}>{scale.name}</span>
                                  </Col>
                                  <Col xs={12} md={8} style={{ margin: 'auto' }}>
                                    {scale.percentileScoreInitial ?
                                      <ProgressBar style={{position: 'relative'}}>
                                        <span style={{textAlign: 'center', position: 'absolute', width: `${scale.percentileScoreCurrent}%`, left: '0px', color: 'white', lineHeight: '1.25'}}>{`${scale.percentileScoreCurrent}%`}</span>
                                        <ProgressBar now={scale.percentileScoreInitial} />
                                        <ProgressBar animated variant='success' now={scale.percentileScoreCurrent - scale.percentileScoreInitial} />
                                      </ProgressBar>
                                      :
                                      <ProgressBar now={scale.percentileScoreCurrent} label={`${scale.percentileScoreCurrent}%`} />
                                    }
                                  </Col>
                                </Row>
                              </Accordion.Toggle>
                              <Accordion.Collapse eventKey={index + 20}>
                                <div>
                                  {scale.percentileScoreInitial ?
                                    <div>
                                      <Row>
                                        <Col xs={12} md={4} style={{ textAlign: 'right' }}>
                                          <span style={{ fontWeight: "400" }}>{`Initial`}</span>
                                        </Col>
                                        <Col xs={12} md={8} style={{ margin: 'auto' }}>
                                          <ProgressBar>
                                            <ProgressBar style={{backgroundColor: '#33AEFF'}} now={scale.percentileScoreInitial} label={`${scale.percentileScoreInitial}%`} />
                                          </ProgressBar>
                                        </Col>
                                      </Row>
                                      <Row>
                                        <Col xs={12} md={4} style={{ textAlign: 'right' }}>
                                          <span style={{ fontWeight: "400" }}>{`Progress`}</span>
                                        </Col>
                                        <Col xs={12} md={8} style={{ margin: 'auto' }}>
                                          <ProgressBar>
                                            <ProgressBar style={{backgroundColor: '#33AEFF'}} now={scale.percentileScoreCurrent} label={`${scale.percentileScoreCurrent}%`} />
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
                                      <h5>{scale.name}</h5>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Erat velit scelerisque in dictum non consectetur. In cursus turpis massa tincidunt dui ut ornare lectus sit. Scelerisque eu ultrices vitae auctor eu augue ut lectus. Quam nulla porttitor massa id neque. Tellus id interdum velit laoreet id donec ultrices. Eget nunc scelerisque viverra mauris. Pretium quam vulputate dignissim suspendisse in est. Vel facilisis volutpat est velit egestas dui id. Adipiscing bibendum est ultricies integer. Aliquam sem et tortor consequat id porta nibh venenatis cras. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Consectetur a erat nam at lectus. Ut tristique et egestas quis. Aliquet eget sit amet tellus cras adipiscing enim eu turpis. Augue lacus viverra vitae congue eu consequat ac felis. Consectetur lorem donec massa sapien faucibus et molestie. Viverra adipiscing at in tellus integer. Elementum integer enim neque volutpat ac tincidunt.</p>
                                      <p>Venenatis urna cursus eget nunc scelerisque. Morbi tempus iaculis urna id volutpat lacus laoreet non. Adipiscing bibendum est ultricies integer quis auctor elit sed vulputate. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Massa tempor nec feugiat nisl pretium fusce id. Faucibus in ornare quam viverra orci. Pellentesque diam volutpat commodo sed. Purus semper eget duis at. Sit amet dictum sit amet. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui.</p>
                                    </Col>
                                  </Row>
                                </div>
                              </Accordion.Collapse>
                            </Card>
                          </Accordion>
                        ))
                      )}
                    </div>
                    <h5 className='strengths-header'>Your Growth Areas</h5>
                    <div style={{ margin: '20px 0px' }}>
                      {this.props.strengthsArr[2].Growth_Areas.length === 0 ? <li>[empty]</li> : (
                        this.props.strengthsArr[2].Growth_Areas.map((scale, index) => (
                          <Accordion>
                            <Card style={{ border: 'none' }}>
                              <Accordion.Toggle as={Button} variant="link" eventKey={index + 20} style={{ width: '100%', boxShadow: 'none', padding: '0' }}>
                                <Row>
                                  <Col xs={12} md={4} style={{ textAlign: 'right' }}>
                                    <span style={{ fontWeight: "400" }}>{scale.name}</span>
                                  </Col>
                                  <Col xs={12} md={8} style={{ margin: 'auto' }}>
                                    {scale.percentileScoreInitial ?
                                      <ProgressBar style={{position: 'relative'}}>
                                        <span style={{textAlign: 'center', position: 'absolute', width: `${scale.percentileScoreCurrent}%`, left: '0px', color: 'white', lineHeight: '1.25'}}>{`${scale.percentileScoreCurrent}%`}</span>
                                        <ProgressBar now={scale.percentileScoreInitial} />
                                        <ProgressBar animated variant='success' now={scale.percentileScoreCurrent - scale.percentileScoreInitial} />
                                      </ProgressBar>
                                      :
                                      <ProgressBar now={scale.percentileScoreCurrent} label={`${scale.percentileScoreCurrent}%`} />
                                    }
                                  </Col>
                                </Row>
                              </Accordion.Toggle>
                              <Accordion.Collapse eventKey={index + 20}>
                                <div>
                                  {scale.percentileScoreInitial ?
                                    <div>
                                      <Row>
                                        <Col xs={12} md={4} style={{ textAlign: 'right' }}>
                                          <span style={{ fontWeight: "400" }}>{`Initial`}</span>
                                        </Col>
                                        <Col xs={12} md={8} style={{ margin: 'auto' }}>
                                          <ProgressBar>
                                            <ProgressBar style={{backgroundColor: '#33AEFF'}} now={scale.percentileScoreInitial} label={`${scale.percentileScoreInitial}%`} />
                                          </ProgressBar>
                                        </Col>
                                      </Row>
                                      <Row>
                                        <Col xs={12} md={4} style={{ textAlign: 'right' }}>
                                          <span style={{ fontWeight: "400" }}>{`Progress`}</span>
                                        </Col>
                                        <Col xs={12} md={8} style={{ margin: 'auto' }}>
                                          <ProgressBar>
                                            <ProgressBar style={{backgroundColor: '#33AEFF'}} now={scale.percentileScoreCurrent} label={`${scale.percentileScoreCurrent}%`} />
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
                                      <h5>{scale.name}</h5>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Erat velit scelerisque in dictum non consectetur. In cursus turpis massa tincidunt dui ut ornare lectus sit. Scelerisque eu ultrices vitae auctor eu augue ut lectus. Quam nulla porttitor massa id neque. Tellus id interdum velit laoreet id donec ultrices. Eget nunc scelerisque viverra mauris. Pretium quam vulputate dignissim suspendisse in est. Vel facilisis volutpat est velit egestas dui id. Adipiscing bibendum est ultricies integer. Aliquam sem et tortor consequat id porta nibh venenatis cras. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Consectetur a erat nam at lectus. Ut tristique et egestas quis. Aliquet eget sit amet tellus cras adipiscing enim eu turpis. Augue lacus viverra vitae congue eu consequat ac felis. Consectetur lorem donec massa sapien faucibus et molestie. Viverra adipiscing at in tellus integer. Elementum integer enim neque volutpat ac tincidunt.</p>
                                      <p>Venenatis urna cursus eget nunc scelerisque. Morbi tempus iaculis urna id volutpat lacus laoreet non. Adipiscing bibendum est ultricies integer quis auctor elit sed vulputate. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Massa tempor nec feugiat nisl pretium fusce id. Faucibus in ornare quam viverra orci. Pellentesque diam volutpat commodo sed. Purus semper eget duis at. Sit amet dictum sit amet. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui.</p>
                                    </Col>
                                  </Row>
                                </div>
                              </Accordion.Collapse>
                            </Card>
                          </Accordion>
                        ))
                      )}
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          }
        </div>
      )
    }
  }
}

export default Scorecard;