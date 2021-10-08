import React from 'react'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { ImageWrapper, ProductInfo, Choices } from '../styled/Product'
import * as FaIcons from 'react-icons/fa'
import {Link} from 'react-router-dom'


const TrainersId = () => {
  const [size, setSize] = useState("4")
  console.log(size)
  const [isLoaded, setIsLoaded] = useState(false);
  const [item, setItem] = useState([]);
  const {trainersId} = useParams()

  useEffect(() => {
    fetch('http://localhost:8626/trainers',
    {
      "method": "GET",
      "headers": {
        "TrainersId": trainersId
      }
    })
  .then(response => response.json())
  .then(data => {
    setItem(data.results)
    setIsLoaded(true)
  })
  .catch(err => {
    console.error(err);
  });
}, [trainersId]) 
  
    if (!isLoaded) {
      return <>loading...</>;
    }
    else if(item.length === 0){
      return <>loading...</>;
    } else {
      return (
        <section>
          <ImageWrapper>
            <img src={item[0].media.imageUrl} alt={`pic of ${item.brand}`}></img>
            <h2>{item[0].title}</h2>
          </ImageWrapper>
          
          <ProductInfo>
            <div>
              <FaIcons.FaStar/>
              <FaIcons.FaStar/>
              <FaIcons.FaStar/>
              <FaIcons.FaStar/>
              <FaIcons.FaStar/> 
              <span>(24)</span> 
            </div>
            <div>
              <h2>$ {item[0].retailPrice}</h2>
              <p>{item[0].colorway}</p>
            </div>
          </ProductInfo>
          <Choices>
            <hr></hr>
            <label for="colours">Choose a colour:</label>
            <select name="colours" id="colours">
              <option value={item[0].colorway}>{item[0].colorway}</option>
            </select>

            <label for="size">Select a size:</label>
            <div>
              <select 
                  value={size}
                  onChange={setSize(size)}
                  name="size" id="size">
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
              </select>
              <span>8 Left</span>
            </div>
            <Link to="/customerservice/sizechart">Size Guide</Link>

            <button>Add to Cart</button>
            <span>Price incl. VAT and excl. shipping. Delivery in 2-5 working days.</span>
          </Choices>

         
          </section>
      )
    }
}

export default TrainersId
