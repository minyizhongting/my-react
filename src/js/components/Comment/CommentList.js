import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Comment from './Comment'

class CommentList extends Component {

  // 给组件的参数做类型限制，可以帮助迅速定位错误
  static propTypes = {
    comments: PropTypes.array.isRequired,
    onDeleteComment: PropTypes.func.isRequired
  }

  handleDeleteComment(index) {
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(index);
    }
  }

  render() {
    const comments = this.props.comments;

    return (
      <div className="comment-list">
        <p>List</p>
        {comments.map((comment, i) => {
          return (
            <Comment
              key={comment.createdTime}
              index={i}
              comment={comment}
              onDeleteComment={this.handleDeleteComment.bind(this)} />
          )
        })}
      </div>
    )
  }
}

export default CommentList