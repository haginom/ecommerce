import React from 'react'
import {Ads, Insta, Callout} from '../components/Ads'


const Home = () => {
  return (
    <>
    <div className='marketing'>
        <h1>Treat Your Feet</h1>
        <h2>Have 20% off, on us</h2>
        <p>Use Code: SELECT20</p>
    </div>
    <div className='page'>
      <Ads title={"Explore Women's Shoes"} imgSrc={"/ad1.jpg"}/>
      <Ads title={"Explore Men's Shoes"} imgSrc={"/ad2.jpg"}/>
      <Insta/>
      <Callout title={"Newsletter"} text={"Get News, Offers and Discounts."} button={"Subscribe"}>
        <input type="text" placeholder="email"></input>
      </Callout>
      <Callout title={"My Orders"} text={"Sign in to see orders you placed"} button={"See Orders"} path={"/signup"}/>
      <Callout title={"Shipping and Delivery FAQ"} text={"Need Answers?"} button={"Read our FAQ"} path={"/customerservice/faqs"}/>
    </div>


    </>
  )
}

export default Home
