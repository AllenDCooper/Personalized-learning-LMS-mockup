import React, { Component } from 'react';
import ContentCard from '../ContentCard/ContentCard';

class MemoryUnit extends Component {

  render() {
    return (
      <ContentCard scoreName={this.props.score.name} scoreValue={this.props.score.value} index={this.props.index} />
    )
  }
}

export default MemoryUnit;