import React from 'react'
import '../../App.css'
import { connect } from 'react-redux'
import PostsContainer from '../../container/PostsContainer'

const Post =({user})=> {
    return (
        <div>
            <div className="name_header">
                <h1>Welcome {user.username}</h1>
            </div>
            <PostsContainer />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.currentUser
    }
}

export default connect(mapStateToProps)(Post)
