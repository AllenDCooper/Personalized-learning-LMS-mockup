import React, { Component } from 'react';
import ContentCard from '../../ContentCard/ContentCard';
import CommUnitActivities from './CommUnitActivities';

class CommUnit extends Component {

  state = {
    activitiesArr: CommUnitActivities,
    numActivitiesToDo: CommUnitActivities.length,
    numActivitiesCompleted: 0,
    allActivitiesComplete: false,
    unitCompleted: false
  }

  closeActivity = () => {
    console.log(`closeActivity run`)
    this.setState({
      allActivitiesComplete: true
    })
  }

  submitActivity = (index) => {

    console.log(this.state.activitiesArr);

    this.setState(state => {
      const activitiesArr = state.activitiesArr;
      activitiesArr[index].completed = true;
      let numActivitiesCompleted = state.numActivitiesCompleted
      numActivitiesCompleted++
      return {
        activitiesArr,
        numActivitiesCompleted
      }
    },
      // callback function used to run closeActivity async (after state is updated)
      () => {
        if (this.state.numActivitiesToDo === this.state.numActivitiesCompleted) {
          this.closeActivity()
        }
      }
    )
  }

  render() {
    return (
      <ContentCard score={this.props.score} index={this.props.index} activitiesArr={this.state.activitiesArr} submitActivity={this.submitActivity} allActivitiesComplete={this.state.allActivitiesComplete} saveCompletedGoal={this.props.saveCompletedGoal} updateScore={this.props.updateScore} submitScore={this.props.submitScore} />
    )
  }
}

export default CommUnit;