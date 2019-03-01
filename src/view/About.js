import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
class About extends Component {

  constructor(props) {
    super(props);
    this.state = {
      login: true
    }
  }

  render () {
    return (
      <div>
        about!

        <input 
          onClick={ () => this.setState({login: false})}
          type="button" value="登出，跳转到首页"/>

        { !this.state.login && <Redirect to="/"></Redirect> }
        <p>
          ==={
            this.props.location.pathname
          }====
        </p>
      </div>
    )
  }
}

export default About