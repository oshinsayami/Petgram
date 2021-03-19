import React from 'react'
import { connect } from 'react-redux'


const PostList= ({posts}) => {
    return (
        <div>
            {console.log(posts)}
            {posts.map(post =>
                <>
                    <div className="post_header">
                        {/* <Avatar className="post_avatar" /> */}
                        <h3>{post.attributes.user.username}</h3>
                    </div>
                    <img className="post_image" src={post.attributes.image} />
                    <h4 className="post_text"><strong>{post.attributes.user.username}</strong>{post.attributes.caption}</h4>
                </>
                )}   
        </div>
    )
}

 

const mapStateToProps = state => {
    // debugger
    console.log(state)
    return {
        posts: state.posts,
    }
}

export default connect(mapStateToProps)(PostList)
