import React, { Component } from 'react'

class Increment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 0
    };

    this.setNumber = this.setNumber.bind(this);
  }

  setNumber() {
    this.setState({
      data: this.state.data + 1
    });
  }

  render() {
    const numbers = this.props.numbers;
    const listItems = numbers.map((item,index) => {
      return (
        <li key={index}>{item}</li>
      )
    })
    return (
      <div className="cycle">
        {/* 来自于路径/cycle/123 */}
        <p>Params: {this.props.id}</p>
        {/* 来自于路径/cycle/123?abc=hello */}
        <p>query: abc = {this.props.query.abc}</p>
        <button onClick={this.setNumber}>INCREMENT</button>
        <Content myNumber={this.state.data} />
        <p>route numbers: </p>
        <ul>{listItems}</ul>
      </div>
    )
  }

}


// 组件挂载：将组件渲染，并构造DOM元素然后塞入页面的过程
// 组件更新：setState导致React重新渲染组件并把组件的变化应用到DOM元素上的过程
class Content extends Component {

  constructor(props) {
    super(props);
    // 初始化state
  }

  // 组件挂载开始之前，即组件调用render方法之前调用
  componentWillMount() {
    console.log('Component will mount!');
  }

  // 组件挂载完成之后，即DOM元素已经插入页面后调用
  componentDidMount() {
    console.log('Component did mount!');
  }

  // 组件对应的DOM元素从页面中删除之前调用
  componentWillUnmount() {
    console.log('Component will unmount!');
  }

  // 控制组件是否重新渲染，返回false则组件不会重新渲染
  // 这个生命周期在React性能优化上非常有用
  shouldComponentUpdate(newProps, newState) {
    return true;
  }

  // 组件从父组件接收到新的props之前调用
  componentWillReceiveProps(newProps) {
    console.log('Component will receive props!');
  }

  // 组件开始重新渲染之前调用
  componentWillUpdate(nextProps, nextState) {
    console.log('Component will update!');
  }

  // 组件重新渲染并且把更改变更新到真实DOM之后调用
  componentDidUpdate(prevProps, prevState) {
    console.log('Component did update!');
  }


  render() {
    return (
      <div>
        <h3>{this.props.myNumber}</h3>
      </div>
    )
  }

}

export default Increment