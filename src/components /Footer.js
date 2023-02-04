import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
        <div>
        <p>Privacy Policy</p>
        <p>&copy; Copyright David 2023</p>
        
        </div>
        <div>
        <p>
          <Link to ="/">Back Home</Link>
          </p>
        <p >
          <Link to = "/about">Visit About</Link>
          </p>
        </div>
        <div>
          <p>Contacts: 254113312554</p>
          <p>Socials</p>
        </div>
    </div>
  )
}

export default Footer