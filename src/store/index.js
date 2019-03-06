import { createStore } from 'redux';
import rootReducer from '../reducers';

// 创建Store: 组件中使用redux的统一入口。
// dispatch（action）
// subscribe(fn) 
// state: 状态，也就是数据。  state： count， num。
const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;