import React from 'react'
import AccordionData from './AccoridonData'
import Accordion  from '../accordion/Accordion'
import Product from '../trainers/Product'

const LogOutPage = ({logIn, userName}) => {
  return (
    <div className='page'>
        <h1>Welcome back {userName}!</h1>

        <div className="accordion">
        {AccordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
        </div>
        <hr></hr>
        <div id="myOrders">
          <h2 id="myOrders">My Orders</h2>
          <h3>Order from Oct 06, 2021</h3>
          <Product image={"./product2.png"} title={"adidas Ultra 4D Miami Hurricane"} price={223}/>
          <Product image={"./product1.png"} title={"Air Jordan 1 Low Crater Black Grey"} price={110}/>
          <p id="track">Track Shipment</p>
          <h3>Order from June 21, 2021</h3>
          <Product image={"./product.png"} title={'Nike SB Dunk High Pro ISO Orange'} price={130}/>
        </div>
        <div>
        <hr></hr>
        <h2>Top Picks for you</h2>
          <Product image={"./product3.png"} title={'adidas NMD Hu Pharrell Human Race Triple Black Pack'} price={215}/>
        </div>
        
        <button onClick={logIn}>Log Out</button>
    </div>
  )
}

export default LogOutPage
