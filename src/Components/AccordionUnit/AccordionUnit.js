import { Component } from 'react';
import { criticalThinkingUnit, motivationUnit, learningUnit, timeManagementUnit, readingUnit, noteTakingUnit, memoryUnit, testTakingUnit, commUnit, connectingUnit, healthUnit, planningUnit } from '../ContentUnits/ContentUnits'

class AccordionUnit extends Component {

  // this function will deliver the appropriate content unit for the particular scale passed in as props
  scoreSwitch = (score) => {
    console.log(score)
    switch (score.name) {
      case "Critical Thinking and Goal Setting":
        return (
            criticalThinkingUnit(score)
        )
      case "Motivation, Decision Making, and Personal Responsibility":
        return (
          motivationUnit(score)
        )
      case "Learning Preferences":
        return (
          learningUnit(score)
        )
      case "Organization and Time Management":
        return (
          timeManagementUnit(score)
        )
      case "Reading":
        return (
          readingUnit(score)
        )
      case "Note Taking":
        return (
          noteTakingUnit(score)
        )
      case "Memory and Studying":
        return (
          memoryUnit(score)
        );
      case "Test Taking":
        return (
          testTakingUnit(score)
        );
      case "Information Literacy and Communication":
        return (
          commUnit(score)
        )
      case "Connecting with Others":
        return (
          connectingUnit(score)
        )
      case "Personal and Financial Health":
        return (
          healthUnit(score)
        )
      case "Academic and Career Planning":
        return (
          planningUnit(score)
        )
      default:
        return (null);
    }
  }

  render() {
    console.log(this.props.score)
    return (this.scoreSwitch(this.props.score))
  }
};

export default AccordionUnit