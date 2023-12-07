import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import "./Items.css"
import { Link } from 'react-router-dom';

const Items = (props) => {
  return (
    <div className='item'>
    <Link to={`/product/${props.id}`} onClick={window.scroll(0,0)} className='text-decoration-none'>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" style={{height: "300px"}} src={props.image}/>
    <Card.Body>
      <Card.Title className='title'>{props.name}</Card.Title>
      <Card.Text className='d-flex justify-content-between'>
       <p className='item-price-new text-black '>new:GH₵ {props.new_price}</p>
       <p className='item-price-old text-secondary'>old:GH₵ {props.old_price}</p>
      </Card.Text>
      <Link to={`/product/${props.id}`}>
            <Button variant="success">Add to Cart</Button>
      </Link>
    </Card.Body>
  </Card>    
    </Link>

    </div>
  )
}

export default Items
