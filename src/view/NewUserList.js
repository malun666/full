import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UserListActionCreators } from '../actions/UserListAction';

function mapStateToProps(state) {
  return {
    UserList: state.UserList
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadUserList: () => dispatch(UserListActionCreators.LoadUserListAsyncAction())
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
            {
              this.props.UserList.map( (item, index) => <tr>
                <td>{ item.Id }</td>
                <td>{ item.UserName }</td>
                <td>{ item.Address }</td>
                <td>{ item.Phone }</td>
                <td>{ item.Del ? '是' : '否' }</td>
                <td>{ item.Remark }</td>
                <td>
                  <button className="button is-primary">编辑</button>
                </td>
              </tr>)
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