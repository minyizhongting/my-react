import React from 'react'
import './index.scss'

const CommonTitle = ({title}) => {
  return (
    <div className="common-title">
      <p>{title}</p>
      <hr />
    </div>
  )
}

export default CommonTitle