import React, { Component } from 'react';
import { Modal, Button, Card, Form } from 'react-bootstrap';

class ModalAssessment extends Component {

  state = {
    show1: false,
    setShow1: false,
    show2: false,
    setShow2: false,
    show3: false,
    setShow3: false
  }

  handleCancel1 = () => {
    this.setState({
      show1: false,
      setShow1: false
    });
    console.log(this.state.setShow1);
    this.props.alertScore();
  };

  handleSubmit1 = () => {
    this.setState({
      show1: false,
      setShow1: false
    });
    console.log(this.state.setShow1);
    this.handleShow2()
  };

  handleShow1 = () => {
    this.setState({
      show1: true,
      setShow1: true
    });
    console.log(this.state.setShow1);
  };

  handleCancel2 = () => {
    this.setState({
      show2: false,
      setShow2: false
    });
    console.log(this.state.setShow2);
    this.props.alertScore();
  };

  handleSubmit2 = () => {
    this.setState({
      show2: false,
      setShow2: false
    });
    console.log(this.state.setShow2);
    this.props.alertScore();
    this.handleShow3()
  };

  handleShow2 = () => {
    this.setState({
      show2: true,
      setShow2: true
    });
    console.log(this.state.setShow2);
  };

  handleCancel3 = () => {
    this.setState({
      show3: false,
      setShow3: false
    });
    console.log(this.state.setShow3);
    this.props.alertScore();
  };

  handleSubmit3 = () => {
    this.setState({
      show3: false,
      setShow3: false
    });
    console.log(this.state.setShow3);
    this.props.alertScore();
  };

  handleShow3 = () => {
    this.setState({
      show3: true,
      setShow3: true
    });
    console.log(this.state.setShow3);
  };

  render() {

    const questionArr1 = [
      "I often complete assignments at the last minute.",
      "It’s hard to find time to focus on homework.",
      "I use my time well.",
      "I don’t manage my time as well as I could.",
      "I often find myself wondering where the time went.",
      "I frequently get distracted when I should be studying.",
      "Procrastination sometimes gets in the way of my success.",
    ]

    const questionArr2 = [
      "I review my notes after class.",
      "My notes are legible and well organized.",
      "I’m aware of several different note-taking styles.",
      "I can tell which information my instructors consider important.",
      "I always take notes in class.",
      "I have a note-taking system that works for me.",
      "I acquired note-taking skills in high school, in previous college classes, or on the job."
    ]

    const questionArr3 = [
      "I make friends easily.",
      "I make an effort to develop relationships with my instructors.",
      "I welcome the challenge of working on group assignments.",
      "I find it easy to understand other people’s feelings and motivations.",
      "I’m someone who gets involved in campus activities.",
      "I’m comfortable sharing my thoughts and advocating for myself.",
      "When speaking with someone, I’m aware of what my body language is communicating."
    ]

    return (
      <div>
        <Card variant="primary" onClick={this.handleShow1}>
          <Card.Body>
            Self-Assessment
          </Card.Body>
        </Card>

        <Modal size="xl" show={this.state.show1} onHide={this.handleCancel1}>
          <Modal.Header closeButton>
            <Modal.Title>Initial Self-Assessment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              {questionArr1.map((item, index) => (
                <div key={`item-${index + 1}`} style={{ marginBottom: "40px" }}>
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
              ))}
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleCancel1}>
              Cancel
          </Button>
            <Button variant="primary" onClick={this.handleSubmit1}>
              Next
          </Button>
          </Modal.Footer>
        </Modal>

        {/* Modal 2 */}
        <Modal size="xl" show={this.state.show2} onHide={this.handleCancel2}>
          <Modal.Header closeButton>
            <Modal.Title>Initial Self-Assessment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              {questionArr2.map((item, index) => (
                <div key={`item-${index + 8}`} style={{ marginBottom: "40px" }}>
                  <h6>{item}</h6>
                  <Form.Check
                    custom
                    inline
                    label="Strongly Agree"
                    type="radio"
                    id={`item-1-${index + 8}`}
                    name={`item${index + 8}`}
                    value="6"
                    onChange={this.props.updateScore}
                  />
                  <Form.Check
                    custom
                    inline
                    label="Agree"
                    type="radio"
                    id={`item-2-${index + 8}`}
                    name={`item${index + 8}`}
                    value="5"
                    onChange={this.props.updateScore}
                  />
                  <Form.Check
                    custom
                    inline
                    label="Somewhat Agree"
                    type="radio"
                    id={`item-3-${index + 8}`}
                    name={`item${index + 8}`}
                    value="4"
                    onChange={this.props.updateScore}
                  />
                  <Form.Check
                    custom
                    inline
                    label="Somewhat Disagree"
                    type="radio"
                    id={`item-4-${index + 8}`}
                    name={`item${index + 8}`}
                    value="3"
                    onChange={this.props.updateScore}
                  />
                  <Form.Check
                    custom
                    inline
                    label="Disagree"
                    type="radio"
                    id={`item-5-${index + 8}`}
                    name={`item${index + 8}`}
                    value="2"
                    onChange={this.props.updateScore}
                  />
                  <Form.Check
                    custom
                    inline
                    label="Strongly Disagree"
                    type="radio"
                    id={`item-6-${index + 8}`}
                    name={`item${index + 8}`}
                    value="1"
                    onChange={this.props.updateScore}
                  />
                </div>
              ))}
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleCancel2}>
              Cancel
          </Button>
            <Button variant="primary" onClick={this.handleSubmit2}>
              Next
          </Button>
          </Modal.Footer>
        </Modal>

        {/* Modal3 */}
        <Modal size="xl" show={this.state.show3} onHide={this.handleCancel3}>
          <Modal.Header closeButton>
            <Modal.Title>Initial Self-Assessment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              {questionArr3.map((item, index) => (
                <div key={`item-${index + 15}`} style={{ marginBottom: "40px" }}>
                  <h6>{item}</h6>
                  <Form.Check
                    custom
                    inline
                    label="Strongly Agree"
                    type="radio"
                    id={`item-1-${index + 15}`}
                    name={`item${index + 15}`}
                    value="6"
                    onChange={this.props.updateScore}
                  />
                  <Form.Check
                    custom
                    inline
                    label="Agree"
                    type="radio"
                    id={`item-2-${index + 15}`}
                    name={`item${index + 15}`}
                    value="5"
                    onChange={this.props.updateScore}
                  />
                  <Form.Check
                    custom
                    inline
                    label="Somewhat Agree"
                    type="radio"
                    id={`item-3-${index + 15}`}
                    name={`item${index + 15}`}
                    value="4"
                    onChange={this.props.updateScore}
                  />
                  <Form.Check
                    custom
                    inline
                    label="Somewhat Disagree"
                    type="radio"
                    id={`item-4-${index + 15}`}
                    name={`item${index + 15}`}
                    value="3"
                    onChange={this.props.updateScore}
                  />
                  <Form.Check
                    custom
                    inline
                    label="Disagree"
                    type="radio"
                    id={`item-5-${index + 15}`}
                    name={`item${index + 15}`}
                    value="2"
                    onChange={this.props.updateScore}
                  />
                  <Form.Check
                    custom
                    inline
                    label="Strongly Disagree"
                    type="radio"
                    id={`item-6-${index + 15}`}
                    name={`item${index + 15}`}
                    value="1"
                    onChange={this.props.updateScore}
                  />
                </div>
              ))}
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleCancel3}>
              Cancel
          </Button>
            <Button variant="primary" onClick={this.handleSubmit3}>
              Submit
          </Button>
          </Modal.Footer>
        </Modal>

      </div>
    );
  }
};

export default ModalAssessment 