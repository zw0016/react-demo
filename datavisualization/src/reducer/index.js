import { combineReducers } from 'redux';
import counterReducer from '../reducer/addNum'
import getNews from '../reducer/getNews'
//接收两个参数 
//第一个参数为state 
//另一个参数为 action 
//接受acition 并进行处理

// 通过combineReducers把多个reducer进行合并
const reducer = combineReducers({
    counter: counterReducer,
    getNews:getNews
  })
  
export default reducer;









