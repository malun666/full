import React, { Component } from 'react'
import axios from 'axios';
import store from '../store';
import { UserListActionCreators } from '../actions/UserListAction';

class UserList extends Component {

  componentDidMount() {
    // 加载数据
    axios.get('http://yapi.demo.qunar.com/mock/7378/api/userlist')
      .then(res => {
        // 放到store.state里面去。
        console.log(res.data)
        // 向store发送一个action，加载用户数据
        store.dispatch(UserListActionCreators.LoadUserListAction(res.data.data.userlist))
      }); 
  }

  render () {
    return (
      <div>
        uselist
      </div>
    )
  }
}

export default UserList