import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

import "./Items.css"
import { Link } from 'react-router-dom';

const Items = (props) => {
  return (
    <div className='item m-3'>
    <Link to={`/product/${props.id}`} onClick={window.scroll(0,0)} className='text-decoration-none'>
    <Card className='card-item' style={{border:"2px solid black"}} >
    <div className='img'>
        <img alt='Luxhut Apparel'  src={props.image}/>
    </div>
    <Card.Body style={{background:"#e9f3f3"}}> 
      <p className='title-head'>{props.name}</p>
      <p className="christmas font-bold">Freshers' Akwaaba Sales💚🏫</p>
      <Card.Text className=''>
       <p className='item-price-new text-black '>GH₵ {props.new_price}</p>
       <p  className='px-4 text-[10px]'>{props.campus}</p>
      </Card.Text>
      <Link to={`/product/${props.id}`}>
            <Button className='button' variant="success">Add to Cart</Button>
      </Link>
    </Card.Body>
  </Card>    
    </Link>

    </div>
  )
}

export default Items
