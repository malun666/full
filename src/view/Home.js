import React, { Component } from 'react'
import { Prompt } from 'react-router-dom';

class Home extends Component {
  render () {
    console.log(this.props);
    return (
      <div>
        Home
        <Prompt message="您是否要离开Home？"></Prompt>
      </div>
    )
  }
}

export default Home