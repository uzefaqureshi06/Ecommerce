import React from 'react'
import { NavLink } from 'react-router-dom'


const Product = ({product}) => {
  return (
    <>
       <div className="col-4">
       <NavLink to="/details/1">
                <img src={product.image} alt=""/>
                </NavLink>
                <h4>{product.name}</h4>
                <div className="rating">
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star-half'></i>
                </div>
                <p>${product.price}.00</p>
            </div>
           
           
    </>

    
  )
}

export default Product
