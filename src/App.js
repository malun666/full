import React, { Component } from 'react';
import './App.css';
import  { HashRouter as Router, Link, Route } from 'react-router-dom';
import Home from './view/Home';
import About from './view/About';
import Product from './view/Product';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>aicoder.com</h1>
        <Router>
          <div>
            <Link to="/">首页</Link>|
            <Link to="/about">关于</Link>|
            <Link to="/product">产品</Link>
            <hr/>
            <Route path="/" exact component={Home}>
            </Route>
            <Route path="/about" component={About}>
            </Route>
            <Route path="/product" component={Product}>
            </Route>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
