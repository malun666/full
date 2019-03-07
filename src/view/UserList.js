import React, { Component } from 'react'
import axios from 'axios';
import store from '../store';
import { UserListActionCreators } from '../actions/UserListAction';
import { Popconfirm, message } from 'antd';

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
    axios.get('http://localhost:3009/userlist')
      .then(res => {
        // 放到store.state里面去。
        console.log(res.data)
        // 向store发送一个action，加载用户数据
        store.dispatch(UserListActionCreators.LoadUserListAction(res.data))
      }); 
  }

  delUser = (id) => {
    store.dispatch(UserListActionCreators.RemoveUserAsyncAction(id))
      .then(res => {
        message.info('删除成功！');
      })
      .catch( () => {
        message.error('删除失败！请重试！');
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
            <th>编辑</th>
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
              <td>
                <button className="button is-primary">编辑</button>
                &nbsp;
                <Popconfirm title="您确认要删除吗？" okText="删除" cancelText="取消" onConfirm={ () => this.delUser(item.Id) }>
                  <button 
                    className="button is-danger">删除</button>
                </Popconfirm>
              </td>
            </tr>
           )}
        </tbody>
      </table>
      </div>
    )
  }
}

export default UserList