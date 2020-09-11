import React, { Component } from 'react';
import ContentCard from '../ContentCard/ContentCard';

class LearningUnit extends Component {

  render() {
    return (
      <ContentCard scoreName={this.props.score.name} scoreValue={this.props.score.value} index={this.props.index} />
    )
  }
}

export default LearningUnit;