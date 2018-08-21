import React, { Component } from 'react'
import { IndexLink, Link } from 'react-router'
import './App.css'

// IndexLink会使用路径的精确匹配，链接到根路由/
// 使用Link组件的onlyActiveOnIndex属性，也能达到同样效果

export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <ul className="nav">
          <li>
            {/*<Link to="/" activeClassName="active" onlyActiveOnIndex={true}>Home</Link>*/}
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
          </li>
          <li>
            <Link to="/clock" activeClassName="active">Clock</Link>
          </li>
          <li>
            <Link to="/game" activeClassName="active">Game</Link>
          </li>
          <li>
            <Link to="/numbers" activeClassName="active">Numbers</Link>
          </li>
          <li>
            <Link to="/cycle/123" activeClassName="active">Cycle</Link>
          </li>
        </ul>
        {/* 渲染子组件 */}
        {this.props.children}
      </div>
    )
  }
}