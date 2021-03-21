// import React from 'react'
import CommentsContainer from '../../container/CommentsContainer'
import { Avatar } from '@material-ui/core'
import React, { useState } from "react";
import Heart from "react-animated-heart";

class PostDisplay extends React.Component{

    render() {
        // const [isClick, setClick] = useState(false);
        const { post } = this.props
        console.log(post)
        return (
            // <div></div>
            <div className="post">
                <div className="post_header">
                    <Avatar className="post_avatar" />
                    <h3>{post.user.username}</h3>
                </div>
                <img className="post_image" src={post.image} />
                <h4 className="post_text"><strong>{post.user.username}</strong> {post.caption}</h4>
                {/* <Heart isClick={isClick} onClick={() => setClick(!isClick)} /> */}
                <CommentsContainer post={post} />
            </div>
    )
    }
    
}

export default PostDisplay




