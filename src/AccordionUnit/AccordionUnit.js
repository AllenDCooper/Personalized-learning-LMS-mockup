import { Component } from 'react';
import { criticalThinkingUnit, motivationUnit, learningUnit, timeManagementUnit, readingUnit, noteTakingUnit, memoryUnit, testTakingUnit, commUnit, connectingUnit, healthUnit, planningUnit } from '../ContentUnits/ContentUnits';

class AccordionUnit extends Component {
  scoreSwitch = (score) => {
    console.log(score)
    switch (score) {
      case "criticalThinkingScore":
        return (
            criticalThinkingUnit()
        )
      case "motivationScore":
        return (
          motivationUnit()
        )
      case "learningScore":
        return (
          learningUnit()
        )
      case "timeManagementScore":
        return (
          timeManagementUnit()
        )
      case "readingScore":
        return (
          readingUnit()
        )
      case "noteTakingScore":
        return (
          noteTakingUnit()
        )
      case "memoryScore":
        return (
          memoryUnit()
        );
      case "testTakingScore":
        return (
          testTakingUnit()
        );
      case "commScore":
        return (
          commUnit()
        )
      case "connectingScore":
        return (
          connectingUnit()
        )
      case "healthScore":
        return (
          healthUnit()
        )
      case "planningScore":
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