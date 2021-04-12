// import React from 'react'
import CommentsContainer from '../../container/CommentsContainer'
import { Avatar } from '@material-ui/core'
import React from "react";

class PostDisplay extends React.Component{

    state = {
        like: 0
    }

    handleClick = () => {
        let count = this.state.like + 1
        this.setState({
            like: count
        })
    }

    render() {
        const { post } = this.props
        return (
            <div className="post">
                <div className="post_header">
                    <Avatar className="post_avatar" />
                    <h3>{post.user.username}</h3>
                </div>
                <img className="post_image" src={post.image} />
                {this.state.like} like
                <button onClick={ this.handleClick}>Like</button>
                <h4 className="post_text"><strong>{post.user.username}</strong> {post.caption}</h4>
                <CommentsContainer post={post} />
            </div>
        )
    }
    
}

export default PostDisplay




