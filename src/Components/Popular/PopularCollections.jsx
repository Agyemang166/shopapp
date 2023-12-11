import React from 'react'
import new_collections from '../Assets/new_collections'

import "./Popular.css"

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Items from '../Items/Items'
import all_product from '../Assets/all_product';


const PopularCollections = () => {

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
     <div className='popular new m-0 p-0'>
      <h1 className='text-center font-pFonts '>POPULAR FOR GENDER INCLUSIVE</h1>
      <hr/>
      <div className="popular-item">
      <Carousel responsive={responsive}  infinite={true} removeArrowOnDeviceType={["tablet", "mobile"]} autoPlay={true} className='px-0' autoPlaySpeed={5000} swipeable={true} draggable={true}>
      {new_collections.map((item,i) => {
        return(
            <div className='w-full m-5'>
                       <Items key={i} id={item.id} name={item.name}  image={item.image} new_price={item.new_price} old_price={item.old_price} />
            </div>
        )
      })}      
      </Carousel>
      </div>
      <h1 className='text-center font-pFonts '>JUST IN</h1>
      <hr/>
      <div className="popular-item">
      <Carousel responsive={responsive}  infinite={true} removeArrowOnDeviceType={["tablet", "mobile"]} autoPlay={true} className='px-0' autoPlaySpeed={5000} swipeable={true} draggable={true}>
      {all_product.map((item,i) => {
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

export default PopularCollections
