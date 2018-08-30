import React, { Component } from 'react'
import PropTypes from 'prop-types'

// context
// 某个组件向自己的context中放某些状态，这个组件之下的所有子组件都可以直接访问这个状态而不需要通过中间组件的传递。
// 一个组件的context只有它的子组件能够访问，它的父组件是不能访问的。

class Index extends Component {
  // 与propTypes验证组件props参数类似，它是验证getChildContext返回的对象
  static childContextTypes = {
    themeColor: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = { themeColor: 'red' };
  }

  // 设置context的过程，它返回的对象就是子树的context
  getChildContext() {
    return { theme: this.state.themeColor };
  }

  render() {
    return (
      <div></div>
    )
  }
}

// 若一个组件设置了context，那么它的子组件都可以直接访问到里面的内容，就像这个组件为根的子树的全局变量。
// 任意深度的子组件都可以通过contextTypes来声明想要的context里面的哪些状态，然后通过this.context访问到那些状态。

class Title extends Component {
  // 子组件若要获取context里的内容，必须写contextTypes来声明和验证需要获取的状态的类型。
  static contextTypes = {
    themeColor: PropTypes.string
  };
  // 声明后，就可以通过this.context.themeColor获取在Index放置的值为red的themeColor
  render() {
    return (
      <div style={{color: this.context.themeColor}}>haha</div>
    )
  }
}

// context打破了组件和组件之间通过props传递数据的规范，极大增强了组件之间的耦合性。第三方库(例如Redux)就是利用这种机制提供了便利的状态管理服务。一般我们不手动写context，也不要用它，只需使用第三方的应用状态管理库即可。

