import React, { Component } from 'react'

// 使用自定义组件时，可以在其中嵌套JSX结构，嵌套的结构在组件内部可以通过props.children获取到

class Card extends Component {
  render() {
    return (
      <div className="card-box">
        {this.props.children}
      </div>
    )
  }
}

export default Card