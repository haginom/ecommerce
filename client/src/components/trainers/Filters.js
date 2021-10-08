import React from "react";

const GenderFilter = ({ genderCat, gender, setGender }) => {
  const handleChange = (e) => { 
    setGender(e.target.value)
  }
  return (
      <label 
      className="gender" 
      htmlFor={genderCat} 
      key={genderCat}
      style={ genderCat === gender? {background: '#f9aa8f'}: {background: '#f4f1de'}}>
        {genderCat}
        <input
          type="radio"
          name="genderCategories"
          id={genderCat}
          value={genderCat}
          checked={genderCat === gender}
          onChange={handleChange}
        />
      </label>
  );
}

const PriceFilter = ({ price, setPrice }) => {
  return (
    <fieldset>
            <legend>Price</legend>
            <label htmlFor="price">
              <span>$0</span>
              <input
                type="range"
                id="price"
                min="0"
                max="500"
                step="0.25"
                value={price}
                className="slider"
                onChange={(event) => setPrice(event.target.value)}
              />
              <span>$500</span>
            </label>
            
          </fieldset>

  )
}

const BrandFilter = ({ brandCat, brand, setBrand }) => {
  const handleChange = (e) => {
    setBrand(e.target.value)
  }
  return (
        <label 
          className="brandLabel" 
          htmlFor={brandCat} 
          key={brandCat}
          style={ brandCat === brand? {background: '#f9aa8f'}: {background: '#f4f1de'}}>
            {brandCat}
            <input
              type="radio"
              name="genderCategories"
              id={brandCat}
              value={brandCat}
              checked={brandCat === brand}
              onChange={handleChange}
            />
        </label>
      
  );
}


export {GenderFilter, PriceFilter, BrandFilter} 