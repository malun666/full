import React, { Component, Fragment } from 'react';
import { Popconfirm } from 'antd';
import { message } from 'antd';
class UserRow extends Component {
  
  state = {
    isEdit: false,
    EditUser: {...this.props.User}
  }

  hanlderChange = (e) => {
    this.setState({
      EditUser: {
        ...this.state.EditUser,
        [e.target.name]: e.target.type==='checkbox' ? e.target.checked : e.target.value
      }
    });
  }

  render() {
    let { User } = this.props;
    let { EditUser } = this.state;
    return (
      <tr>
        {
           this.state.isEdit ? 
             <Fragment>
              <td>{ User.Id }</td>
              <td> <input onChange={ this.hanlderChange } type="text" name="UserName" value={ EditUser.UserName } /></td>
              <td> <input onChange={ this.hanlderChange } type="text" name="Address" value={ EditUser.Address } /></td>
              <td> <input onChange={ this.hanlderChange } type="text" name="Phone" value={ EditUser.Phone } /></td>
              <td> 是否删除 <input onChange={ this.hanlderChange } type="checkbox" name="Del" checked={ EditUser.Del } /></td>
              <td> <input onChange={ this.hanlderChange } type="text" name="Remark" value={ EditUser.Remark } /></td>
              <td>
                <button className="button is-primary"
                  onClick={ () => this.props
                    .updateUser(EditUser) 
                    .then(res => {
                      message.info('修改成功！');
                      this.setState({isEdit: false});
                    })
                    .catch( () => {
                      message.error('修改异常，请重试！');
                    })
                  }
                >保存</button>
                &nbsp;
                <button className="button is-danger"
                  onClick={ () => this.setState({isEdit: false})}
                >取消</button>
              </td>
             </Fragment>
           :
            <Fragment>
              <td>{ User.Id }</td>
              <td>{ User.UserName }</td>
              <td>{ User.Address }</td>
              <td>{ User.Phone }</td>
              <td>{ User.Del ? '是' : '否' }</td>
              <td>{ User.Remark }</td>
              <td>
                <button 
                  onClick={ () => this.setState({isEdit: true})}
                  className="button is-primary">编辑</button>
                &nbsp;
                <Popconfirm 
                  title="您确认要删除吗？"
                  okText="删除"
                  cancelText="取消"
                  onConfirm={ () => this.props.delUser(User.Id) }
                >
                  <button className="button is-danger">删除</button>
                </Popconfirm>
              </td>
            </Fragment>
        }
      </tr>
    );
  }
}

export default UserRow;