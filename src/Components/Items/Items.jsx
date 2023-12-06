import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import "./Items.css"

const Items = (props) => {
  return (
    <div className='item'>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" style={{height: "200px"}} src={props.image}/>
    <Card.Body>
      <Card.Title className='title'>{props.name}</Card.Title>
      <Card.Text className='d-flex justify-content-between'>
       <p className='item-price-new text-black '>new:$ {props.new_price}</p>
       <p className='item-price-old text-secondary'>old:$ {props.old_price}</p>
      </Card.Text>
    </Card.Body>
  </Card>
    </div>
  )
}

export default Items
