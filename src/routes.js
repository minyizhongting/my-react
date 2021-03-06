import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'

import App from './js/components/App/index'

import HomePage from './js/components/HomePage'
import CommentPage from './js/containers/CommentPage'
import ClockPage from './js/components/ClockPage'
import GamePage from './js/components/GamePage'
import CyclePage from './js/components/CyclePage'
import CounterPage from './js/containers/CounterPage'

// 注意，IndexRoute组件没有path属性，IndexRoute只有当父路由的所有其他子路由都没有激活时，才是父路由的this.props.children，并显示出来。

let routes = <Route path="/" component={App}>
  <IndexRoute component={HomePage} />
  <Route path="/comment" component={CommentPage} />
  <Route path="/clock" component={ClockPage} />
  <Route path="/game" component={GamePage} />
  {/* 若要将组件的props传递到子路由中，在子路由将this.props改为this.props.route */}
  <Route path="/cycle/:id" numbers={[1,2,3,4,5]} component={CyclePage} />
  <Route path="/counter" component={CounterPage} />
  {/* 重定向 */}
  {/*<Redirect from="/redirect" to="/comment" />*/}
  {/* 每个路由都有Enter和Leave钩子，用户进入或离开该路由时触发 */}
  <Route path="/redirect" onEnter={
  ({params}, replace) => replace('/comment')
  } />
</Route>;

export default routes;