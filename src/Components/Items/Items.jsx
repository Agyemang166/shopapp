import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import "./Items.css"
import { Link } from 'react-router-dom';

const Items = (props) => {
  return (
    <div className='item'>
    <Link to={`/product/${props.id}`} onClick={window.scroll(0,0)} className='text-decoration-none'>
    <Card className='card-item' >
    <div className='img'>
        <img alt='Luxhut Apparel'  src={props.image}/>
    </div>
    <Card.Body> 
      <p className='title-head'>{props.name}</p>
      <p className="christmas">Enjoy Christmas Promo🎄❄️🧑‍🎄</p>
      <Card.Text className='d-flex justify-content-between'>
       <p className='item-price-new text-black '>new:GH₵ {props.new_price}</p>
       <p className='item-price-old text-secondary'>old:GH₵ {props.old_price}</p>
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
