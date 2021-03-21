import React from 'react'
import { signup } from '../redux/actions/authActions'
import { connect } from 'react-redux'
import {Button, Input} from '@material-ui/core'
 
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
        this.props.signup(this.state, this.props.history)
    }

    render(){
        return (
            <div>
                <center>
                    <form onSubmit={this.handleOnSubmit} className="app__signup">
                        <Input placeholder="email" name="email" value={this.state.email} onChange={this.handleOnChange} type='text' /><br />
                        <Input placeholder="username" name="username" value={this.state.username} onChange={this.handleOnChange} type='text' /><br />
                        <Input placeholder="password" name="password" value={this.state.password} onChange={this.handleOnChange} type='password' /><br />
                        <Input placeholder="confirm password" name="password_confirmation" value={this.state.passwordConfirmation} onChange={this.handleOnChange} type ='password' /><br />
                        <Button type='submit'>Sign Up</Button>
                    </form>
                </center>
            </div>
        )   
    }
    
}

export default connect(null, {signup})(Signup)
