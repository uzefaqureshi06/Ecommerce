import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
        <NavLink to='/'><img className='low' src="/images/logo.png" width="125px" alt="" /></NavLink>
        
        </div>
        <nav>
          <ul>
         
            <li><NavLink to='/products'>Products</NavLink></li>
           
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">Account</a></li>
            <li>
            <NavLink to='cart'><img src="/images/cart.png" width="30px" height="30px" alt="Bag" /></NavLink>
               
             
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Navbar

