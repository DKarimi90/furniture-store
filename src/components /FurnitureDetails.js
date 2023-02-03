import React from 'react'
import {useParams} from 'react-router-dom'
import useFetch from '../useFetch'
import {Link} from 'react-router-dom'


function FurnitureDetails() {
    const {id} = useParams()
    const {furniture, isPending, error } = useFetch(`https://json-server-m8mg595x9-dkarimi90.vercel.app/furniture/` + id)
  return (
    <div className='furniture-data'>
        {isPending && <div>Loading...</div>}
        {furniture && 
            <div className='furniture-display'>
                <img src = {furniture.url} alt ="furniture" />
                <div className='right'>
                <p>Price: {furniture.price}</p>
                <p>Color: {furniture.color}</p>
                <p>Status: {furniture.status}</p>
                <p>Bargain: {furniture.bargain}</p>
                <Link to="/" style = {{
                  color: "tomato",
                  textDecoration: "none"
                }}>Back</Link>
                </div>
            </div>}
        {error && <div>{error}</div>}

    </div>
  )
}

export default FurnitureDetails