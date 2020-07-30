import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class FormRadio extends Component {

  render() {

    var questionArr = ["I’m aware of my strengths and weaknesses as a student.", "I feel a sense of control over my academic performance.", "It’s important for me to understand how I learn.", "When I finish a reading, I take time to review what I’ve learned.", "I review my notes after class.", "I connect material I’m studying to things I already know.", "I’m comfortable with public speaking.", "I’m confident in my ability to decide among several career options.", "My grades are a reflection of my effort.", "I have preferences when it comes to thinking about and organizing information."];

    return (
      questionArr.map((item, index) => (
        <div key={`item-${index}`} style={{marginBottom: "30px"}}>
          <h6>{item}</h6>
          <Form.Check
            custom
            inline
            label="Strongly Agree"
            type="radio"
            id={`custom-inline-radio-1-${index}`}
            name={`custom-inline-radio-${index}`}
          />
          <Form.Check
            custom
            inline
            label="Agree"
            type="radio"
            id={`custom-inline-radio-2-${index}`}
            name={`custom-inline-radio-${index}`}
          />
          <Form.Check
            custom
            inline
            label="Somewhat Agree"
            type="radio"
            id={`custom-inline-radio-3-${index}`}
            name={`custom-inline-radio-${index}`}
          />
          <Form.Check
            custom
            inline
            label="Somewhat Disagree"
            type="radio"
            id={`custom-inline-radio-4-${index}`}
            name={`custom-inline-radio-${index}`}
          />
          <Form.Check
            custom
            inline
            label="Disagree"
            type="radio"
            id={`custom-inline-radio-5-${index}`}
            name={`custom-inline-radio-${index}`}
          />
          <Form.Check
            custom
            inline
            label="Strongly Disagree"
            type="radio"
            id={`custom-inline-radio-6-${index}`}
            name={`custom-inline-radio-${index}`}
          />
        </div>
      )
      ))
  }
};

export default FormRadio