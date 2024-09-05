import React from 'react'
import Product from '../components/Product'
import { clothes } from './data/app'

const Products = () => {
  return (

    <div className='row'>
    
    
{clothes.map((item)=>{
  return(
    <>
    <Product product={item}/>
  
  
    </>
    
  )
})}
<div class="page-btn">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>&#8594;</span>
        </div>
    </div>
  )
}

export default Products
