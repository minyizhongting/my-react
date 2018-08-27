import React, { Component } from 'react'

import {
  Card,
  CommonTitle,
  Tab
} from '../index'


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ['webpack', 'react', 'babel', 'npm']
    };
  }

  render() {
    return (
      <Card>
        <CommonTitle title="Tab实例" />
        <Tab items={this.state.items} />
      </Card>
    )
  }
}


export default HomePage
