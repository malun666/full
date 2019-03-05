import { createStore } from 'redux';

// Action: 对数据做的任何修改的类型。
// Action: 一个属性： type，是字符串一般要求大写，区分不同的动作。
// paylaod属性：是当前动作的数据。
export const ActionTypes = {
  ADD_NUM: 'ADD_NUM',
  MINUS_NUM: 'MINUS_NUM',
  REPLACE_NUM: 'REPLACE_NUM'
}

// 创建一个Action对象的辅助方法。
export const ActionCreators = {
  AddActionCreator(payload) {
    return {
      type: ActionTypes.ADD_NUM,
      payload
    }
  },
  MinusActionCreator(payload) {
    return {
      type: ActionTypes.MINUS_NUM,
      payload
    }
  },
  ReplaceActionCreator(payload) {
    return {
      type: ActionTypes.REPLACE_NUM,
      payload
    }
  }
}

//reducer:  唯一修改store中的数据的方法。接受两个参数：第一个参数之前的state状态，第二个参数 action。
function rootReducer(preState = 0, action) {
  //根据当前action的不同。对preState做一下修改或者做一些处理，然后返回一个新的状态。
  switch( action.type ) {
    case ActionTypes.ADD_NUM :
      return preState + action.payload;
    case ActionTypes.MINUS_NUM :
      return preState - action.payload;
    case ActionTypes.REPLACE_NUM :
      return action.payload;
    default :
      return preState;
  }
}

// 创建Store: 组件中使用redux的统一入口。
// dispatch（action）
// subscribe(fn) 
// state: 状态，也就是数据。  state： count， num。
const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;