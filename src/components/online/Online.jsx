import React from 'react'

export default function Online(props) {
  return (
    <li className="friendsrightbar">
              <div className="friendsAvTx">
                <img src={props.image} alt="" className="imageFriend" />
                <span className="online"></span>
              </div>
              <span className="usernameOnline">{props.name}</span>
            </li>
  )
}
