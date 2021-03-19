import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../redux/actions/postsAction'
import PostList from './PostList'


class PostsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchPosts()
    }

    render() {
        return (
            <div>
                <PostList />
            </div>
        )
    }
}

export default connect(null, {fetchPosts})(PostsContainer)
