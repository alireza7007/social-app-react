import React from 'react'

export default function Info(props) {
  return (
    <div className="userInfoItems">
    <span className="userInfoKey">{props.keys}:</span>
    <span className="userInfoValue">{props.values}</span>
  </div>
  )
}
