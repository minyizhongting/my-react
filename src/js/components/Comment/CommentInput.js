import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CommentInput extends Component {

  static propTypes = {
    username: PropTypes.any,
    onSubmit: PropTypes.func,
    onUserNameInputBlur: PropTypes.func
  }

  static defaultProps = {
    username: ''
  }

  constructor(props) {
    super(props);
    this.state = {
      username: props.username, // 从props上取username字段
      content: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameBlur = this.handleUsernameBlur.bind(this);
  }

  componentDidMount() {
    // 评论框自动获取焦点
    this.refs.textarea.focus();
  }

  handleChange(e) {
    let name = e.target.name;
    this.setState({
      [name]: e.target.value
    });
  }

  handleUsernameBlur(e) {
    // this._saveUsername(e.target.value);
    if (this.props.onUserNameInputBlur) {
      this.props.onUserNameInputBlur(e.target.value);
    }
  }

  handleSubmit() {
    // 点击发布，内容是需要显示到CommentList组件中的。
    // 将CommentInput的state传递给父组件Comment，然后让父组件将数据传递给CommentList进行渲染。
    // 如何传递？只需让父组件Comment通过props给子组件CommentInput传入一个回调函数接口，用户点击发布，CommentInput调用props中的回调函数将state传入该函数即可。
    if (this.props.onSubmit) {
      const { username, content } = this.state;
      const createdTime = +new Date();
      this.props.onSubmit({username, content, createdTime});
    }
    this.setState({
      content: ''
    });
  }

  render() {
    return (
      <div className="comment-input">
        <div className="comment-field">
          <span>用户名：</span>
          <input type="text" name="username" value={this.state.username} onChange={this.handleChange} onBlur={this.handleUsernameBlur} />
        </div>
        <div className="comment-field">
          <span>评论内容：</span>
          <textarea ref="textarea" name="content" value={this.state.content} onChange={this.handleChange} />
        </div>
        <div className="comment-field-btn">
          <button onClick={this.handleSubmit}>发布</button>
        </div>
      </div>
    )
  }
}

export default CommentInput