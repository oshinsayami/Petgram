import React, { Component } from 'react'
import { addPost } from '../redux/actions/postsAction'
import {connect} from 'react-redux'
import { Button, Input } from '@material-ui/core'

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
        this.props.addPost(this.state, this.props.history)
    }

    render() {
        return (
            <form className="app__signup" onSubmit={this.handleSubmit}>
                <Input type='text' placeholder="Image Link" value={this.state.image} onChange={this.handleChange} name="image"/>
                <Input type='textarea' placeholder="Enter a caption"value={this.state.caption} onChange={this.handleChange} name="caption"/>
                <Button type="submit">Add Post</Button>
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
