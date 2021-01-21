import React, { Component } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import AccordionScale from '../AccordionScale/AccordionScale';

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
          {/* <h4 className='tab-title'>
            My Strengths Report
          </h4> */}
          {this.props.spinnerOn ?
            <div style={{ marginBottom: "30px" }}>
              <Spinner animation="grow" role="status" variant="primary" style={{ marginLeft: "20px" }}>
                <span className="sr-only">Loading...</span>
              </Spinner>
              <span style={{ marginLeft: "10px" }}>Creating your strengths report...</span>
            </div>
            :
            <div style={{ marginBottom: "30px" }} >
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <Card>
                <Card.Body>
                  <h5 className='strengths-header'>My Strengths</h5>
                  <div style={{ margin: '20px 0px' }}>
                    {this.props.strengthsArr[0].Strengths.length === 0 ? <li>[empty]</li> : (
                      this.props.strengthsArr[0].Strengths.map((scale, index) => (
                        <AccordionScale scale={scale} index={index} level={'high'} />
                      ))
                    )}
                  </div>
                  <h5 className='strengths-header'>My Developing Strengths</h5>
                  <div style={{ margin: '20px 0px' }}>
                    {this.props.strengthsArr[1].Developing_Strengths.length === 0 ? <li>[empty]</li> : (
                      this.props.strengthsArr[1].Developing_Strengths.map((scale, index) => (
                        <AccordionScale scale={scale} index={index} level={'moderate'} />
                      ))
                    )}
                  </div>
                  <h5 className='strengths-header'>My Growth Areas</h5>
                  <div style={{ margin: '20px 0px' }}>
                    {this.props.strengthsArr[2].Growth_Areas.length === 0 ? <li>[empty]</li> : (
                      this.props.strengthsArr[2].Growth_Areas.map((scale, index) => (
                        <AccordionScale scale={scale} index={index} level={'low'} />
                      ))
                    )}
                  </div>
                </Card.Body>
              </Card>
            </div>
          }
        </div >
      )
  }
}
}

export default Scorecard;