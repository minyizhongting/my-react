import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CommentInput from '../components/Comment/CommentInput'
import { addComment } from "../actions"

class CommentInputContainer extends Component {
  // 验证props的参数类型，若类型不匹配浏览器就会报错，方便debug
  static propTypes = {
    comments: PropTypes.array,
    onSubmit: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
  }

  // 不依赖DOM操作的组件启动的操作可以在componentWillMount中进行
  componentWillMount() {
    this._loadUsername();
  }

  // 代码习惯：组件的私有方法都用_开头，事件监听方法都用handle开头，把事件监听方法传给组件时，属性名用on开头
  // 从localStorage中获取用户名
  _loadUsername() {
    const username = localStorage.getItem('username');
    if (username) {
      this.setState({
        username
      });
    }
  }

  // 缓存用户名到localStorage
  _saveUsername(username) {
    localStorage.setItem('username', username);
  }

  handleSubmitComment (comment) {
    // 评论数据的验证
    if (!comment) return;
    if (!comment.username) return alert('请输入用户名');
    if (!comment.content) return alert('请输入评论内容');
    // 新增评论保存到 LocalStorage 中
    const { comments } = this.props;
    const newComments = [...comments, comment];
    localStorage.setItem('comments', JSON.stringify(newComments));
    // this.props.onSubmit 是 connect 传进来的
    // 会 dispatch 一个 action 去新增评论
    if (this.props.onSubmit) {
      this.props.onSubmit(comment);
    }
  }

  render () {
    console.log(this.props);
    return (
      <CommentInput
        username={this.state.username}
        onUserNameInputBlur={this._saveUsername.bind(this)}
        onSubmit={this.handleSubmitComment.bind(this)} />
    )
  }

}

const mapStateToProps = (state) => {
  return {
    comments: state.comments.comments
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (comment) => {
      dispatch(addComment(comment))
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentInputContainer)

