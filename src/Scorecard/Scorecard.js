import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

class Scorecard extends Component {

  render() {
    console.log(this.props.scoreArr)
    if (this.props.scoreArr.length === 0) {
      return (
        null
      )
    } else {
        return (
          <Jumbotron>
            <h3>Your Score:</h3>
            <ul>
              <li>Critical Thinking: {this.props.scoreArr[0]}</li>
              <li>Motivation and Decision Making: {this.props.scoreArr[1]}</li>
              <li>Learning Preferences: {this.props.scoreArr[2]}</li>
              <li>Organization and Time Management: {this.props.scoreArr[3]}</li>
              <li>Reading: {this.props.scoreArr[4]}</li>
              <li>Note Taking: {this.props.scoreArr[5]}</li>
              <li>Studying and Memory: {this.props.scoreArr[6]}</li>
              <li>Test Taking: {this.props.scoreArr[7]}</li>
              <li>Information Literacy and Commuication: {this.props.scoreArr[8]}</li>
              <li>Connecting with Others: {this.props.scoreArr[9]}</li>
              <li>Personal and Financial Health: {this.props.scoreArr[10]}</li>
              <li>Academic and Career Planning: {this.props.scoreArr[11]}</li>
            </ul>
          </Jumbotron>
        )
      }
    }
  }

  export default Scorecard;