import React, { Component } from 'react';
import CommentInput from '../components/comments/CommentInput'
import Comments from '../components/comments/Comments'
import { connect } from 'react-redux'

class CommentsContainer extends Component {
    render() {
        return (
            <div>
                <Comments comments={this.props.post.comments} postId={this.props.post.id} deleteComment={this.props.deleteComment} />
                <CommentInput addComment={this.props.addComment} postId={this.props.post.id} />

            </div>
        )
    }
}

const mapStateToProps = state => {
  return {state}
}

export default connect(mapStateToProps)(CommentsContainer)
