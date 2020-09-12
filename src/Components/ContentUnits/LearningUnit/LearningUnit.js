import React, { Component } from 'react';
import ContentCard from '../../ContentCard/ContentCard';
import LearningUnitActivities from './LearningUnitActivities';

class LearningUnit extends Component {

  state = {
    activitiesArr: LearningUnitActivities,
    numActivitiesToDo: LearningUnitActivities.length,
    numActivitiesCompleted: 0
  }

  closeActivity = () => {
    console.log(`closeActivity run`)
  }

  submitActivity = (index) => {

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
      <ContentCard scoreName={this.props.score.name} scoreValue={this.props.score.value} index={this.props.index} activitiesArr={this.state.activitiesArr} submitActivity={this.submitActivity} />
    )
  }
}

export default LearningUnit;