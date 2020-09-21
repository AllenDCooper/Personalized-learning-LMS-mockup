import React, { Component } from 'react';
import { Modal, Button, Card, Form } from 'react-bootstrap';
import itemsArr from '../../ACES_Assessment/itemsArr';
import FormCheckReassessment from '../FormCheckReassessment/FormCheckReassessment';
import scales from '../../ACES_Assessment/scales';

class ModalReassessment extends Component {

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
      this.props.submitScore();
      this.props.saveCompletedGoal(this.props.score);
      console.log("score submitted");
      this.setValidated(false)
    }
  }

  // function to retrieve item indexes for the particular scale
  getItemIndexes = (scaleName) => {
    console.log(scaleName)
    const itemArr = scales.filter(scale => (scale.name === scaleName));
    console.log(itemArr)
    console.log(itemArr[0].itemIndexes);
    return itemArr[0].itemIndexes
  }

  getItemsArr = (itemIndexesArr) => {
    let scaleItems = [];
    itemIndexesArr.forEach(index => {
      const itemObj = {itemIndex: index, itemText: itemsArr[index].itemText}
      scaleItems.push(itemObj)
    });
    console.log(`scaleItems: ${scaleItems}`)
    return scaleItems
  }


  // function that takes an array and breaks it down into smaller arrays limited to 10 items each
  createChunkedArrays = (arr, size) => {
    const chunked_arr = [];
    let copied = [...arr];
    const numOfChildArr = Math.ceil(copied.length / size);
    for (let i = 0; i < numOfChildArr; i++) {
      chunked_arr.push(copied.splice(0, size));
    }
    return chunked_arr
  }

  // render function dynamically creates forms for each chunked array
  render() {
    console.log(this.state.validated);
    console.log(this.props.score);

    // need item index and item text for each item in the array, e.g. {itemIndex: 33, itemText: ""}
    return (
      <div>
        <Card variant="primary" onClick={this.handleOpen}>
          <Card.Body>
            Self-Reassessment
          </Card.Body>
        </Card>
        <Modal size="xl" key={`key-0`} show={this.state.show === 1} onHide={this.handleCancel}>
          <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
            <Modal.Header closeButton>
              <Modal.Title>Self-Reassessment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <FormCheckReassessment updateScore={this.props.updateScore} itemsArr={this.getItemsArr(this.getItemIndexes(this.props.scaleName))} />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleCancel}>
                Cancel
                </Button>
              <Button variant="primary" type="submit">
                Submit
                </Button>
            </Modal.Footer>
          </Form>
        </Modal>
        ))
      </div>
    )
  }
}

export default ModalReassessment 