import React, { Component } from 'react';
import { login } from '../redux/actions/authActions';
import { connect } from 'react-redux';
import { Button, Input } from '@material-ui/core';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state, this.props.history);
  };

  render() {
    return (
      <div>
        <center>
          <form onSubmit={this.handleOnSubmit} className="app__signup">
            <Input
              placeholder="email"
              name="email"
              value={this.state.email}
              onChange={this.handleOnChange}
              type="text"
            />
            <Input
              name="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handleOnChange}
              type="password"
            />
            <Button type="submit">Login</Button>
          </form>
        </center>
      </div>
    );
  }
}

export default connect(null, { login })(Login);