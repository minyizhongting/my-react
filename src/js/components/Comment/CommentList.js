import React, { Component } from 'react'

import Comment from './Comment'

class CommentList extends Component {
  render() {
    const comments = this.props.comments;

    return (
      <div className="comment-list">
        <p>List</p>
        {comments.map((comment, i) => {
          return (
            <Comment key={i} comment={comment} />
          )
        })}
      </div>
    )
  }
}

export default CommentList