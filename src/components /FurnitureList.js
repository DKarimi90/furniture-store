import React from 'react'
import {Link} from 'react-router-dom'

function FurnitureList( {furniture} ) {
  return (
    <div className='furniture-list'>
        {furniture.map((item) => (
            <div className='furniture' key = {item.id}>
                <Link to={`/furniture/${item.id}`}>
                <img src = {item.url} alt ="furniture" />
                <p style = {{
                  textAlign: "center"
                }}>{item.signage}</p>
                  <p style = {{
                    fontSize: "10px", 
                    textAlign: "center"
              
                    
                  }}>more...</p>
                </Link>
            </div>
        ))}
    </div>
  )
}

export default FurnitureList