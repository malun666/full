import React, { Component } from 'react'

class Login extends Component {
  loginClick = () => {
    //直接把用户校验完的信息，加入到sessionStoryage里去，然后跳转首页
    sessionStorage.setItem('APP_LOGIN_USER', JSON.stringify({Name: 'aicoder.com', pwd: '123'}));
    this.props.history.push('/app');
  }

  render () {
    return (
      <div>
        Login
        <hr/>
        <button 
          onClick={this.loginClick}
          className="button is-primary">登录</button>
      </div>
    )
  }
}

export default Login