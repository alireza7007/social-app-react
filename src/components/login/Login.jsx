import { Link, useNavigate, redirect, Route, useLocation } from 'react-router-dom'
import './login.css'
import { useState } from 'react';
import { useAuth } from '../../context/Auth-user';
export default function Login() {

  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('') 
  let {isAuthenticated} =useAuth()

  const handelLoginSubmit = (event)=>{
    event.preventDefault()
    if( 'admin'=== username & 'admin'===password ){
      return navigate('/profile')
    }
    return navigate('/')
  }
  
  
  return (
    <div className='login'>
        <div className="logwrapper">
        <div className="loginleft">
            <h3 className="wellcomelogintitle">Rossoneri club</h3>
            <span className="descLogin">A club for Rossoneri fans <b>Sempre Milan</b></span>
        </div>
        <div className="loginright">
          <form className="loginBox" onSubmit={handelLoginSubmit}>
            <input type="text" placeholder='Email' className="inputLogin" value={username} onChange={(e)=>setUsername(e.target.value)}  />
            <input type="password" placeholder='Password' className="inputLogin"value={password} onChange={(e)=> setPassword(e.target.value)} />
            <button className="loginSubmit" type='submit'>Log in</button>
            <span className="forgatLogin">Forgot Password?</span>
            <button className="registerLogin">Create a New Accont</button>
            <Link to='/profile' className="registerLoginGoogle">Login with Google play</Link>
          </form>
            
        </div>
        </div>
    </div>

  )
}
