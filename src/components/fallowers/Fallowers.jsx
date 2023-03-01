import React from 'react'

export default function (props) {
  return (
    <div className="userFallowing">
        <img src={props.image} alt="" className="userFallowigImg" />
        <span className="userFallowingName">{props.name}</span>
    </div>
  )
}
