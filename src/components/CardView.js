import React from 'react'
import "./cardview.css";

export default function CardView({product}) {
  const {name, price, image} = product
  return (
    <div className='cart__card'>
      <img src={image} alt={name}/>
      <h5>{name}</h5>
      <p>₹ {price}</p>
      <button className='btn-danger' onClick={()=>console.log("Triggred Delete cart")}>Delete</button>
    </div>
  )
}
