import React, { Component } from 'react'
import { Modal } from 'antd';

class AddUser extends Component {
  state = {
    visible: false,
    UserName: '',
    Phone: '',
    Address: '',
    Remark: ''
  }

  handlerChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render () {
    return (
      <div>
        <button
          onClick={ () => this.setState({visible: true}) }
         className="button is-warning">添加</button>
        <Modal
          title="添加用户"
          okText="添加"
          cancelText="取消"
          visible={ this.state.visible }
          onCancel={ () => this.setState({visible: false})}
        >
          <table className="table is-fullwidth">
            <tbody>
              <tr>
                <td>用户名</td>
                <td>
                  <input type="text" name="UserName" onChange={ this.handlerChange } value={ this.state.UserName }/>
                </td>
              </tr>
              <tr>
                <td>地址</td>
                <td>
                  <input type="text" name="Address" onChange={ this.handlerChange } value={ this.state.Address }/>
                </td>
              </tr>
              <tr>
                <td>电话</td>
                <td>
                  <input type="text" name="Phone" onChange={ this.handlerChange } value={ this.state.Phone }/>
                </td>
              </tr>
              <tr>
                <td>备注</td>
                <td>
                  <textarea type="text" name="Remark" onChange={ this.handlerChange } value={ this.state.Remark }>
                  </textarea>
                </td>
              </tr>
            </tbody>
          </table>
        </Modal>
      </div>
    )
  }
}

export default AddUser