import React, { Component } from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import Post from './components/Post'
import Signup from './components/Signup'




class App extends Component() {
  render() {
    return (
    <div className="App">
      <div className="app_header">
        <h1>Petgram</h1>
      </div>
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/posts' component={Post} />
          <Route exact path='/signup' component={Signup} />
        </Switch>
      </Router>
    </div>
  );
  }
  
}

export default App;
