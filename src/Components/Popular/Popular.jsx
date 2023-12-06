import React from 'react'
import data_product from "../Assets/data"

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Items from '../Items/Items'

const Popular = () => {

    const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr/>
      <div className="popular-item ">
      <Carousel responsive={responsive} infinite={true} removeArrowOnDeviceType={["tablet", "mobile"]} autoPlay={true} className='px-5' autoPlaySpeed={3000} swipeable={true} draggable={true}>
      {data_product.map((item,i) => {
        return(
           <Items key={i} id={item.id} name={item.name}  image={item.image} new_price={item.new_price} old_price={item.old_price} />
        )
      })}      
      </Carousel>
      </div>
    </div>
  )
}

export default Popular
