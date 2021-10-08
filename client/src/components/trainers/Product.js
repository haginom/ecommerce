import React from 'react'

const Product = ({image, title, price}) => {
  return (       
      <div className='productContainer'>
          <div className='productImage'><img src={image} alt='bought-product' /></div>
          <div><p>{title}</p></div>
          <p>${price}</p>
      </div>
 
  )
}

export default Product
