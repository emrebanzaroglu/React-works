import React, { Component } from 'react'
import { multiplyByTwoCounter } from '../redux/actions/counterAction'
import {Button } from "reactstrap";
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';

class MultiplyCounter extends Component {
  render() {
    return (
      <div>
        <Button
        
        color="success"
        onClick={(e) => this.props.dispatch(multiplyByTwoCounter())}
        
        >
            Multiply By Two
        </Button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(multiplyByTwoCounter, dispatch)}
}

export default connect(mapDispatchToProps)(MultiplyCounter);
