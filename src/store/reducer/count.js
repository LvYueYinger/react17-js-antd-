/*
 * @Author: your name
 * @Date: 2021-04-13 14:39:36
 * @LastEditTime: 2021-04-13 14:40:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /new-react-learn/src/store/reducer/count.js
 */

const initialState = {
  count: 0,
};
export default function count(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}
