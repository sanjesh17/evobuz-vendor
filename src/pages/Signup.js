import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Register from '../containers/signup/Register'


const Signup = () => {
  return (
    <div className='Signup'>
      <div className="gradient__bg">
        <Navbar />
        <Register />
      </div>
    </div>  
)
}

export default Signup