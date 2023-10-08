import React from 'react'
import av from "./Images/Group.png"

function Avatar() {
  return (
    <div className='avatar'>
        
        <div className='frame'>

          <img className='av' src={av} alt="" />

        </div>
      
    </div>
  )
}

export default Avatar
