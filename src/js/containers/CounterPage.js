import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Card } from '../components'
import Counter from '../components/Counter'
import {increment, decrement, getDataAction} from "../actions"

class CounterPage extends Component {
  constructor(props) {
    super(props);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrementAsy = this.handleIncrementAsy.bind(this);
  }

  handleIncrement() {
    if (this.props.onIncrement) {
      this.props.onIncrement();
    }
  }

  handleDecrement() {
    if (this.props.onDecrement) {
      this.props.onDecrement();
    }
  }

  handleIncrementAsy() {
    if (this.props.onIncrementAsy) {
      this.props.onIncrementAsy();
    }
  }

  render() {
    return (
      <Card>
        <Counter
          counter={this.props.counter}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onIncrementAsy={this.handleIncrementAsy}
        />
      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => {
      dispatch(increment());
    },
    onDecrement: () => {
      dispatch(decrement());
    },
    onIncrementAsy: () => {
      dispatch(getDataAction());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterPage)

