/*
 * @Author: your name
 * @Date: 2021-04-13 14:38:56
 * @LastEditTime: 2021-04-13 14:39:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /new-react-learn/src/store/reducer/index.js
 */
import { combineReducers } from 'redux';
import count from './count';

export default combineReducers({
  countReducer: count,
});
