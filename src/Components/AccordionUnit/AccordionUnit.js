import { Component } from 'react';
import { criticalThinkingUnit, motivationUnit, learningUnit, timeManagementUnit, readingUnit, noteTakingUnit, memoryUnit, testTakingUnit, commUnit, connectingUnit, healthUnit, planningUnit } from '../ContentUnits/ContentUnits'

class AccordionUnit extends Component {
  scoreSwitch = (score) => {
    console.log(score)
    switch (score) {
      case "Critical Thinking and Goal Setting":
        return (
            criticalThinkingUnit()
        )
      case "Motivation, Decision Making, and Personal Responsibility":
        return (
          motivationUnit()
        )
      case "Learning Preferences":
        return (
          learningUnit()
        )
      case "Organization and Time Management":
        return (
          timeManagementUnit()
        )
      case "Reading":
        return (
          readingUnit()
        )
      case "Note Taking":
        return (
          noteTakingUnit()
        )
      case "Memory and Studying":
        return (
          memoryUnit()
        );
      case "Test Taking":
        return (
          testTakingUnit()
        );
      case "Information Literacy and Communication":
        return (
          commUnit()
        )
      case "Connecting with Others":
        return (
          connectingUnit()
        )
      case "Personal and Financial Health":
        return (
          healthUnit()
        )
      case "Academic and Career Planning":
        return (
          planningUnit()
        )
      default:
        return (null);
    }
  }

  render() {
    console.log(this.props.score)
    return (this.scoreSwitch(this.props.score.name))
  }
};

export default AccordionUnit