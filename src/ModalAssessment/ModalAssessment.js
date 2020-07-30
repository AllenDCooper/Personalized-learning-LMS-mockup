import React, { Component } from 'react';
import { Modal, Button, Card, Form } from 'react-bootstrap';
import FormRadio from '../FormRadio/FormRadio'

class ModalAssessment extends Component {

  state = {
    show: false,
    setShow: false,
    item1: null,
    item2: null,
    item3: null,
    item4: null,
    item5: null,
    item6: null,
    item7: null,
    item8: null,
    item9: null,
    item10: null,
  }

  handleClose = () => {
    this.setState({
      show: false,
      setShow: false
    });
    console.log(this.state.setShow);
    alert(`Total Scores = ${JSON.stringify(this.state)}`)
  };

  handleShow = () => {
    this.setState({
      show: true,
      setShow: true
    });
    console.log(this.state.setShow);
  };

  updateScore = (event) => {
    const name = event.target.name;
    const value = event.target.value

    this.setState({
      [name]: value
    });

    const answerStr = JSON.stringify(this.state)
    console.log(`Updated state ${answerStr}`)
  }

  render() {
    return (
      <div>
        <Card variant="primary" onClick={this.handleShow}>
          <Card.Body>
            Self-Assessment
          </Card.Body>
        </Card>

        <Modal size="xl" show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Initial Self-Assessment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <FormRadio updateScore={this.updateScore} />
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Cancel
          </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Submit
          </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
};

export default ModalAssessment 