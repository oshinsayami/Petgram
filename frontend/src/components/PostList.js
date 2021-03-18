import React from 'react'
import {connect} from 'react-redux'

const PostList= ({posts}) => {
    return (
        <div>
            {posts.map(post => <ul><li key="post.id">{post.image} - {post.caption}</li></ul>)}
        </div>
    )
}

const mapStateToProps = state => {
    return { posts : state.posts }
}

export default connect(mapStateToProps)(PostList)
