import React, { Component } from 'react';
import { Modal, Button, Card, Form } from 'react-bootstrap';
import FormRadio from '../FormRadio/FormRadio'

class ModalAssessment extends Component {

  state = {
    show: false,
    setShow: false
  }

  handleClose = () => {
    this.setState({
      show: false,
      setShow: false
    });
    console.log(this.state.setShow);
  };

  handleShow = () => {
    this.setState({
      show: true,
      setShow: true
    });
    console.log(this.state.setShow);
  };

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
              <FormRadio />
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