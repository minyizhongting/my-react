import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './App'
import Home from './js/containers/App'
import Comment from './js/containers/Comment'
import Clock from './js/components/Clock'
import Game from './js/components/Game'
import Cycle from './js/components/Cycle'

// 注意，IndexRoute组件没有path属性，IndexRoute只有当父路由的所有其他子路由都没有激活时，才是父路由的this.props.children，并显示出来。

let routes = <Route path="/" component={App}>
  <IndexRoute component={Home} />
  <Route path="/comment" component={Comment} />
  <Route path="/clock" component={Clock} />
  <Route path="/game" component={Game} />
  {/* 若要将组件的props传递到子路由中，在子路由将this.props改为this.props.route */}
  <Route path="/cycle/:id" numbers={[1,2,3,4,5]} component={Cycle} />
</Route>;

export default routes;