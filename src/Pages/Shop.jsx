import React from 'react'
import Hero from '../Components/Hero/Hero'
import PopularInWomen from '../Components/Popular/PopularInWomen'
import PopularInMen from '../Components/Popular/PopularInMen'
import PopularCollections from '../Components/Popular/PopularCollections'


const Shop = () => {
  return (
    <div >
      <Hero/>    
      <PopularCollections/> 
      <PopularInWomen/>
      <PopularInMen/>

    </div>
  )
}

export default Shop
