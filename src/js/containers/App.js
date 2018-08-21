import React, { Component } from 'react'

// import Counter from '../components/Counter/index'
// import Tab from '../components/Tab/index'
// import CommonTitle from '../components/CommonTitle/index'

import {
  CommonTitle,
  Tab
} from '../components'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ['webpack', 'react', 'babel', 'npm']
    };
  }

  render() {
    return (
      <div className="box">
        <CommonTitle title="Tab实例" />
        <Tab items={this.state.items} />
      </div>
    )
  }
}


export default App