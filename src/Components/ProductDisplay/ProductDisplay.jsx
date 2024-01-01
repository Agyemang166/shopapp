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

    const [validated, setValidated] = useState(false);

    const handleButtonClick = (e) => {
        const form = e.currentTarget;
        e.preventDefault();
        e.stopPropagation();
        if (form.checkValidity() === false) {
            setValidated(true);
        } else {
            setValidated(true);
            alert(` Congrats on your order! 🎉 The ${product.name} you ordered is available on ${product.campus}.
            No delivery fee within ${product.campus}. If you're elsewhere, you would cover the delivery fee.
            Enjoy your purchase! 🛍️🎁🚚💨`);

            const emailContent = `
            Product: ${product.name}\n
            Price: ${product.new_price}\n
            Customer's Name: ${form.elements["validationCustom01"].value}\n
            Contact: ${form.elements["validationCustom03"].value}\n
            Location: ${form.elements["validationCustom04"].value}\n
            Quantity & Size: ${form.elements["validationCustom05"].value}\n
            Extra Relevant Info: ${form.elements["validationCustom06"].value}\n
            Pickup Option: ${ form.elements["Delivery Option"].checked ? "Pick up" : "Delivery"}\n
            
            Image: ${product.image}\n\n
            `;

            window.location.href = `mailto:${product.email}?subject=Product Details&body=${encodeURIComponent(emailContent)}`;
        }
    };

    return (
        <div className='productdisplay'>
            <div className="row container">
                <div className="col-md-6 sm-12 d-flex">
                    <div className="productdisplay-img-list pt-4">
                        <a href={product.image1} data-lightbox="gallery-name" >
                            <img src={product.image1} alt="Campus Online Shop" />
                        </a>
                        <a href={product.image} data-lightbox="gallery-name" >
                            <img src={product.image} alt="Campus Online Shop" />
                        </a>
                        <a href={product.image2} data-lightbox="gallery-name" >
                            <img src={product.image2} alt="Campus Online Shop" />
                        </a>

                    </div>
                    <div className="productdisplay-img">
                        <a href={product.image} data-lightbox="gallery-name" >
                            <img src={product.image} className='productdisplay-main-img' alt="Campus Online Shop" />
                        </a>
                    </div>
                </div>

                <div className="col-md-6 sm-12 pt-5">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>              
                      <p>{product.description}</p>

                    <div className='d-flex'>
                        <img src={star_icon} alt='Campus Online Shop' />
                        <img src={star_icon} alt='Campus Online Shop' />
                        <img src={star_icon} alt='Campus Online Shop' />
                        <img src={star_icon} alt='Campus Online Shop' />
                        <img src={star_icon} alt='Campus Online Shop' />
                    </div>
                    <Button variant="success mt-3 text-white">
                                        <a href={product.contact} className='text-decoration-none text-white'>Chat With Dealer</a>
                    </Button>

                    <div className="product-display-right-prices d-flex justify-content-around">
                        <div className="product-display-left-price-new"> Price: GH₵{product.new_price}</div>
                        <div className="text-secondary">{product.campus} sales</div>
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
                        name="Delivery Option"
                        label="Pick up"
                        id="radio1"
                      />
                      <Form.Check
                        type="radio"
                        name="Delivery Option"
                        label="Delivery"
                        id="radio2"
                      />
                        <Form.Group className="mb-3">
                            <Form.Check
                                required
                                label={`Agree to payment validates order. You are ordering from ${product.campus}`}
                                feedback="You must agree before submitting."
                                feedbackType="invalid"
                            />
                        </Form.Group>
                        <button
                        type="submit"
                        className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        ORDER NOW
                      </button>
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
