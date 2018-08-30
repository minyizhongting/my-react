import React, { Component } from 'react'
import PropTypes from 'prop-types'

// context是把store存放到里面，让子组件connect时能够取到store
// 可以额外构建一个组件，让这个组件成为组件树的根节点，那么子组件都可以取到context了，这个组件就叫Provider。

export class Provider extends Component {
  static propTypes = {
    store: PropTypes.object,
    children: PropTypes.any
  }

  static childContextTypes = {
    store: PropTypes.object
  };

  getChildContext() {
    return {
      store: this.props.store
    }
  }

  render() {
    return (
      <div>{this.props.children}</div>
    )
  }
}

// Provider是一个容器组件，会把嵌入的内容原封不动作为子组件渲染出来，它还会把外界传给它的props.store放到context，这样子组件connect时都可以获取到。

// 总结
// 为了解决大量重复逻辑以及对context的依赖，通过使用高阶组件connect函数，把所有重复逻辑和对context的依赖放在connect函数里，让connect和context打交道，通过props把参数传给普通的组件。
// Provider作为组件的根节点，它会把store放在自己的context里面，好让子组件connect时都能够获取到。