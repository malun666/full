import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UserListActionCreators } from '../actions/UserListAction';
import UserRow from '../components/UserRow';
import AddUser from '../components/AddUser';

function mapStateToProps(state) {
  return {
    UserList: state.UserList
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadUserList: () => dispatch(UserListActionCreators.LoadUserListAsyncAction()),
    delUser: (id) => dispatch(UserListActionCreators.RemoveUserAsyncAction(id)),
    updateUser: (user) => dispatch(UserListActionCreators.UpdateUserAsynAction(user)),
    addUser: (user) => dispatch(UserListActionCreators.AddUserAsynAction(user))
  };
}

class NewUserList extends Component {
  constructor(props) {
    super(props);
    this.props.loadUserList();
  }
  render() {
    return (
      <div>
        <h3 className="title">用户列表</h3>
        <AddUser addUser={ this.props.addUser }></AddUser>
        <table className="table is-striped is-hoverable is-bordered is-fullwidth">
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
            {
              this.props.UserList.map( (item, index) => <UserRow updateUser={ this.props.updateUser } saveUser={ this.props.saveUser } delUser={ this.props.delUser } key={index} User={item}></UserRow>)
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewUserList);