import React, { Component } from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

// React component
class Test extends Component {
  render() {
    const { value, onIncreaseClick } = this.props;
    return (
      <div>
        <span>{value}</span>
        <button onClick={onIncreaseClick}>Increase</button>
      </div>
    )
  }
}

// Action
const increaseAction = {type: 'increase'};

// Reducer
function counter(state = {count: 0}, action) {
  const count = state.count;
  switch(action.type) {
    case 'increase':
      return {count: count + 1};
      break;
    case 'decrease':
      return {count: count - 1};
      break;
    default:
      return state;
  }
}

// Store
const store = createStore(counter); // createStore参数为reducer

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    value: state.count
  };
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction)
  }
}

// Connected Component
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Test);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
