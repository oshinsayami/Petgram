import React, { Component } from 'react';
import Comment from './Comment';

class Comments extends Component {

  render() {
    console.log(this.props)
    const { comments, postId, deleteComment } = this.props;
    console.log(comments)
    console.log(postId)
    // debugger
    const associatedComments = comments.filter(comment => comment.post_id === postId);
       console.log(associatedComments)

    const commentList = associatedComments.map((comment, index) => {
      return <Comment key={index} comment={comment} deleteComment={deleteComment} />
      
      })
        console.log(commentList)

    return (
      <div>
        <ul>
          {commentList}
        </ul>
      </div>
    );
  }

};


export default Comments;