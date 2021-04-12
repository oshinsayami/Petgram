import React from 'react'
import { connect } from 'react-redux'
import PostDisplay from './PostDisplay'


const PostList= ({posts}) => {
    return (
        <div>
            {posts.map(post => {
                return (
                    <PostDisplay key={post.id} post={post} />
                )
            }
            )}
        </div>
    )
}

 

const mapStateToProps = state => {
    return {
        posts: state.posts,
    }
}

export default connect(mapStateToProps)(PostList)
