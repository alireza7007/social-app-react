// import React from 'react'
// import { useState,useEffect,useLayoutEffect } from 'react'
// import axios from 'axios'

// export default function Ip() {

// const [first, setFirst] = useState('')
// const [second, setSecond] = useState({})
// useEffect(() => {
 
//    axios.get('https://api.ipify.org?format=json')
//   .then(response => setFirst(response.data))
  
  
//     axios.get(`http://ipwho.is/${first}`)
//    .then(response => setSecond(response.data))
 
   
 
// }, [setFirst,setSecond])
// useEffect(() => {
//    axios.get(`http://ipwho.is/${first}`)
//   .then(response => setSecond(response.data))
// }, [setSecond])



//   return (
//     <div>
//      <span>your ip is : {first.ip}</span>
//      <hr />
//      {second ? <div>
//       <span>your continent is : {second.continent}</span>
//      <hr />
//      <span>your contry is : {second.country}</span>
//      <hr />
//      <span>your city is : {second.city}</span>
//      <hr />
//      <span>your postal is : {second.postal}</span>
//      <hr />
//      {/* <span>your connection is : {second.connection.org}</span> */}
//      </div>
// :<span>data not resive</span>}
//     </div>
//   )
// }
