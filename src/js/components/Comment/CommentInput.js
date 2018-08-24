import React, { Component } from 'react'

class CommentInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      content: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let name = e.target.name;
    this.setState({
      [name]: e.target.value
    });
  }

  handleSubmit() {
    // 点击发布，内容是需要显示到CommentList组件中的。
    // 将CommentInput的state传递给父组件Comment，然后让父组件将数据传递给CommentList进行渲染。
    // 如何传递？只需让父组件Comment通过props给子组件CommentInput传入一个回调函数接口，用户点击发布，CommentInput调用props中的回调函数将state传入该函数即可。
    if (this.props.onSubmit) {
      const { username, content } = this.state;
      this.props.onSubmit({username, content});
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
          <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
        </div>
        <div className="comment-field">
          <span>评论内容：</span>
          <textarea name="content" value={this.state.content} onChange={this.handleChange} />
        </div>
        <div className="comment-field-btn">
          <button onClick={this.handleSubmit}>发布</button>
        </div>
      </div>
    )
  }
}

export default CommentInput