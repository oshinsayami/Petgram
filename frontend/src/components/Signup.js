import React from 'react'

class Signup extends React.Component {
    
    state = {
        email: '',
        password: '',
        passwordConfirmation: ''
    }

    handleOnChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleOnSubmit = e => {
        e.preventDefault()
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <label>Email</label>
                    <input name="email" value={this.state.email} onChange={this.handleOnChange} type='text' /><br />
                    <label>Password</label>
                    <input name="password" value={this.state.password} onChange={this.handleOnChange} type='password' /><br />
                    <label>Confirm Password</label>
                    <input name="passwordConfirmation" value={this.state.passwordConfirmation} onChange={this.handleOnChange} type ='password' /><br />
                    <button type='submit'>Sign Up</button>
                </form>
            </div>
        )   
    }
    
}

export default Signup
