import React, { Component } from 'react'
import '../components/Comment/index.scss'

import { Card } from '../components'

import CommentInput from '../components/Comment/CommentInput'
import CommentList from '../components/Comment/CommentList'

class CommentPage extends Component {
  constructor(props) {
    super(props);
    // 当某个状态被多个组件依赖或者影响时，应把状态提升到这些组件的最近公共父组件中去管理，用props传递数据或者函数来管理这种依赖的行为。
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
      <Card>
        <CommentInput onSubmit={this.handleSubmitComment} />
        <CommentList comments={this.state.comments}/>
      </Card>
    )
  }
}

export default CommentPage