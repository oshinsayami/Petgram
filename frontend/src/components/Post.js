import React from 'react'
import Avatar from "@material-ui/core/Avatar"
import '../App.css'

function Post() {
    return (
        <div className="post">
            <div className="post_header">
                <Avatar className="post_avatar" />
                <h3>Username</h3>
            </div>
            <img className="post_image" src="https://media3.s-nbcnews.com/j/newscms/2019_41/3047866/191010-japan-stalker-mc-1121_06b4c20bbf96a51dc8663f334404a899.fit-1000w.JPG" />
            <h4 className="post_text"><strong>Simran</strong> My first post</h4>
        </div>
    )
}

export default Post
