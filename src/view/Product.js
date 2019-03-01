import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom';
import  PorductDetail from  './PorductDetail';

class Product extends Component {
  render () {
    const { match } = this.props;
    console.log(this.props);
    return (
      <div>
        product
        {/* {
          this.props.location.state ?
          <p>{ this.props.location.state.loginName }</p>
          :
          null
        } */}
        <Link to={`${match.path}/1`}>产品1</Link> |
        <Link to={`${match.path}/2`}>产品2</Link> |
        <Link to={`${match.path}/3`}>产品3</Link>
        <hr/>

        <Route path={`${match.path}/:id`} component={ PorductDetail }>
        </Route>
        <hr/>
        <button
          onClick={ () => this.props.history.push('/about') }
        >按钮跳转到About</button>
        <button
          onClick={ () => this.props.history.go(-1) }
        >后退</button>
      </div>
    )
  }
}

export default Product