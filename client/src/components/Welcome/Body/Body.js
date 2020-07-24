import React from 'react'
import './Body.css'
import Login from './Login/Login'
import Signup from './Signup/Signup'
const Body = () => (
    <div className='body container'>
        <Login />
        <Signup />
    </div>
)

export default Body