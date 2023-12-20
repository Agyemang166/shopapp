import React, { useState } from 'react'
import "./ProductDisplay.css"
import star_icon from "../Assets/star_icon.png"

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

import Button from 'react-bootstrap/Button';
import PopularInMen from '../Popular/PopularInMen';
import PopularInWomen from '../Popular/PopularInWomen';
import PopularCollections from '../Popular/PopularCollections';

const ProductDisplay = (props) => {
    const { product } = props;

    let buyername;
    let buyerLocation;
    let delivery;
    let buyerMessage;
    let contact;
    let quantity;
    const [validated, setValidated] = useState(false);

    const handleButtonClick = (e) => {
        const form = e.currentTarget;
        e.preventDefault();
        e.stopPropagation();
        if (form.checkValidity() === false) {
            setValidated(true);
        } else {
            setValidated(true);
            alert("Merry Christmas❄️🎄🎅 Lovely Customer! Please note that you can only order one item at a time. Happy Shopping from Luxhut Apparel. After adding this item to your cart, you can proceed to add the next one.");

            const emailContent = `
            Product: ${product.name}\n
            Price: ${product.new_price}\n
            Image: ${product.image}\n\n
            Name: ${form.elements["validationCustom01"].value}\n
            Contact: ${form.elements["validationCustom03"].value}\n
            Location: ${form.elements["validationCustom04"].value}\n
            Quantity & Size: ${form.elements["validationCustom05"].value}\n
            Extra Relevant Info: ${form.elements["validationCustom06"].value}\n
            Pickup Option: ${ form.elements["pickup"].checked ? "Pick up" : "Delivery"}`;

            window.location.href = `mailto:gyamfiagyemang999@gmail.com?subject=Product Details&body=${encodeURIComponent(emailContent)}`;
        }
    };

    return (
        <div className='productdisplay'>
            <div className="row container">
                <div className="col-md-6 sm-12 d-flex">
                    <div className="productdisplay-img-list pt-4">
                        <a href={product.image1} data-lightbox="gallery-name" >
                            <img src={product.image1} alt="Luxhut Apparel" />
                        </a>
                        <a href={product.image} data-lightbox="gallery-name" >
                            <img src={product.image} alt="Luxhut Apparel" />
                        </a>
                        <a href={product.image2} data-lightbox="gallery-name" >
                            <img src={product.image2} alt="Luxhut Apparel" />
                        </a>

                    </div>
                    <div className="productdisplay-img">
                        <a href={product.image} data-lightbox="gallery-name" >
                            <img src={product.image} className='productdisplay-main-img' alt="Luxhut Apparel" />
                        </a>
                    </div>
                </div>

                <div className="col-md-6 sm-12 pt-5">
                    <h1>{product.name}</h1>
                    <div className='d-flex'>
                        <img src={star_icon} alt='Luxhut Apparel' />
                        <img src={star_icon} alt='Luxhut Apparel' />
                        <img src={star_icon} alt='Luxhut Apparel' />
                        <img src={star_icon} alt='Luxhut Apparel' />
                        <img src={star_icon} alt='Luxhut Apparel' />
                    </div>
                    <div className="product-display-right-prices d-flex justify-content-around">
                        <div className="product-display-left-price-new">New Price: GH₵{product.new_price}</div>
                        <div className=" text-decoration-line-through text-secondary">Old Price: GH₵{product.old_price}</div>
                    </div>
                    <h6 className='text-center'>PROVIDE ADEQUATE INFORMATION</h6>
                    <hr />

                    <Form noValidate validated={validated} onSubmit={handleButtonClick}>

                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" xs='6' controlId="validationCustom01">
                                <Form.Label>NAME</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Input Your Name"
                                    defaultValue=""
                                />
                                <Form.Control.Feedback type="invalid">
                                    Provide a valid  Name
                                </Form.Control.Feedback>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" xs="6" controlId="validationCustom03">
                                <Form.Label> CONTACT</Form.Label>
                                <Form.Control type="tel" placeholder="Contact" required />
                                <Form.Control.Feedback type="invalid">
                                    Provide a valid  contact
                                </Form.Control.Feedback>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">

                            <Form.Group as={Col} md="4" xs="6" controlId="validationCustom04">
                                <Form.Label>LOCATION</Form.Label>
                                <Form.Control type="text" placeholder="Input Location/Address" required />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid location.
                                </Form.Control.Feedback>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" xs="6" controlId="validationCustom05">
                                <Form.Label>QUANTITY & SIZE</Form.Label>
                                <Form.Control type="text" placeholder="Quantity & Size" required />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a quantity & size
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom06">
                                <Form.Label>DETAILED INFO</Form.Label>
                                <Form.Control type="text" placeholder="Extra Relevant Information" required />
                                <Form.Control.Feedback type="invalid">
                                    Provide Relevant Information
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row>
                        </Row>
                        <Form.Check
                        type="radio"
                        name="pickup"
                        label="Pick up"
                        id="radio1"
                      />
                      <Form.Check
                        type="radio"
                        name="delivery"
                        label="Delivery"
                        id="radio2"
                      />
                        <Form.Group className="mb-3">
                            <Form.Check
                                required
                                label="Agree to payment validates order"
                                feedback="You must agree before submitting."
                                feedbackType="invalid"
                            />
                        </Form.Group>
                        <Button type="submit">ORDER NOW</Button>
                    </Form>

                </div>
            </div>
            <PopularInMen />
            <PopularCollections />
            <PopularInWomen />
        </div>
    )
}

export default ProductDisplay
