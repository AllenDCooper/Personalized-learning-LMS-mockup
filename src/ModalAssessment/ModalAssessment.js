import React, { Component } from 'react';
import { Modal, Button, Card } from 'react-bootstrap';

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

        <Modal size="lg" show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
          </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
          </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
};

export default ModalAssessment 