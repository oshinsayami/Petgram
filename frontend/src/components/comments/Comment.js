import React, { Component } from 'react';
import { deleteComment } from '../../redux/actions/postsAction'
import {connect} from 'react-redux'


class Comment extends Component {


  // handleOnClick = () => {
  //   this.props.deleteComment(this.props.comment.id)
  // }

  render() {
    console.log(this.props)
    // const { comment } = this.props;
    return (
      <div>
        <li>
          {this.props.comment.username}
          {this.props.comment.body}
        </li>
        {/* <button onClick={this.handleOnClick}> x </button> */}
      </div>
    );
  }

};

const mapStateToProps = state => {
  // debugger
    console.log(state)
    return {
        posts: state.posts,
    }
}

export default connect(mapStateToProps)(Comment)