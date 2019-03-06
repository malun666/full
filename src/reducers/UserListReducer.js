import { UserListActionTypes } from '../actions/UserListAction';

export default function  UserListReducer(preState = [], action) {
  switch(action.type) {
    case UserListActionTypes.LOAD_USERLIST:
      return action.payload;
    case UserListActionTypes.ADD_USER:
      return [...preState, action.payload]
    default :
      return preState;
  }
}