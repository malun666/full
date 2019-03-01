import React, { Component } from 'react'

class PorductDetail extends Component {
  render () {
    console.log(this.props);
    return (
      <div>
        产品的详情： { this.props.match.params.id }
      </div>
    )
  }
}

export default PorductDetail