import React from 'react'
import men_popular_data from "../Assets/men_popular_data"

import "./Popular.css"

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Items from '../Items/Items'
import udsmen from '../Assets/udsmen';
import knustmen from '../Assets/knustmen';
import ugmen from '../Assets/ugmen';

const PopularInMen = () => {

    const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6
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
    <div className='popular new m-0 p-0'>
      <h1 className='text-center font-pFonts '>NEW MEN'S COLLECTION</h1>
      <hr/>
      <div className="popular-item">
      <Carousel responsive={responsive}  infinite={true} removeArrowOnDeviceType={["tablet", "mobile"]} autoPlay={true} className='px-0' autoPlaySpeed={5500} swipeable={true} draggable={true}>
      {men_popular_data.map((item,i) => {
        return(
            <div className='w-full m-5'>
                       <Items key={i} id={item.id} name={item.name}  image={item.image} new_price={item.new_price} old_price={item.old_price} />
            </div>
        )
      })}      
      </Carousel>
      </div>
      <h1 className='text-center font-pFonts '>FOR MEN ON KNUST CAMPUS</h1>
      <hr/>
      <div className="popular-item">
      <Carousel responsive={responsive}  infinite={true} removeArrowOnDeviceType={["tablet", "mobile"]} autoPlay={true} className='px-0' autoPlaySpeed={5500} swipeable={true} draggable={true}>
      {knustmen.map((item,i) => {
        return(
            <div className='w-full m-5'>
                       <Items key={i} id={item.id} name={item.name}  image={item.image} new_price={item.new_price} old_price={item.old_price} />
            </div>
        )
      })}      
      </Carousel>
      </div>
      <h1 className='text-center font-pFonts '>FOR MEN ON UG CAMPUS</h1>
      <h5 className="text-center">Want to advertise your prodcuts for this section? Kindly contact +233 59 134 5224</h5>

      <hr/>
      <div className="popular-item">
      <Carousel responsive={responsive}  infinite={true} removeArrowOnDeviceType={["tablet", "mobile"]} autoPlay={true} className='px-0' autoPlaySpeed={5500} swipeable={true} draggable={true}>
      {ugmen.map((item,i) => {
        return(
            <div className='w-full m-5'>
                       <Items key={i} id={item.id} name={item.name}  image={item.image} new_price={item.new_price} old_price={item.old_price} />
            </div>
        )
      })}      
      </Carousel>
      </div>
      <h1 className='text-center font-pFonts '>FOR MEN ON UDS CAMPUS</h1>
      <h5 className="text-center">Want to advertise your prodcuts for this section? Kindly contact +233 59 134 5224</h5>

      <hr/>
      <div className="popular-item">
      <Carousel responsive={responsive}  infinite={true} removeArrowOnDeviceType={["tablet", "mobile"]} autoPlay={true} className='px-0' autoPlaySpeed={5500} swipeable={true} draggable={true}>
      {udsmen.map((item,i) => {
        return(
            <div className='w-full m-5'>
                       <Items key={i} id={item.id} name={item.name}  image={item.image} new_price={item.new_price} old_price={item.old_price} />
            </div>
        )
      })}      
      </Carousel>
      </div>
    </div>
  )
}

export default PopularInMen
