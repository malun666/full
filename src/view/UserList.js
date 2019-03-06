import React, { Component } from 'react'
import axios from 'axios';
import store from '../store';
import { UserListActionCreators } from '../actions/UserListAction';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserList: store.getState().UserList,
      unsubscribe: store.subscribe(() => {
        this.setState({
          UserList: store.getState().UserList
        })
      })
    };
  }
  componentWillUnmount() {
    this.state.unsubscribe(); // 移除监听 
  }

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
      <h3 className="title">用户列表</h3>
      <table className="table is-striped is-hoverable is-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>用户名</th>
            <th>地址</th>
            <th>电话</th>
            <th>是否删除</th>
            <th>备注</th>
          </tr>
        </thead>
        <tbody>
          { this.state.UserList.map( (item, index) => 
            <tr key={index}>
              <td>{ item.Id }</td>
              <td>{ item.UserName }</td>
              <td>{ item.Address }</td>
              <td>{ item.Phone }</td>
              <td>{ item.Del ? '是' : '否' }</td>
              <td>{ item.Remark }</td>
            </tr>
           )}
        </tbody>
      </table>
      </div>
    )
  }
}

export default UserList