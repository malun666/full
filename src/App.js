import React, { Component } from 'react'
import { HashRouter as Router, Link, Route, Redirect, Switch } from 'react-router-dom';
import Login from './view/Login';
import Eempty from './view/Eempty';
import Home from './view/Home';
import 'antd/dist/antd.css';
class App extends Component {
  checkUserState() {
    // 判断用户是否已经登录
    if(sessionStorage.getItem('APP_LOGIN_USER')) {
      return true;
    }
    return false;
  }

  render () {
    return (
      <Router>
        <Switch>
          <Route path="/" exact render={ () => <Redirect to="/app"></Redirect> }></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/app" render={ (props) => {
            //校验用户是否已经登录
            if(this.checkUserState()) {
              return <Home {...props}></Home>
            }
            // 记录一下用户输入的地址。然后用户登录成功之后再跳转回此地址。
            sessionStorage.setItem('APP_LAST_URL', JSON.stringify(props.location));
            return <Redirect to="/login"></Redirect>
          }}></Route>
          <Route component={Eempty}></Route>
        </Switch>
      </Router>
    )
  }
}

export default App