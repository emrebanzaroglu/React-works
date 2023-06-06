import React, { Component } from 'react'
import { increaseCounter } from '../redux/actions/counterAction'
import {Button } from "reactstrap";
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';


class IncreaseCounter extends Component {
  render() {
    return (
      <div>
        <Button
        
        color="success"
        onClick={(e) => this.props.dispatch(increaseCounter())}
        
        >
            Increase
        </Button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(increaseCounter, dispatch)}
}

export default connect(mapDispatchToProps)(IncreaseCounter);
