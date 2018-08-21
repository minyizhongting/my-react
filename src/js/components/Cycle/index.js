import React, { Component } from 'react'

class Increment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 0
    };

    this.setNumber = this.setNumber.bind(this);
  }

  setNumber() {
    this.setState({
      data: this.state.data + 1
    });
  }

  render() {
    return (
      <div>
        {/* 来自于路径/cycle/123 */}
        <p>Params: {this.props.params.id}</p>
        {/* 来自于路径/cycle/123?abc=hello */}
        <p>query: abc = {this.props.location.query.abc}</p>
        <button onClick={this.setNumber}>INCREMENT</button>
        <Content myNumber={this.state.data} />
      </div>
    )
  }

}

class Content extends Component {
  componentWillMount() {
    console.log('Component will mount!');
  }
  componentDidMount() {
    console.log('Component did mount!');
  }
  componentWillReceiveProps(newProps) {
    console.log('Component will receive props!');
  }
  shouldComponentUpdate(newProps, newState) {
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('Component will update!');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('Component did update!');
  }
  componentWillUnmount() {
    console.log('Component will unmount!');
  }

  render() {
    return (
      <div>
        <h3>{this.props.myNumber}</h3>
      </div>
    )
  }

}

export default Increment