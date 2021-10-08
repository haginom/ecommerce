import React, {useState} from 'react'
import * as HiIcons from 'react-icons/hi'
import { BrandFilter, GenderFilter, PriceFilter } from '../components/trainers/Filters'
import { FiltersList } from '../styled/Filters'
import Shoe from '../components/trainers/Shoe'
import { GenderCategories, BrandCategories } from '../components/trainers/FilterData'

const Trainers = () => {
  const [price, setPrice] = useState(0);
  const [gender, setGender] = useState("Women");
  const [brand, setBrand] = useState("Jordan");
  const [filters, setFilters] = useState(false)
  const showFilters = () => setFilters(!filters)
  return (
    <section className='page'>
      <div>
        <p>home / trainers</p>
        <h1>Trainers</h1>
        <hr></hr>
      </div>
      <button onClick={showFilters}>Filter & Sort<span><HiIcons.HiOutlineAdjustments/></span></button>
      <FiltersList filters={filters}> 
        <fieldset>
          <legend>Gender</legend>
          {GenderCategories.map((genderCat) => 
            (<GenderFilter genderCat={genderCat} gender={gender} setGender={setGender}/>)
          )}
        </fieldset>
        <PriceFilter price={price} setPrice={setPrice}/>
        <fieldset>
          <legend>Brand</legend>
          <div id="brand">
            {BrandCategories.map((brandCat) => 
            (<BrandFilter brandCat={brandCat} brand={brand} setBrand={setBrand}/>)
            )}
          </div>
        </fieldset>
      
      
        </FiltersList>

      <Shoe gender={gender} setGender={setGender}
            price={price} setPrice={setPrice}
            brand={brand} setBrand={setBrand}/>

    </section>
  )
}

export default Trainers
