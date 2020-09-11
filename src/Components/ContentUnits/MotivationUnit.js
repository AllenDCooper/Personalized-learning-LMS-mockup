import React, { Component } from 'react';
import ContentCard from '../ContentCard/ContentCard';

class MotivationUnit extends Component {

  render() {
    return (
      <ContentCard scoreName={this.props.score.name} scoreValue={this.props.score.value} index={this.props.index} />
    )
  }
}

export default MotivationUnit;