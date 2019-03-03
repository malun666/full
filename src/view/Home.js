import React, { Component } from 'react'
import { Prompt } from 'react-router-dom';

class Home extends Component {
  logout = () => {
    // 清楚sessionStorage里面的用户登录的信息。
    sessionStorage.clear();
    this.props.history.push('/login');
  }

  render () {
    // console.log(this.props);
    return (
      <div>
        Home
        <hr/>
        <button
          onClick={ this.logout }
          className="button is-danger"
        >登出</button>
      </div>
    )
  }
}

export default Home