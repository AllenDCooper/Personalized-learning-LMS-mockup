import React, { Component } from 'react';
import ContentCard from '../../ContentCard/ContentCard';
import CommUnitActivities from './CommUnitActivities';

class CommUnit extends Component {

  state = {
    activitiesArr: CommUnitActivities,
    numActivitiesToDo: CommUnitActivities.length,
    numActivitiesCompleted: 0
  }

  closeActivity = () => {
    console.log(`closeActivity run`)
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
      <ContentCard scoreName={this.props.score.name} scoreValue={this.props.score.value} index={this.props.index} activitiesArr={this.state.activitiesArr} submitActivity={this.submitActivity} />
    )
  }
}

export default CommUnit;