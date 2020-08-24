import React, { Component } from 'react';
import { CriticalThinkingUnit, MotivationUnit, LearningUnit, TimeManagementUnit, ReadingUnit, NoteTakingUnit, MemoryUnit, TestTakingUnit, CommUnit, ConnectingUnit, HealthUnit, PlanningUnit } from '../ContentUnits'


class AccordionUnit extends Component {

  // this function will deliver the appropriate content unit for the particular scale passed in as props
  scoreSwitch = (score) => {
    console.log(score)
    switch (score.name) {
      case "Critical Thinking and Goal Setting":
        return (
          <CriticalThinkingUnit score={score} />
        )
      case "Motivation, Decision Making, and Personal Responsibility":
        return (
          <MotivationUnit score={score} />
        )
      case "Learning Preferences":
        return (
          <LearningUnit score={score} />
        )
      case "Organization and Time Management":
        return (
          <TimeManagementUnit score={score} />
        )
      case "Reading":
        return (
          <ReadingUnit score={score} />
        )
      case "Note Taking":
        return (
          <NoteTakingUnit score={score} />
        )
      case "Memory and Studying":
        return (
          <MemoryUnit score={score} />
        );
      case "Test Taking":
        return (
          <TestTakingUnit score={score} />
        );
      case "Information Literacy and Communication":
        return (
          <CommUnit score={score} />
        )
      case "Connecting with Others":
        return (
          <ConnectingUnit score={score} />
        )
      case "Personal and Financial Health":
        return (
          <HealthUnit score={score} />
        )
      case "Academic and Career Planning":
        return (
          <PlanningUnit score={score} />
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