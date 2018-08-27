import React, { Component } from 'react'
import '../components/Comment/index.scss'

import { Card } from '../components'

import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentPage extends Component {
  render() {
    return (
      <Card>
        <CommentInput />
        <CommentList />
      </Card>
    )
  }
}

export default CommentPage

