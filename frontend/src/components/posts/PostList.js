import React from 'react'
import { connect } from 'react-redux'
import PostDisplay from './PostDisplay'


const PostList= ({posts}) => {
    return (
        <div>
            {console.log(posts)}
            {posts.map(post => {
                // debugger
                return (
                    <PostDisplay key={post.id} post={post} />
                )
            }
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
