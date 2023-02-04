import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className='about'>
      <h2>The Profile!</h2>
      <article style = {{
        fontFamily: "Shadows into Light"
      }}>
        Founded in 2020 and Located in the heart of Nairobi city, Day Vees Furniture store offers an inimitable selection of furniture for both indoor and outdoor use. We have been supplying
        a myriad of customers that include individuals as well as luxury restaurants, hotels, and cruise ships. Our products are mainly made of PVCs, Wood, Ceramic, Woven polythene, Rattan, and Bamboo. 
        Visit our store and sample a list of upholstered products among them sofa-beds, chairs, couches, and Dining sets, all under one roof!<hr/>
        <p className='tag' style = {{
          color: "brown"
        }}>
        Alternatively, Visit our "<i>
          <Link to = "/contact" style = {{
            color: "black"
          }}>
          Contact Us  
          </Link>
          </i> " 
          page and place your order!
        </p>
      </article>
    </div>
  )
}

export default About