import React from 'react'
import { signup } from '../redux/actions/authActions'
import {connect} from 'react-redux'

class Signup extends React.Component {
    
    state = {
        email: '',
        username: '',
        password: '',
        password_confirmation: ''
    }

    handleOnChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleOnSubmit = e => {
        e.preventDefault()
        this.props.signup(this.state)
        this.props.history.push(`/posts`)
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <label>Email</label>
                    <input name="email" value={this.state.email} onChange={this.handleOnChange} type='text' /><br />
                    <label>Username</label>
                    <input name="username" value={this.state.username} onChange={this.handleOnChange} type='text' /><br />
                    <label>Password</label>
                    <input name="password" value={this.state.password} onChange={this.handleOnChange} type='password' /><br />
                    <label>Confirm Password</label>
                    <input name="password_confirmation" value={this.state.passwordConfirmation} onChange={this.handleOnChange} type ='password' /><br />
                    <button type='submit'>Sign Up</button>
                </form>
            </div>
        )   
    }
    
}

export default connect(null, {signup})(Signup)
