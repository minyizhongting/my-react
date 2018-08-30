import React, { Component } from 'react'
import { Link } from 'react-router'

class Links extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Link {...this.props} activeClassName="active" />
    )
  }

}

export default Links
