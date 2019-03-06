import NumReducer from './NumReducer';
import UserListReducer from './UserListReducer';
import { combineReducers }  from 'redux';

const rootReducer = combineReducers({
  Num: NumReducer,
  UserList: UserListReducer
});

export default rootReducer;