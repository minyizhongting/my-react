import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Card } from '../components'
import Counter from '../components/Counter'
import {increment, decrement, fetchData } from "../actions"

class CounterPage extends Component {
  constructor(props) {
    super(props);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleFetchData = this.handleFetchData.bind(this);
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

  handleFetchData() {
    if (this.props.onFetchData) {
      this.props.onFetchData();
    }
  }

  render() {
    return (
      <Card>
        <Counter
          counter={this.props.counter}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onFetchData={this.handleFetchData}
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
    onFetchData: () => {
      dispatch(fetchData());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterPage)

