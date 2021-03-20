import React, { Component } from 'react';
import { addComment } from '../../redux/actions/postsAction'
import {connect} from 'react-redux'


class CommentInput extends Component {

    state = {
        body: '',
        user_id: this.props.user_id,
        post_id: parseInt(this.props.postId)
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
    console.log(this.state)
    this.props.addComment(this.state)
  }

  render() {
    console.log(this.state)
    return (
     <div>
        <form onSubmit={this.handleOnSubmit} >
          <label>Add Comment</label>
          <input
            type="text"
            value={this.state.body}
            onChange={this.handleOnChange} name="body"/>
          <input type="submit" />
        </form>
      </div>
    );
  }
    
};

const mapStateToProps = (state) => {
    // debugger
            console.log(state)

    return {
        user_id: state.auth.currentUser.id,
        
    }
}

export default connect(mapStateToProps, {addComment})(CommentInput);
