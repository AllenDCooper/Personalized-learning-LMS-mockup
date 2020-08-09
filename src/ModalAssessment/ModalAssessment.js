import React, { Component } from 'react';
import { Modal, Button, Card, Form } from 'react-bootstrap';
import itemsArr from '../itemsArr';
import FormCheck from '../FormCheck/FormCheck';

class ModalAssessment extends Component {

  state = {
    show: 0,
    setShow: 0,
    validated: false,
  }

  handleOpen = () => {
    this.setState({
      show: 1,
      setShow: 1
    })
  }

  setValidated = (boolean) => {
    this.setState({
      validated: boolean
    })
  }

  handleCancel = () => {
    this.setState({
      show: 0,
      setShow: 0
    })
  }

  handleSubmit = (event) => {
    // checks to see if all items are answered
    this.setValidated(false);
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      this.setValidated(true)
    } else {
      event.preventDefault();
      this.setValidated(true)

      // checks to see if it is the final modal of the assessment
      // if it is, it will run submitScore function
      // else it will advance to next modal
      const numPages = Math.ceil(itemsArr.length / 10)
      if (this.state.show === numPages) {
        this.props.submitScore();
        console.log("score submitted");
        this.setValidated(false)
      } else {
        this.setValidated(false)
        this.setState(state => {
          const show = state.show + 1;
          const setShow = state.setShow + 1;
          return {
            show,
            setShow
          };
        });
      }
    }
  }

  createChunkedArrays = (arr, size) => {
    const chunked_arr = [];
    let copied = [...arr];
    const numOfChildArr = Math.ceil(copied.length / size);
    for (let i = 0; i < numOfChildArr; i++) {
      chunked_arr.push(copied.splice(0, size));
    }
    return chunked_arr;
  }

  render() {
    console.log(this.state.validated);
    const chunkedArrays = this.createChunkedArrays(itemsArr, 10)
    return (
      <div>
        <Card variant="primary" onClick={this.handleOpen}>
          <Card.Body>
            Self-Assessment
          </Card.Body>
        </Card>
        {chunkedArrays.map((item, index) => (
          <Modal size="xl" show={this.state.show === (index + 1)} onHide={this.handleCancel}>
            <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
              <Modal.Header closeButton>
                <Modal.Title>Initial Self-Assessment</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <FormCheck itemsPageArr={item} updateScore={this.props.updateScore} pageNum={index} />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.props.randomScore}>
                  Random Score
              </Button>
                <Button variant="secondary" onClick={this.handleCancel}>
                  Cancel
          </Button>
                <Button variant="primary" type="submit">
                  Next
          </Button>
              </Modal.Footer>
            </Form>
          </Modal>
        ))
        }
      </div>
    )
  }
}

export default ModalAssessment 