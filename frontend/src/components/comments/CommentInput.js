import React, { Component } from 'react';
import { addComment } from '../../redux/actions/postsAction'
import {connect} from 'react-redux'


class CommentInput extends Component {

    state = {
        body: '',
        user_id: this.props.user_id,
        post_id: parseInt(this.props.postId),
        username: this.props.username
    }
    

  handleOnChange = event => {
    // this.setState({
    //   body: event.target.value,
    // });
    const {name, value} = event.target
       this.setState({
        [name]: value
       })
   }
  

  handleOnSubmit = event => {
    event.preventDefault();
    this.setState({ body: "" });
    this.props.addComment(this.state)
  }

  render() {
    return (
     <div>
        <form className="post__commentbox" onSubmit={this.handleOnSubmit} >
          <input className="post__input"
            placeholder="Add a comment"
            type="text"
            value={this.state.body}
            onChange={this.handleOnChange} name="body"/>
          <button className="post__button" type="submit" >Post</button>
        </form>
      </div>
    );
  }
    
};

const mapStateToProps = (state) => {
    return {
      user_id: state.auth.currentUser.id,
      username: state.auth.currentUser.username
    }
}

export default connect(mapStateToProps, {addComment})(CommentInput);
