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
    // 获取route传来的props
    const numbers = this.props.route.numbers;
    const listItems = numbers.map((item,index) => {
      return (
        <li key={index}>{item}</li>
      )
    });
    return (
      <div className="cycle">
        {/* 来自于路径/cycle/123 */}
        {/* 获取route中的:id */}
        <p>Params: {this.props.params.id}</p>
        {/* 来自于路径/cycle/123?abc=hello */}
        {/* 获取route中的query */}
        <p>query: abc = {this.props.location.query.abc}</p>
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
    console.log('%c 初始化调用: constructor()', 'color:green');
  }

  // 组件挂载开始之前，即组件调用render方法之前调用
  componentWillMount() {
    console.log('%c 完成首次渲染之前调用: componentWillMount()', 'color:green');
  }

  // 组件挂载完成之后，即DOM元素已经插入页面后调用
  componentDidMount() {
    console.log('%c 真实DOM渲染后调用: componentDidMount()', 'color:green');
  }

  // 组件对应的DOM元素从页面中删除之前调用
  componentWillUnmount() {
    console.log('%c 组件销毁前调用: componentWillUnmount()', 'color:green');
  }

  // 控制组件是否重新渲染，返回false则组件不会重新渲染
  // 这个生命周期在React性能优化上非常有用
  // 默认返回true，返回false则阻止render()调用，跳过后续生命周期方法
  shouldComponentUpdate(newProps, newState) {
    console.log('%c 渲染新的props或state调用: shouldComponentUpdate()', 'color:green');
    return true;
  }

  // 组件从父组件接收到新的props之前调用
  componentWillReceiveProps(newProps) {
    console.log('%c 组件接收到新的props时调用: componentWillReceiveProps()', 'color:green');
  }

  // 组件开始重新渲染之前调用
  componentWillUpdate(nextProps, nextState) {
    console.log('%c 接收到新的props或state后，进行渲染之前调用: componentWillUpdate()', 'color:green');
  }

  // 组件重新渲染并且把更改变更到真实的DOM之后调用
  componentDidUpdate(prevProps, prevState) {
    console.log('%c 完成渲染新的props或state后调用: componentDidUpdate()', 'color:green');
  }

  render() {
    console.log('%c 渲染时调用: render()', 'color:green');
    return (
      <div>
        <h3>{this.props.myNumber}</h3>
      </div>
    )
  }

}

export default Increment