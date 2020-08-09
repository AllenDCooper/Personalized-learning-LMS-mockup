import React, { Component } from 'react';
import { Modal, Button, Card } from 'react-bootstrap';
import itemsArr from '../itemsArr';
import FormCheck from '../FormCheck/FormCheck';

class ModalAssessment extends Component {

  state = {
    show: 0,
    setShow: 0,
  }

  handleOpen = () => {
    this.setState({
      show: 1,
      setShow: 1
    })
  }

  handleCancel = () => {
    this.setState({
      show: 0,
      setShow: 0
    })
  }

  handleSubmit = () => {
    const numPages = Math.ceil(itemsArr.length / 10)
    if (this.state.show === numPages) {
      this.props.submitScore();
      console.log("score submitted");
    } else {
      this.setState(state => {
        const show = state.show + 1;
        const setShow = state.setShow + 1;

        return {
          show,
          setShow
        };
      });
    }
  };

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
    const chunkedArrays = this.createChunkedArrays(itemsArr, 10)
    return (
      <div>
        <Card variant="primary" onClick={this.handleOpen}>
          <Card.Body>
            Self-Assessment
          </Card.Body>
        </Card>
        {chunkedArrays.map((item, index) => (
          <Modal size="xl" show={this.state.show===(index+1)} onHide={this.handleCancel}>
          <Modal.Header closeButton>
            <Modal.Title>Initial Self-Assessment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
        {/* <h1>{index}</h1>
        <p>{JSON.stringify(item)}</p>
        {console.log(item)} */}
            <FormCheck itemsPageArr={item} updateScore={this.props.updateScore} pageNum={index}/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.randomScore}>
              Random Score
              </Button>
            <Button variant="secondary" onClick={this.handleCancel}>
              Cancel
          </Button>
            <Button variant="primary" onClick={this.handleSubmit}>
              Next
          </Button>
          </Modal.Footer>
        </Modal>
        ))}
      </div>
    )
  }
}

export default ModalAssessment 