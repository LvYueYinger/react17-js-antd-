/*
 * @Author: your name
 * @Date: 2021-04-13 14:33:30
 * @LastEditTime: 2021-04-13 14:46:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /new-react-learn/src/store/index.js
 */
import { createStore } from 'redux';
import rootReducer from './reducer';

const store = createStore(
  rootReducer /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
