import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../redux/actions/postsAction'
import PostForm from './PostForm'

class PostsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchPosts()
    }

    render() {
        return (
            <div>
                <PostForm />
            </div>
        )
    }
}

export default connect(null, {fetchPosts})(PostsContainer)
