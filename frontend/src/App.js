import React, { Component } from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './components/user/Login'
import Post from './components/posts/Post'
import Signup from './components/user/Signup'
import PostForm from './components/posts/PostForm'
import { checkLoggedIn } from './redux/actions/authActions'
import { connect } from 'react-redux'
import Navbar from './components/Navbar'
import { Redirect } from 'react-router-dom'

class App extends Component {
  state = {
    loading: true
  }

  toggleLoading = () => {
    this.setState({
      loading: !this.state.loading
    })
  }

  componentDidMount() {
    this.props.checkLoggedIn(this.toggleLoading);
  }

  render() {
    if (this.state.loading) return <h1>Loading...</h1>
    return (
      <div className="App">
        <Router>
      <div className="app_header">
          <h1>Petgram</h1>
          <Navbar/>
      </div>
        
          <Switch>
            <Route exact path='/' component={Login} />
              <Route exact path='/posts' render={(props) => {
                if (this.props.loggedIn) {
                  return (
                    <Post {...props} />
                  )
                } else {
                  return <Redirect to='/' />
                }
              }} />
              <Route exact path='/signup' component={Signup} />
              <Route exact path="/newpost" component={PostForm} />
          </Switch>
      </Router>
    </div>
  );
  }
  
}

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.loggedIn
  }
}

export default connect(mapStateToProps, {checkLoggedIn})(App);
