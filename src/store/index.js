import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';

// 创建Store: 组件中使用redux的统一入口。
// dispatch（action）
// subscribe(fn) 
// state: 状态，也就是数据。  state： count， num。
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;