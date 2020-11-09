import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from '../reducer/index'


export  const store= createStore(
    reducer,
    compose(
        applyMiddleware(...[thunk]), // 需要使用的中间件数组
      )
    )

