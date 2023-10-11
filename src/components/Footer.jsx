import React from 'react'
import { HashLink as Link } from "react-router-hash-link"

function Footer() {
  return (
    <div className='footer'>
          <ul>
            <li><Link className='smart' to="#nn">
            &uarr;
            </Link></li>
            <li><Link className='smart' to="#nn">
            &uarr;
            </Link></li>
          </ul>
        </div>
  )
}

export default Footer
