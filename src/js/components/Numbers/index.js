import React, { Component } from 'react'

class Numbers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('Name and age were submitted: ', this.state.name, this.state.age);
  }

  handleChange(e) {
    // 多个受控的input元素，可以通过给元素添加name属性，来处理函数根据event.target.name的值来选择做什么
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value});
  }

  render() {
    const numbers = this.props.route.numbers;
    const listItems = numbers.map((item,index) =>
      <li key={index}>{item}</li>
    );
    return (
      <div>
        <ul>{listItems}</ul>
        <br />
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          </label>
          <br /><br />
          <label>
            Age:
            <input type="text" name="age" value={this.state.age} onChange={this.handleChange} />
          </label>
          <br /><br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }

}

export default Numbers