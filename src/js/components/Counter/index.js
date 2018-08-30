import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props);
    this.incrementIfOdd = this.incrementIfOdd.bind(this);
    this.incrementAsync = this.incrementAsync.bind(this);
  }

  incrementIfOdd() {
    if (this.props.counter % 2 !== 0) {
      this.props.onIncrement();
    }
  }

  incrementAsync() {
    setTimeout(this.props.onIncrement, 1000);
  }

  render() {
    const { counter, onIncrement, onDecrement, onFetchData } = this.props;
    return (
      <div>
        <p>Clicked: {counter} times</p>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
        <button onClick={this.incrementIfOdd}>Increment if odd</button>
        <button onClick={this.incrementAsync}>Increment async</button>
        <button onClick={onFetchData}>FetchData</button>
      </div>
    )
  }

}


// 函数式组件，不能使用state的组件，鼓励少用state，尽量多用props
// 可以理解为，函数式组件就是一种只能接受props和提供render方法的类组件

// const Counter = ({counter, onIncrement, onDecrement}) => (
//   <div>
//     <p>Clicked: {counter} times</p>
//     <button onClick={onIncrement}>+</button>
//     <button onClick={onDecrement}>-</button>
//   </div>
// )

export default Counter;