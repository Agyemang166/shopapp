import React from 'react'
import "./ProductDisplay.css"
import star_icon from "../Assets/star_icon.png"

import Button from 'react-bootstrap/Button';
import RelatedProducts from '../NewCollections/RelatedContent';

const ProductDisplay = (props) => {
    const { product } = props;

    const handleButtonClick = () => {
        const emailContent = `Product: ${product.name}\nPrice: ${product.new_price}\nImage: ${product.image}`;

        // Logic to send the email with the content above
        // You can use your preferred method or library to send the email
        // Make sure to include the necessary email service provider configuration and credentials

        // Example using the 'mailto' approach
        window.location.href = `mailto:philippaasamoah111@gmail.com?subject=Product Details&body=${encodeURIComponent(emailContent)}`;
    };

    return (
        <div className='productdisplay'>
            <div className="row container">
                <div className="col-md-6 sm-12 d-flex">
                    <div className="productdisplay-img-list pt-4">
                        <img src={product.image} alt="Luxhut Apparel" />
                        <img src={product.image1} alt="Luxhut Apparel" />
                        <img src={product.image2} alt="Luxhut Apparel" />
                    </div>
                    <div className="productdisplay-img">
                        <img className='productdisplay-main-img' src={product.image} alt='Luxhut Apparel' />
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
                    <form class="contact-form d-flex justify-content-center container" onSubmit={handleButtonClick}>
                        <div class="row">
                            <div class="col-sm-4 mb-2">
                                <input class="form-control" type="text" name="name" placeholder=" Your Name" required />
                            </div>
                            <div class="col-sm-4 mb-2">
                                <input class="form-control" type="text" name="location" placeholder="Your Location" required />
                            </div>
                            <div class="col-sm-4 mb-2">
                                <input class="form-control" type="text" name="delivery" placeholder="Pickup/Delivery" required />
                            </div>
                            <div class="col-sm-12 mb-2">
                                <input class="form-control text-area" as="text-area" name="message" placeholder="Additional Info,color, size & whatsapp contact" required />
                            </div>
                            <div class="col-sm-12">
                                <Button className='button' type="submit" variant="danger"  onClick={handleButtonClick}>Order Now</Button>
                                <p>NB: Payment Validates Order</p>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
            <RelatedProducts />
        </div>
    )
}

export default ProductDisplay
