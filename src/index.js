import './styles/normalize.scss'
import './styles/app.scss'

import React from 'react'
import { render } from 'react-dom'
import { Router, hashHistory } from 'react-router'

import routes from './routes'

// applyMiddleware作用是将左右中间件组成一个数组，依次执行
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import reducers from './js/reducers/'

// const store = createStore(reducers);

const loggerMiddleware = createLogger();

const middleware = [ thunkMiddleware ]; // 允许dispatch()函数
if (process.env.NODE_ENV !== 'production') {
  middleware.push(loggerMiddleware);  // 一个便捷的middleware，用于打印action日志
}

// redux-thunk中间件能够在action传递给reducer之前进行处理
const store = createStore(
  reducers,
  applyMiddleware(...middleware)
);

console.log(store.getState());

render(
  <Provider store={store}>
    <div className="app">
      <Router routes={routes} history={hashHistory} />
    </div>
  </Provider>,
  document.getElementById('app')
);



// import reducer from './js/reducers/counter'
// const store = createStore(reducer);
//
// import Counter from './js/components/Counter'
//
// const listener = () => render(
//   <Counter
//     counter={store.getState()}
//     onIncrement={() => store.dispatch({type: 'INCREMENT'})}
//     onDecrement={() => store.dispatch({type: 'DECREMENT'})}
//   />,
//   document.getElementById('app')
// );
//
// listener();
// store.subscribe(listener);


// action发出后，若想过段时间再执行reducer，属于异步操作，只能在发送action的这个步骤进行改动。使用中间件，对store.dispatch进行改造，在发出action和执行reducer这两步之间，添加其他功能。


// 异步操作至少送出两个action

// Action Creator动作生成器
// 普通的Action Creator返回一个对象，而此时需要返回一个函数，函数执行后，先发出一个action，进行异步操作，拿到结果后，再发出一个action.






// action是由store.dispatch方法发送的，正常情况下，这个方法参数只能是对象，不能是函数。这时，就要使用中间件redux-thunk，改造store.dispatch，使其可以接受函数作为参数。

