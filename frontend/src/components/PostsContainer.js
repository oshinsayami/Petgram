import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../redux/actions/postsAction'
import PostForm from './PostForm'
import PostList from './PostList'


class PostsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchPosts()
    }

    render() {
        return (
            <div>
                <PostForm />
                <PostList />
            </div>
        )
    }
}

export default connect(null, {fetchPosts})(PostsContainer)
