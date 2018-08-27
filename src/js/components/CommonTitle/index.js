import React from 'react'

const CommonTitle = ({title}) => {
  return (
    <div style={{margin: '20px 0'}} className="common-title">
      <p style={{color: '#ccc', fontSize: '24px'}}>{title}</p>
      <hr />
    </div>
  )
}

export default CommonTitle