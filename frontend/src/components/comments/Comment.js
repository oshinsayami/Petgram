import React, { Component } from 'react';

class Comment extends Component {


  handleOnClick = () => {
    this.props.deleteComment(this.props.comment.id)
  }

  render() {
    console.log(this.props)
    // const { comment } = this.props;
    return (
      <div>
        <li>
          {this.props.comment.body}
        </li>
        <button onClick={this.handleOnClick}> x </button>
      </div>
    );
  }

};

export default Comment;