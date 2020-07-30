import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class FormRadio extends Component {

  render() {

    var questionArr = ["I’m aware of my strengths and weaknesses as a student.", "I feel a sense of control over my academic performance.", "It’s important for me to understand how I learn.", "When I finish a reading, I take time to review what I’ve learned.", "I review my notes after class.", "I connect material I’m studying to things I already know.", "I’m comfortable with public speaking.", "I’m confident in my ability to decide among several career options.", "My grades are a reflection of my effort.", "I have preferences when it comes to thinking about and organizing information."];

    return (
      questionArr.map((item, index) => (
        <div key={`item-${index + 1}`} style={{marginBottom: "40px"}}>
          <h6>{item}</h6>
          <Form.Check
            custom
            inline
            label="Strongly Agree"
            type="radio"
            id={`item-1-${index + 1}`}
            name={`item${index + 1}`}
            value="6"
            onChange={this.props.updateScore}
          />
          <Form.Check
            custom
            inline
            label="Agree"
            type="radio"
            id={`item-2-${index + 1}`}
            name={`item${index + 1}`}
            value="5"
            onChange={this.props.updateScore}
          />
          <Form.Check
            custom
            inline
            label="Somewhat Agree"
            type="radio"
            id={`item-3-${index + 1}`}
            name={`item${index + 1}`}
            value="4"
            onChange={this.props.updateScore}
          />
          <Form.Check
            custom
            inline
            label="Somewhat Disagree"
            type="radio"
            id={`item-4-${index + 1}`}
            name={`item${index + 1}`}
            value="3"
            onChange={this.props.updateScore}
          />
          <Form.Check
            custom
            inline
            label="Disagree"
            type="radio"
            id={`item-5-${index + 1}`}
            name={`item${index + 1}`}
            value="2"
            onChange={this.props.updateScore}
          />
          <Form.Check
            custom
            inline
            label="Strongly Disagree"
            type="radio"
            id={`item-6-${index + 1}`}
            name={`item${index + 1}`}
            value="1"
            onChange={this.props.updateScore}
          />
        </div>
      )
      ))
  }
};

export default FormRadio