import React, { Component } from 'react';
import './App.css';
// import  { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import  { HashRouter as Router, Link, Route, NavLink } from 'react-router-dom';
import Home from './view/Home';
import About from './view/About';
import Product from './view/Product';
import { red } from 'ansi-colors';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>aicoder.com</h1>
        <Router hashType="noslash" basename="/app" forceRefresh={true}>
          <div>
            <Link to="/">首页</Link>|
            <Link to="/about">关于</Link>|
            <Link to="/product" replace>产品</Link>
            <Link to={{
              pathname: '/product',
              search: '?key=laoma',
              hash: '#userHeader',
              state: { loginName: 'laoma,aicoder.com'}
            }}>产品99</Link>
            <NavLink
              to="/product"
              // activeStyle={{color: 'red', fontSize: '30px'}}
              activeClassName='selected'
            >
              产品NavLink
            </NavLink>
            <hr/>
            {/* 第一种渲染方式 */}
            <Route path="/" exact component={Home}>
            </Route>
            {/* <Route path="/about" component={About}>
            </Route> */}
            {/* 第二种渲染方式 */}
            <Route
              path="/about"
              render={ (props) => {
                return (
                  <About {...props}></About>
                )
              }}
            >
            </Route>
            {/* 第三种渲染方式 */}
            <Route
              path="/product"
              children={ (props) => {
                console.log(props);
                return props.match ? 
                  (<Product></Product>) 
                  : 
                  <p>没有匹配上Prodcut</p>
              }}            
            >
            </Route>
            {/* <Route path="/product" component={Product}>
            </Route> */}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
