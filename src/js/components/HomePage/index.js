import React, { Component } from 'react'
// import { browserHistory } from 'react-router'
import PropTypes from 'prop-types'

import logoImage from '../../../logo.png'

import {
  Card,
  CommonTitle,
  Tab
} from '../index'


class HomePage extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  constructor(props) {
    super(props);
    this.state = {
      items: ['webpack', 'react', 'babel', 'npm']
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const name = e.target.elements[0].value;
    const repo = e.target.elements[1].value;
    console.log('Info: ', name, repo);
    // browserHistory.push('/comment');  // 使用browserHistory
    this.context.router.push('/comment');  // 使用hashHistory
  }

  render() {
    return (
      <Card>
        <img width="200" src={logoImage} alt=""/>
        <CommonTitle title="Tab实例" />
        <Tab items={this.state.items} />
        <hr />
        <h3 style={{marginTop: '50px'}}>表单路由跳转</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">姓名：
            <input type="text" />
          </label>
          <br /><br />
          <label htmlFor="">账号：
            <input type="text"  />
          </label>
          <br /><br />
          <button type="submit">Go</button>
        </form>
      </Card>
    )
  }
}


export default HomePage
