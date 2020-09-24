import React, { Component } from 'react';
import { CriticalThinkingUnit, MotivationUnit, LearningUnit, TimeManagementUnit, ReadingUnit, NoteTakingUnit, MemoryUnit, TestTakingUnit, CommUnit, ConnectingUnit, HealthUnit, PlanningUnit } from '../ContentUnits'


class AccordionUnit extends Component {

  // this function will deliver the appropriate content unit for the particular scale passed in as props
  scoreSwitch = (score) => {
    console.log(score)
    switch (score.name) {
      case "Critical Thinking and Goal Setting":
        return (
          <CriticalThinkingUnit score={score} index={1} saveCompletedGoal={this.props.saveCompletedGoal} updateScore={this.props.updateScore} submitScore={this.props.submitScore} />
        )
      case "Motivation, Decision Making, and Personal Responsibility":
        return (
          <MotivationUnit score={score} index={2} saveCompletedGoal={this.props.saveCompletedGoal} updateScore={this.props.updateScore} submitScore={this.props.submitScore} />
        )
      case "Learning Preferences":
        return (
          <LearningUnit score={score} index={3} saveCompletedGoal={this.props.saveCompletedGoal} updateScore={this.props.updateScore} submitScore={this.props.submitScore} />
        )
      case "Organization and Time Management":
        return (
          <TimeManagementUnit score={score} index={4} saveCompletedGoal={this.props.saveCompletedGoal} updateScore={this.props.updateScore} submitScore={this.props.submitScore} />
        )
      case "Reading":
        return (
          <ReadingUnit score={score} index={5} saveCompletedGoal={this.props.saveCompletedGoal}  updateScore={this.props.updateScore} submitScore={this.props.submitScore} />
        )
      case "Note Taking":
        return (
          <NoteTakingUnit score={score} index={6} saveCompletedGoal={this.props.saveCompletedGoal} updateScore={this.props.updateScore} submitScore={this.props.submitScore} />
        )
      case "Memory and Studying":
        return (
          <MemoryUnit score={score} index={7} saveCompletedGoal={this.props.saveCompletedGoal} updateScore={this.props.updateScore} submitScore={this.props.submitScore} />
        );
      case "Test Taking":
        return (
          <TestTakingUnit score={score} index={8} saveCompletedGoal={this.props.saveCompletedGoal} updateScore={this.props.updateScore} submitScore={this.props.submitScore} />
        );
      case "Information Literacy and Communication":
        return (
          <CommUnit score={score} index={9} saveCompletedGoal={this.props.saveCompletedGoal} updateScore={this.props.updateScore} submitScore={this.props.submitScore} />
        )
      case "Connecting with Others":
        return (
          <ConnectingUnit score={score} index={10} saveCompletedGoal={this.props.saveCompletedGoal} updateScore={this.props.updateScore} submitScore={this.props.submitScore} />
        )
      case "Personal and Financial Health":
        return (
          <HealthUnit score={score} index={11} saveCompletedGoal={this.props.saveCompletedGoal} updateScore={this.props.updateScore} submitScore={this.props.submitScore} />
        )
      case "Academic and Career Planning":
        return (
          <PlanningUnit score={score} index={12} saveCompletedGoal={this.props.saveCompletedGoal} updateScore={this.props.updateScore} submitScore={this.props.submitScore} />
        )
      default:
        return (null);
    }
  }

  render() {
    // console.log(this.props.score)
    // console.log(this.props)
    return (this.scoreSwitch(this.props.score))
  }
};

export default AccordionUnit