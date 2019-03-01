import React, { Component } from 'react'

class About extends Component {
  render () {
    console.log(this.props);
    return (
      <div>
        about!
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