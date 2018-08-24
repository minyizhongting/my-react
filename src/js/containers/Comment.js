import React, { Component } from 'react'
import '../components/Comment/index.scss'

import CommentInput from '../components/Comment/CommentInput'
import CommentList from '../components/Comment/CommentList'

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
    this.handleSubmitComment = this.handleSubmitComment.bind(this);
  }

  handleSubmitComment(comment) {
    if (!comment) {
      return;
    }
    if (!comment.username) {
      alert('请输入用户名');
      return;
    }
    if (!comment.content) {
      alert('请输入评论内容');
      return;
    }
    let comments = this.state.comments;
    comments.push(comment);
    this.setState({
      comments
    });
  }

  render() {
    return (
      <div className="comment-wrapper">
        <CommentInput onSubmit={this.handleSubmitComment} />
        <CommentList comments={this.state.comments}/>
      </div>
    )
  }
}

export default Comment