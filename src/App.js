import React, { Component } from 'react'
import { HashRouter as Router, Link, Route, Redirect, Switch } from 'react-router-dom';
import Login from './view/Login';
import Eempty from './view/Eempty';
import Home from './view/Home';

class App extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route path="/" exact render={ () => <Redirect to="/app"></Redirect> }></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/app" component={Home}></Route>
          <Route component={Eempty}></Route>
        </Switch>
      </Router>
    )
  }
}

export default App