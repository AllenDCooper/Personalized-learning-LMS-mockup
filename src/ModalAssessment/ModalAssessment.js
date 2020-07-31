import React, { Component } from 'react';
import { Modal, Button, Card, Form } from 'react-bootstrap';

class ModalAssessment extends Component {

  state = {
    show1: false,
    setShow1: false,
    show2: false,
    setShow2: false,
    show3: false,
    setShow3: false,
    show4: false,
    setShow4: false,
    show5: false,
    setShow5: false,
    show6: false,
    setShow6: false,
    show7: false,
    setShow7: false,
    show8: false,
    setShow8: false,
    show9: false,
    setshow9: false
  }

  handleCancel1 = () => {
    this.setState({
      show1: false,
      setShow1: false
    });
    console.log(this.state.setShow1);
  };

  handleSubmit1 = () => {
    this.setState({
      show1: false,
      setShow1: false,
      show2: true,
      setShow2: true
    });
    console.log(this.state.setShow1);
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
  };

  handleSubmit2 = () => {
    this.setState({
      show2: false,
      setShow2: false,
      show3: true,
      setShow3: true
    });
    console.log(this.state.setShow2)
  };


  handleCancel3 = () => {
    this.setState({
      show3: false,
      setShow3: false
    });
    console.log(this.state.setShow3);
  };

  handleSubmit3 = () => {
    this.setState({
      show3: false,
      setShow3: false,
      show4: true,
      setShow4: true
    });
    console.log(this.state.setShow3);
  };

  handleCancel4 = () => {
    this.setState({
      show4: false,
      setShow4: false
    });
    console.log(this.state.setShow4);
  };

  handleSubmit4 = () => {
    this.setState({
      show4: false,
      setShow4: false,
      show5: true,
      setShow5: true
    });
    console.log(this.state.setShow4);
  };

  handleCancel5 = () => {
    this.setState({
      show5: false,
      setShow5: false
    });
    console.log(this.state.setShow5);
  };

  handleSubmit5 = () => {
    this.setState({
      show5: false,
      setShow5: false,
      show6: true,
      setShow6: true
    });
    console.log(this.state.setShow5);
  };

  handleCancel6 = () => {
    this.setState({
      show6: false,
      setShow6: false
    });
    console.log(this.state.setShow6);
  };

  handleSubmit6 = () => {
    this.setState({
      show6: false,
      setShow6: false,
      show7: true,
      setShow7: true
    });
    console.log(this.state.setShow6);
  };

  handleCancel7 = () => {
    this.setState({
      show7: false,
      setShow7: false
    });
    console.log(this.state.setShow7);
  };

  handleSubmit7 = () => {
    this.setState({
      show7: false,
      setShow7: false,
      show8: true,
      setShow8: true
    });
    console.log(this.state.setShow7);
  };

  handleCancel8 = () => {
    this.setState({
      show8: false,
      setShow8: false
    });
    console.log(this.state.setShow8);
  };

  handleSubmit8 = () => {
    this.setState({
      show8: false,
      setShow8: false,
      show9: true,
      setShow9: true
    });
    console.log(this.state.setShow8);
  };

  handleCancel9 = () => {
    this.setState({
      show9: false,
      setShow9: false
    });
    console.log(this.state.setShow9);
  };

  handleSubmit9 = () => {
    this.setState({
      show9: false,
      setShow9: false
    });
    console.log(this.state.setShow9);
    this.props.submitScore();
  };

  render() {

    const questionArr1 = [
      "I'm aware of my strengths and weaknesses as a student.",
      "I feel a sense of control over my academic performance.",
      "It's important for me to understand how I learn.",
      "When I finish a reading, I take time to review what I've learned.",
      "I review my notes after class.",
      "I connect material I'm studying to things I already know.",
      "I'm comfortable with public speaking.",
      "I'm confident in my ability to decide among several career options.",
      "My grades are a reflection of my effort.",
      "I have preferences when it comes to thinking about and organizing information."
    ]

    const questionArr2 = [
      "I often complete assignments at the last minute.",
      "Reading will be an important part of my future career.",
      "I make sure I know what material will be covered on tests.",
      "I make friends easily.",
      "I have a regular sleep schedule.",
      "I know how to gather information about possible careers.",
      "I'm in control of my future.",
      "My notes are legible and well organized.",
      "I'm confident that I can identify the most important information to study.",
      "I believe that I can develop the skills to be an effective writer."
    ]

    const questionArr3 = [
      "Declaring my college major makes me anxious.",
      "I haven't thought much about my learning preferences.",
      "It's hard to find time to focus on homework.",
      "I'm aware of several different note-taking styles.",
      "I use several approaches to preparing for my tests.",
      "I organize my thoughts and make a plan before beginning a writing assignment.",
      "I'm a healthy person.",
      "I find a sense of accomplishment to be very rewarding.",
      "The same strategies I use to learn material in class will be helpful in my career.",
      "I use my time well."
    ]

    const questionArr4 = [
      "I can tell which information my instructors consider important.",
      "I make an effort to develop relationships with my instructors.",
      "I know how to develop healthy relationships.",
      "I have a clear plan for completing my degree on time.",
      "When I have a large project to complete, I start by making a plan.",
      "I'm confident that I understand how to learn new material.",
      "I can identify the most important points in my readings.",
      "I always take notes in class.",
      "I schedule my study time in the same way that I schedule work and class.",
      "I view tests as a chance to demonstrate my knowledge."
    ]

    const questionArr5 = [
      "I welcome the challenge of working on group assignments.",
      "I eat three well-balanced meals each day.",
      "I gather information from multiple sources before making a decision.",
      "My grades are my responsibility.",
      "I've never thought about my approach to studying.",
      "I don't manage my time as well as I could.",
      "I use different reading strategies for different classes.",
      "I talk to my instructor before a test if there's something I don't understand.",
      "I enjoy writing.",
      "I find it easy to understand other people's feelings and motivations."
    ]

    const questionArr6 = [
      "I have a clear understanding of my career interests.",
      "I'm not sure why I learn better in some classes than in others.",
      "I often find myself wondering where the time went.",
      "When I come across a word I don't know, I almost always look it up.",
      "I have a note-taking system that works for me.",
      "When I make plans to study, I stick with them in spite of distractions.",
      "I'm someone who gets involved in campus activities.",
      "I exercise regularly.",
      "Sometimes I worry about my ability to select the right college major.",
      "I have both short-term and long-term goals.",
    ]

    const questionArr7 = [
      "I give up easily when I encounter trouble with an assignment.",
      "I'm aware of how I learn best.",
      "I frequently get distracted when I should be studying.",
      "I acquired note-taking skills in high school, in previous college classes, or on the job.",
      "I understand how memory works.",
      "I have strategies to manage my anxiety before an exam.",
      "I'm an active participant in class discussions.",
      "I'm aware of many resources available to help pay for college.",
      "Other people would describe me as goal directed.",
      "Once I start something, I see it through to the end even if there are obstacles."
    ]

    const questionArr8 = [
      "Procrastination sometimes gets in the way of my success.",
      "I'm confident in my reading skills.",
      "After a test, I evaluate the outcome and adjust my study approach as needed.",
      "I know how to develop an effective presentation.",
      "I'm comfortable sharing my thoughts and advocating for myself.",
      "I'm worried about registering for the right classes next term.",
      "I evaluate how much progress I've made toward achieving my goals.",
      "I find myself looking for excuses not to study.",
      "I adapt my learning style to meet the demands of the situation.",
      "I actively think about the main idea of each paragraph as I read.",
    ]

    const questionArr9 = [
      "I study in short increments of time throughout the week.",
      "The strategies I use to perform well on exams can help me in my current or future career.",
      "I'm aware of the writing resources available at my school.",
      "When speaking with someone, I'm aware of what my body language is communicating.",
      "I manage stress well."
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
                <div key={`item-${index + 11}`} style={{ marginBottom: "40px" }}>
                  <h6>{item}</h6>
                  <Form.Check
                    custom
                    inline
                    label="Strongly Agree"
                    type="radio"
                    id={`item-1-${index + 11}`}
                    name={`item${index + 11}`}
                    value="6"
                    onChange={this.props.updateScore}
                  />
                  <Form.Check
                    custom
                    inline
                    label="Agree"
                    type="radio"
                    id={`item-2-${index + 11}`}
                    name={`item${index + 11}`}
                    value="5"
                    onChange={this.props.updateScore}
                  />
                  <Form.Check
                    custom
                    inline
                    label="Somewhat Agree"
                    type="radio"
                    id={`item-3-${index + 11}`}
                    name={`item${index + 11}`}
                    value="4"
                    onChange={this.props.updateScore}
                  />
                  <Form.Check
                    custom
                    inline
                    label="Somewhat Disagree"
                    type="radio"
                    id={`item-4-${index + 11}`}
                    name={`item${index + 11}`}
                    value="3"
                    onChange={this.props.updateScore}
                  />
                  <Form.Check
                    custom
                    inline
                    label="Disagree"
                    type="radio"
                    id={`item-5-${index + 11}`}
                    name={`item${index + 11}`}
                    value="2"
                    onChange={this.props.updateScore}
                  />
                  <Form.Check
                    custom
                    inline
                    label="Strongly Disagree"
                    type="radio"
                    id={`item-6-${index + 11}`}
                    name={`item${index + 11}`}
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

        {/* Modal 3 */}
        <Modal size="xl" show={this.state.show3} onHide={this.handleCancel3}>
          <Modal.Header closeButton>
            <Modal.Title>Initial Self-Assessment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              {questionArr3.map((item, index) => (
                <div key={`item-${index + 21}`} style={{ marginBottom: "40px" }}>
                  <h6>{item}</h6>
                  <Form.Check
                    custom
                    inline
                    label="Strongly Agree"
                    type="radio"
                    id={`item-1-${index + 21}`}
                    name={`item${index + 21}`}
                    value="6"
                    onChange={this.props.updateScore}
                  />
                  <Form.Check
                    custom
                    inline
                    label="Agree"
                    type="radio"
                    id={`item-2-${index + 21}`}
                    name={`item${index + 21}`}
                    value="5"
                    onChange={this.props.updateScore}
                  />
                  <Form.Check
                    custom
                    inline
                    label="Somewhat Agree"
                    type="radio"
                    id={`item-3-${index + 21}`}
                    name={`item${index + 21}`}
                    value="4"
                    onChange={this.props.updateScore}
                  />
                  <Form.Check
                    custom
                    inline
                    label="Somewhat Disagree"
                    type="radio"
                    id={`item-4-${index + 21}`}
                    name={`item${index + 21}`}
                    value="3"
                    onChange={this.props.updateScore}
                  />
                  <Form.Check
                    custom
                    inline
                    label="Disagree"
                    type="radio"
                    id={`item-5-${index + 21}`}
                    name={`item${index + 21}`}
                    value="2"
                    onChange={this.props.updateScore}
                  />
                  <Form.Check
                    custom
                    inline
                    label="Strongly Disagree"
                    type="radio"
                    id={`item-6-${index + 21}`}
                    name={`item${index + 21}`}
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
              Next
          </Button>
          </Modal.Footer>
        </Modal>

        {/* Modal 4 */}
        <Modal size="xl" show={this.state.show4} onHide={this.handleCancel4}>
          <Modal.Header closeButton>
            <Modal.Title>Initial Self-Assessment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              {questionArr4.map((item, index) => (
                <div key={`item-${index + 31}`} style={{ marginBottom: "40px" }}>
                  <h6>{item}</h6>
                  <Form.Check
                    custom
                    inline
                    label="Strongly Agree"
                    type="radio"
                    id={`item-1-${index + 31}`}
                    name={`item${index + 31}`}
                    value="6"
                    onChange={this.props.updateScore}
                  />
                  <Form.Check
                    custom
                    inline
                    label="Agree"
                    type="radio"
                    id={`item-2-${index + 31}`}
                    name={`item${index + 31}`}
                    value="5"
                    onChange={this.props.updateScore}
                  />
                  <Form.Check
                    custom
                    inline
                    label="Somewhat Agree"
                    type="radio"
                    id={`item-3-${index + 31}`}
                    name={`item${index + 31}`}
                    value="4"
                    onChange={this.props.updateScore}
                  />
                  <Form.Check
                    custom
                    inline
                    label="Somewhat Disagree"
                    type="radio"
                    id={`item-4-${index + 31}`}
                    name={`item${index + 31}`}
                    value="3"
                    onChange={this.props.updateScore}
                  />
                  <Form.Check
                    custom
                    inline
                    label="Disagree"
                    type="radio"
                    id={`item-5-${index + 31}`}
                    name={`item${index + 31}`}
                    value="2"
                    onChange={this.props.updateScore}
                  />
                  <Form.Check
                    custom
                    inline
                    label="Strongly Disagree"
                    type="radio"
                    id={`item-6-${index + 31}`}
                    name={`item${index + 31}`}
                    value="1"
                    onChange={this.props.updateScore}
                  />
                </div>
              ))}
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleCancel4}>
              Cancel
          </Button>
            <Button variant="primary" onClick={this.handleSubmit4}>
              Next
          </Button>
          </Modal.Footer>
        </Modal>

        {/* Modal 5 */}
        <Modal size="xl" show={this.state.show5} onHide={this.handleCancel5}>
          <Modal.Header closeButton>
            <Modal.Title>Initial Self-Assessment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              {questionArr5.map((item, index) => (
                <div key={`item-${index + 41}`} style={{ marginBottom: "40px" }}>
                  <h6>{item}</h6>
                  <Form.Check
                    custom
                    inline
                    label="Strongly Agree"
                    type="radio"
                    id={`item-1-${index + 41}`}
                    name={`item${index + 41}`}
                    value="6"
                    onChange={this.props.updateScore}
                  />
                  <Form.Check
                    custom
                    inline
                    label="Agree"
                    type="radio"
                    id={`item-2-${index + 41}`}
                    name={`item${index + 41}`}
                    value="5"
                    onChange={this.props.updateScore}
                  />
                  <Form.Check
                    custom
                    inline
                    label="Somewhat Agree"
                    type="radio"
                    id={`item-3-${index + 41}`}
                    name={`item${index + 41}`}
                    value="4"
                    onChange={this.props.updateScore}
                  />
                  <Form.Check
                    custom
                    inline
                    label="Somewhat Disagree"
                    type="radio"
                    id={`item-4-${index + 41}`}
                    name={`item${index + 41}`}
                    value="3"
                    onChange={this.props.updateScore}
                  />
                  <Form.Check
                    custom
                    inline
                    label="Disagree"
                    type="radio"
                    id={`item-5-${index + 41}`}
                    name={`item${index + 41}`}
                    value="2"
                    onChange={this.props.updateScore}
                  />
                  <Form.Check
                    custom
                    inline
                    label="Strongly Disagree"
                    type="radio"
                    id={`item-6-${index + 41}`}
                    name={`item${index + 41}`}
                    value="1"
                    onChange={this.props.updateScore}
                  />
                </div>
              ))}
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleCancel5}>
              Cancel
          </Button>
            <Button variant="primary" onClick={this.handleSubmit5}>
              Next
          </Button>
          </Modal.Footer>
        </Modal>

        {/* Modal 6 */}
        <Modal size="xl" show={this.state.show6} onHide={this.handleCancel6}>
          <Modal.Header closeButton>
            <Modal.Title>Initial Self-Assessment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              {questionArr6.map((item, index) => (
                <div key={`item-${index + 51}`} style={{ marginBottom: "40px" }}>
                  <h6>{item}</h6>
                  <Form.Check
                    custom
                    inline
                    label="Strongly Agree"
                    type="radio"
                    id={`item-1-${index + 51}`}
                    name={`item${index + 51}`}
                    value="6"
                    onChange={this.props.updateScore}
                  />
                  <Form.Check
                    custom
                    inline
                    label="Agree"
                    type="radio"
                    id={`item-2-${index + 51}`}
                    name={`item${index + 51}`}
                    value="5"
                    onChange={this.props.updateScore}
                  />
                  <Form.Check
                    custom
                    inline
                    label="Somewhat Agree"
                    type="radio"
                    id={`item-3-${index + 51}`}
                    name={`item${index + 51}`}
                    value="4"
                    onChange={this.props.updateScore}
                  />
                  <Form.Check
                    custom
                    inline
                    label="Somewhat Disagree"
                    type="radio"
                    id={`item-4-${index + 51}`}
                    name={`item${index + 51}`}
                    value="3"
                    onChange={this.props.updateScore}
                  />
                  <Form.Check
                    custom
                    inline
                    label="Disagree"
                    type="radio"
                    id={`item-5-${index + 51}`}
                    name={`item${index + 51}`}
                    value="2"
                    onChange={this.props.updateScore}
                  />
                  <Form.Check
                    custom
                    inline
                    label="Strongly Disagree"
                    type="radio"
                    id={`item-6-${index + 51}`}
                    name={`item${index + 51}`}
                    value="1"
                    onChange={this.props.updateScore}
                  />
                </div>
              ))}
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleCancel6}>
              Cancel
          </Button>
            <Button variant="primary" onClick={this.handleSubmit6}>
              Next
          </Button>
          </Modal.Footer>
        </Modal>

        {/* Modal 7 */}
        <Modal size="xl" show={this.state.show7} onHide={this.handleCancel7}>
          <Modal.Header closeButton>
            <Modal.Title>Initial Self-Assessment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              {questionArr7.map((item, index) => (
                <div key={`item-${index + 61}`} style={{ marginBottom: "40px" }}>
                  <h6>{item}</h6>
                  <Form.Check
                    custom
                    inline
                    label="Strongly Agree"
                    type="radio"
                    id={`item-1-${index + 61}`}
                    name={`item${index + 61}`}
                    value="6"
                    onChange={this.props.updateScore}
                  />
                  <Form.Check
                    custom
                    inline
                    label="Agree"
                    type="radio"
                    id={`item-2-${index + 61}`}
                    name={`item${index + 61}`}
                    value="5"
                    onChange={this.props.updateScore}
                  />
                  <Form.Check
                    custom
                    inline
                    label="Somewhat Agree"
                    type="radio"
                    id={`item-3-${index + 61}`}
                    name={`item${index + 61}`}
                    value="4"
                    onChange={this.props.updateScore}
                  />
                  <Form.Check
                    custom
                    inline
                    label="Somewhat Disagree"
                    type="radio"
                    id={`item-4-${index + 61}`}
                    name={`item${index + 61}`}
                    value="3"
                    onChange={this.props.updateScore}
                  />
                  <Form.Check
                    custom
                    inline
                    label="Disagree"
                    type="radio"
                    id={`item-5-${index + 61}`}
                    name={`item${index + 61}`}
                    value="2"
                    onChange={this.props.updateScore}
                  />
                  <Form.Check
                    custom
                    inline
                    label="Strongly Disagree"
                    type="radio"
                    id={`item-6-${index + 61}`}
                    name={`item${index + 61}`}
                    value="1"
                    onChange={this.props.updateScore}
                  />
                </div>
              ))}
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleCancel7}>
              Cancel
          </Button>
            <Button variant="primary" onClick={this.handleSubmit7}>
              Next
          </Button>
          </Modal.Footer>
        </Modal>

        {/* Modal 8 */}
        <Modal size="xl" show={this.state.show8} onHide={this.handleCancel8}>
          <Modal.Header closeButton>
            <Modal.Title>Initial Self-Assessment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              {questionArr8.map((item, index) => (
                <div key={`item-${index + 71}`} style={{ marginBottom: "40px" }}>
                  <h6>{item}</h6>
                  <Form.Check
                    custom
                    inline
                    label="Strongly Agree"
                    type="radio"
                    id={`item-1-${index + 71}`}
                    name={`item${index + 71}`}
                    value="6"
                    onChange={this.props.updateScore}
                  />
                  <Form.Check
                    custom
                    inline
                    label="Agree"
                    type="radio"
                    id={`item-2-${index + 71}`}
                    name={`item${index + 71}`}
                    value="5"
                    onChange={this.props.updateScore}
                  />
                  <Form.Check
                    custom
                    inline
                    label="Somewhat Agree"
                    type="radio"
                    id={`item-3-${index + 71}`}
                    name={`item${index + 71}`}
                    value="4"
                    onChange={this.props.updateScore}
                  />
                  <Form.Check
                    custom
                    inline
                    label="Somewhat Disagree"
                    type="radio"
                    id={`item-4-${index + 71}`}
                    name={`item${index + 71}`}
                    value="3"
                    onChange={this.props.updateScore}
                  />
                  <Form.Check
                    custom
                    inline
                    label="Disagree"
                    type="radio"
                    id={`item-5-${index + 71}`}
                    name={`item${index + 71}`}
                    value="2"
                    onChange={this.props.updateScore}
                  />
                  <Form.Check
                    custom
                    inline
                    label="Strongly Disagree"
                    type="radio"
                    id={`item-6-${index + 71}`}
                    name={`item${index + 71}`}
                    value="1"
                    onChange={this.props.updateScore}
                  />
                </div>
              ))}
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleCancel8}>
              Cancel
          </Button>
            <Button variant="primary" onClick={this.handleSubmit8}>
              Next
          </Button>
          </Modal.Footer>
        </Modal>

        {/* Modal9 */}
        <Modal size="xl" show={this.state.show9} onHide={this.handleCancel9}>
          <Modal.Header closeButton>
            <Modal.Title>Initial Self-Assessment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              {questionArr9.map((item, index) => (
                <div key={`item-${index + 81}`} style={{ marginBottom: "40px" }}>
                  <h6>{item}</h6>
                  <Form.Check
                    custom
                    inline
                    label="Strongly Agree"
                    type="radio"
                    id={`item-1-${index + 81}`}
                    name={`item${index + 81}`}
                    value="6"
                    onChange={this.props.updateScore}
                  />
                  <Form.Check
                    custom
                    inline
                    label="Agree"
                    type="radio"
                    id={`item-2-${index + 81}`}
                    name={`item${index + 81}`}
                    value="5"
                    onChange={this.props.updateScore}
                  />
                  <Form.Check
                    custom
                    inline
                    label="Somewhat Agree"
                    type="radio"
                    id={`item-3-${index + 81}`}
                    name={`item${index + 81}`}
                    value="4"
                    onChange={this.props.updateScore}
                  />
                  <Form.Check
                    custom
                    inline
                    label="Somewhat Disagree"
                    type="radio"
                    id={`item-4-${index + 81}`}
                    name={`item${index + 81}`}
                    value="3"
                    onChange={this.props.updateScore}
                  />
                  <Form.Check
                    custom
                    inline
                    label="Disagree"
                    type="radio"
                    id={`item-5-${index + 81}`}
                    name={`item${index + 81}`}
                    value="2"
                    onChange={this.props.updateScore}
                  />
                  <Form.Check
                    custom
                    inline
                    label="Strongly Disagree"
                    type="radio"
                    id={`item-6-${index + 81}`}
                    name={`item${index + 81}`}
                    value="1"
                    onChange={this.props.updateScore}
                  />
                </div>
              ))}
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleCancel9}>
              Cancel
          </Button>
            <Button variant="primary" onClick={this.handleSubmit9}>
              Submit
          </Button>
          </Modal.Footer>
        </Modal>

      </div>
    );
  }
};

export default ModalAssessment 