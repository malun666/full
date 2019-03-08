import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom';
import Logo from '../assets/logo.png';
import About from './About';
import Product from './Product';
import Count from './Count';
import UserList from './UserList';
import NewCount from './NewCount';
import store from '../store';
import NewUserList from './NewUserList';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Num: store.getState().Num
    }

    store.subscribe(() => {
      this.setState({ Num: store.getState().Num })
    })
  }
  logout = () => {
    // 清楚sessionStorage里面的用户登录的信息。
    sessionStorage.clear();
    this.props.history.push('/login');
  }

  render () {
    let { match } = this.props;
    return (
      <div>
        {/* 网站顶部导航 */}
        <nav className="navbar">
          <div className="navbar-band">
            <Link to="/app"><img src={Logo} alt="aicoder.com官网" width="130" title="有利于网站的SEO" /></Link>
          </div>
          <div className="navbar-menu">
            <div className="navbar-start">
              <Link className="navbar-item" to="/app">首页</Link>
              <Link className="navbar-item" to={ `${match.path}/product` }>产品</Link>
              <Link className="navbar-item" to={ `${match.path}/cases` }>成功案例</Link>
              <Link className="navbar-item" to={ `${match.path}/about` }>关于</Link>
            </div>
            <div className="navbar-end">
              <button
                onClick={ this.logout }
                className="button is-danger"
              >登出
              </button>
            </div>
          </div>
        </nav>

        {/* 网站主要内容区域 */}
        <main className="columns">
          <div className="menu-list column is-one-fifth has-background-info">
              <Link className="navbar-item" to="/app">首页</Link>
              <Link className="navbar-item" to={ `${match.path}/product` }>产品</Link>
              <Link className="navbar-item" to={ `${match.path}/cases` }>成功案例</Link>
              <Link className="navbar-item" to={ `${match.path}/count` }>Count</Link>
              <Link className="navbar-item" to={ `${match.path}/newcount` }>NewCount</Link>
              <Link className="navbar-item" to={ `${match.path}/about` }>关于</Link>
              <Link className="navbar-item" to={ `${match.path}/userlist` }>用列表管理</Link>
              <Link className="navbar-item" to={ `${match.path}/newuserlist` }>New用列表管理</Link>
          </div>
          <div className="column has-background-primary">
            <Switch>
              <Route path={`${match.path}/about`} component={About}></Route>
              <Route path={`${match.path}/product`} component={Product}></Route>
              <Route path={`${match.path}/count`} component={Count}></Route>
              <Route path={`${match.path}/newcount`} component={NewCount}></Route>
              <Route path={`${match.path}/userlist`} component={UserList}></Route>
              <Route path={`${match.path}/newuserlist`} component={NewUserList}></Route>
              <Route render={ () => {
                return (
                  <div className="hero">
                    <h3 className="title">欢迎您访问aicoder.com</h3>
                    <p className="subtitle">您的访问将是我们的荣耀！</p>
                  </div>
                )
              }}></Route>
            </Switch>
          </div>
        </main>
        <div className="footer has-backgroud-light">
          版权所有@aicoder.com  ={ this.state.Num }=
        </div>
      </div>
    )
  }
}

export default Home