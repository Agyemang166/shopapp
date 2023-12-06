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
      <Card.Title>{props.name}</Card.Title>
      <Card.Text className='d-flex justify-content-between'>
       <p className='item-price-new text-black '>{props.new_price}</p>
       <p className='item-price-old text-gray'>{props.old_price}</p>
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
    </div>
  )
}

export default Items
