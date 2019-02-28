import React, { Component } from 'react'

class Product extends Component {
  render () {
    return (
      <div>
        product
        {
          this.props.location.state ?
          <p>{ this.props.location.state.loginName }</p>
          :
          null
        }

      </div>
    )
  }
}

export default Product