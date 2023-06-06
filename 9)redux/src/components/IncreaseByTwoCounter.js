import React, { Component } from 'react'
import { increaseByTwoCounter } from '../redux/actions/counterAction'
import {Button } from "reactstrap";
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';

class IncreaseByTwoCounter extends Component {
  render() {
    return (
      <div>
        <Button
        
        color="success"
        onClick={(e) => this.props.dispatch(increaseByTwoCounter())}
        
        >
            Increase By Two
        </Button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(increaseByTwoCounter, dispatch)}
}

export default connect(mapDispatchToProps)(IncreaseByTwoCounter);
