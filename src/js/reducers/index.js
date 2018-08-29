import { combineReducers } from 'redux'

import comments from './comments'
import counter from './counter'

// combineReducers辅助函数的作用是，把一个由多个不同reducer函数作为value的object，合并成一个最终的reducer函数。

// 由combineReducers()返回的state对象，会将传入的每个reducer返回的state按其传递给combineReducers()时对应的key进行命名。

export default combineReducers({
  comments,
  counter
})

// {
//   comments: {},
//   counter: 0
// }