import React, { Component } from 'react'

// import Card from '../components/Card/index'
// import CommonTitle from '../components/CommonTitle/index'
// import Tab from '../components/Tab/index'

import {
  Card,
  CommonTitle,
  Tab
} from '../components'

class Home extends Component {
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


export default Home