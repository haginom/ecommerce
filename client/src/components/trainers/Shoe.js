import React, {useState} from 'react'
import { useEffect } from 'react'
import { ShoeGrid, ShoeItem } from '../../styled/Shoes';
import {Link} from 'react-router-dom'

const Shoe = ({price, gender, brand}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8626/alltrainers',
    {
      "method": "GET",
      "headers": {
        "gender": gender,
        "brand": brand
      }
    })
  .then(response => response.json())
  .then(data => {
    setItems(data.results)
    setIsLoaded(true)
  })
  .catch(err => {
    console.error(err);
  });
}, [gender, brand, price, setItems]) 

  if (!isLoaded) {
    return <>loading...</>;
  } else {
    return (
      <section>
          <ShoeGrid>
            {items.map((shoe) => (
              <Link key={shoe.id} to={`/trainers/${shoe.id}`}>
              <ShoeItem>
                <img className='gallery-item' src={shoe.media.thumbUrl} alt={shoe.shoe}/>
                <h4>{shoe.brand}</h4>
                <p>{shoe.shoe}</p>
                {shoe.retailPrice === 0 ? <span>SOLD OUT</span>: <span>${shoe.retailPrice}</span>}
               
              </ShoeItem>
              </Link>
            ))}
          </ShoeGrid>
        </section>
    )
  }
}

export default Shoe;