import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
        <div>
        <p>&copy; Copyright David 2023</p>
        </div>
        <div>
        <p>Privacy Policy</p>
        <p >
          <Link to = "/about">Visit About</Link>
          </p>
        </div>
        <div>
          <p>Contacts: 254113312554</p>
          <p>Socials: twitter</p>
        </div>
    </div>
  )
}

export default Footer