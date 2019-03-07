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
  }
}