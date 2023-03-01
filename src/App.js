import React from 'react'
import Login from './components/login/Login'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'

export default function App() {

  return (
    
    <Routes>
      
      <Route path='/' element={<Login />}  />
      <Route path='/home' element={<Home />}  />
      <Route path='/profile' element={<Profile />} />
     
    </Routes>
   
  )
}
