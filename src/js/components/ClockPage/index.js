import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'

import Card from '../Card'

class Clock extends Component {
  constructor(props) {
    // 构造函数是唯一能够初始化this.state的地方，其他更新应当使用setState()
    super(props);
    this.state = {
      date: new Date(),
      isToggleOn: true,
      isLoggedIn: false
    };

    // 类的方法默认是不会绑定this的
    this.handleClick = this.handleClick.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);

  }

  componentWillMount() {
    this.timer = setInterval(() => {
      this.tick();
    }, 1000);
  }


  // React中基本不需要和DOM打交道。其提供了一系列的on*方法帮助我们进行事件监听。但不能完全满足所有DOM操作需求。
  // React提供了ref属性来帮助获取已经挂载的元素的DOM节点。
  // ref属性值是一个函数，
  componentDidMount() {
    // 当组件加载到页面上之后(mounted)
    // 1. 可以通过react-dom提供的findDOMNode()方法拿到组件对应的DOM元素。
    // 2. 也可以通过在要引用的DOM元素上设置一个ref属性指定名称，通过this.refs.name来访问对应DOM元素。
    const el = findDOMNode(this);
    console.log(el);
    console.log(this.refs.clock);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({ // 更新组件局部状态
      date: new Date()
    });
  }

  // 状态更新若是异步的，使用setState()来接收一个函数的形式，第一个参数为接收前的状态作为第一个参数，此次更新时被应用时的props作为第二个参数
  // this.setState((prevState, props) => ({
  //   date: prevState.date + props.increment
  // }));

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  // 若不想在构造函数中bind，还可以使用属性初始化器语法
  // handleClick = () => {
  //   console.log('this is', this);
  // }


  handleLoginClick() {
    this.setState({
      isLoggedIn: true
    });
  }

  handleLogoutClick() {
    this.setState({
      isLoggedIn: false
    })
  }


  render() {

    const isLoggedIn = this.state.isLoggedIn;
    let button = null;
    if (isLoggedIn) {
      button = <button onClick={this.handleLogoutClick}>Logout</button>;
    } else {
      button = <button onClick={this.handleLoginClick}>Login</button>
    }

    return (
      <Card>
        <div ref="clock">
          <p>It is {this.state.date.toLocaleDateString()} {this.state.date.toLocaleTimeString()}.</p>
          <hr /><br />
          {/*<button onClick={(e) => {this.handleClick(e)}}>Click me</button>*/}
          <button onClick={this.handleClick}>Click me</button>
          <p>{this.state.isToggleOn ? 'ON': 'OFF'}</p>
          <hr /><br />
          <Greeting isLoggedIn={isLoggedIn} />
          {button}
        </div>
      </Card>
    )
  }
}

class Greeting extends Component {
  render() {
    if (this.props.isLoggedIn) {
      return (
        <p>Welcome back!</p>
      );
    } else {
      return (
        <p>Please login.</p>
      )
    }
  }
}

// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <p>Welcome back!</p>;
//   } else {
//     return <p>Please login.</p>;
//   }
// }


export default Clock