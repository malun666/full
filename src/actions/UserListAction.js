import axios from 'axios';
export const UserListActionTypes = {
  LOAD_USERLIST: 'LOAD_USERLIST',
  ADD_USER: 'ADD_USER',
  REMOVE_USER: 'REMOVE_USER',
  UPDATE_USER: 'UPDATE_USER'
}

export const UserListActionCreators = {
  // 直接把后台获取的用户的数据直接替换当前state中的UserList
  LoadUserListAction(payload) {
    return {
      type: UserListActionTypes.LOAD_USERLIST,
      payload
    }
  },
  LoadUserListAsyncAction() {
    return (dispatch, getState) => {
      axios.get('http://localhost:3009/userlist')
        .then(res => {
          dispatch(this.LoadUserListAction(res.data))
        });
    }
  },
  AddUserAction(payload) {
    return {
      type: UserListActionTypes.ADD_USER,
      payload
    }
  },
  RemoveUserAction(payload) {
    return {
      type: UserListActionTypes.REMOVE_USER,
      payload
    }
  },
  RemoveUserAsyncAction(payload) {
    return function (dispatch, getState) {
      return axios.delete('http://localhost:3009/userlist/'+ payload)
      .then(res => {
        // 提升删除成功！，把redux中的数据移除掉
        dispatch(UserListActionCreators.RemoveUserAction(payload));
      });
    }
  },
  UpdateUserAction(payload) {
    return {
      type: UserListActionTypes.UPDATE_USER,
      payload
    }
  },
  UpdateUserAsynAction(payload) {
    return (dispatch, getState) => {
      return axios
        .put('http://localhost:3009/userlist/'+ payload.Id, payload)
        .then(res => {
          // 修改redux里面的数据
          dispatch(this.UpdateUserAction(res.data));
        })
    }
  },
  AddUserAsynAction(payload) {
    return (dispatch, getState) => 
      axios.post('http://localhost:3009/userlist', payload)
      .then(res => dispatch(this.AddUserAction(res.data)))
  }
}