import React from 'react'
import img1 from './Images/LOGOlogo_A.png'


function Nav() {
  return (
    <>
    <div className='nav'> 
    <div className='one'>
      <img className='img1' src={img1} alt="" />
    </div>
    <div className='two'>
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
        </ul>
    </div>
    </div>
    </>
  )
}

export default Nav
