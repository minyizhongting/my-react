import React, { Component } from 'react'

class Comment extends Component {
  render() {
    const comment = this.props.comment;
    return (
      <div className="item">
        {comment.username}: {comment.content}
      </div>
    )
  }
}

export default Comment