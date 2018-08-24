import React, { Component } from 'react'

import { Card, Cycle } from '../components'

class CyclePage extends Component {
  render() {
    // 获取route传来的props
    const numbers = this.props.route.numbers;
    // 获取route中的:id
    const id = this.props.params.id;
    // 获取route中的query
    const query = this.props.location.query;
    return (
      <Card>
        <Cycle numbers={numbers} id={id} query={query} />
      </Card>
    )
  }
}

export default CyclePage