import React, { Component } from 'react'
import { addPost } from '../redux/actions/postsAction'
import {connect} from 'react-redux'

class PostForm extends Component {
    
    state = {
        caption: '',
        image: '',
        user_id: this.props.user_id,
    }

    handleChange = e => {
        const { name, value } = e.target
        
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
        this.props.addPost(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Image Link:</label>
                <input type='text' value={this.state.image} onChange={this.handleChange} name="image"/>
                <label>Caption:</label>
                <input type='textarea' value={this.state.caption} onChange={this.handleChange} name="caption"/>
                <input type="submit" value="Add Post" />
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    // debugger
            console.log(state)

    return {
        user_id: state.auth.currentUser.id
    }
}

export default connect(mapStateToProps, {addPost})(PostForm)
