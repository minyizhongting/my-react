import React, { Component } from 'react'
import { IndexLink } from 'react-router'

import NavLink from './NavLink'
import './index.scss'

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
            {/*<Link to="/comment" activeClassName="active">Comment</Link>*/}
            <NavLink to="/comment">Comment</NavLink>
          </li>
          <li>
            <NavLink to="/clock">Clock</NavLink>
          </li>
          <li>
            <NavLink to="/game">Game</NavLink>
          </li>
          <li>
            <NavLink to="/cycle/123">Cycle</NavLink>
          </li>
          <li>
            <NavLink to="/counter">Counter</NavLink>
          </li>
        </ul>
        {/* 渲染子组件 */}
        {this.props.children}
      </div>
    )
  }
}