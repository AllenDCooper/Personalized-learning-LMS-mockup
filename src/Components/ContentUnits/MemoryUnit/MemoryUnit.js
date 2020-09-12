import React, { Component } from 'react';
import ContentCard from '../../ContentCard/ContentCard';
import MemoryUnitActivities from './MemoryUnitActivities';

class MemoryUnit extends Component {

  state = {
    activitiesArr: MemoryUnitActivities,
    numActivitiesToDo: MemoryUnitActivities.length,
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

  saveCompletedGoal = () => {
    console.log(`saveCompletedGoal run`)
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
      <ContentCard scoreName={this.props.score.name} scoreValue={this.props.score.value} index={this.props.index} activitiesArr={this.state.activitiesArr} submitActivity={this.submitActivity} allActivitiesComplete={this.state.allActivitiesComplete} saveCompletedGoal={this.saveCompletedGoal} />
    )
  }
}

export default MemoryUnit;