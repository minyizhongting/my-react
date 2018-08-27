import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Comment extends Component {

  static propTypes = {
    comment: PropTypes.object.isRequired,
    onDeleteComment: PropTypes.func,
    index: PropTypes.number
  };

  constructor(props) {
    super(props);
    this.state = {
      timeString: ''
    };
    this.handleDeleteComment = this.handleDeleteComment.bind(this);
  }

  componentWillMount() {
    this._updateTimeString();
    // 每隔5秒更新评论发布时间
    // this._timer = setInterval(
    //   this._updateTimeString.bind(this),
    //   5000
    // );
  }

  componentWillUnmount() {
    // clearInterval(this._timer);
  }

  _updateTimeString() {
    const comment = this.props.comment;
    const duration = (+new Date() - comment.createdTime) / 1000;
    this.setState({
      timeString: duration > 60 ? `${Math.round(duration / 60)} 分钟前` : `${Math.round(Math.max(duration, 1))} 秒前`
    });
  }

  handleDeleteComment() {
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(this.props.index);
    }
  }

  render() {
    const comment = this.props.comment;
    return (
      <div className="item">
        <span>{comment.username}: {comment.content}</span>
        <div>
          <span>{this.state.timeString}</span>
          <button onClick={this.handleDeleteComment}>删除</button>
        </div>
      </div>
    )
  }
}

export default Comment