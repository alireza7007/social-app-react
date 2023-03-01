import React from 'react'

export default function CloseFriends(props) {
  return (
        <div className="friend">
            <img src={props.image} alt="" className="imgFriend" />
            <span className="friendName">{props.name}</span>
          </div>
  )
}
