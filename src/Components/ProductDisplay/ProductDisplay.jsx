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
        window.location.href = `mailto:gyamfiagyemang@gmail.com?subject=Product Details&body=${encodeURIComponent(emailContent)}`;
      };

    return (
        <div className='productdisplay'>
            <div className="row container">
                <div className="col-md-6 sm-12 d-flex">
                    <div className="productdisplay-img-list pt-4">
                        <img src={product.image} alt="Luxhut Apparel" />
                        <img src={product.image} alt="Luxhut Apparel" />
                        <img src={product.image} alt="Luxhut Apparel" />
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
                        <div className="product-display-left-price-newr">New Price: ${product.new_price}</div>
                        <div className=" text-decoration-line-through text-secondary">Old Price: ${product.old_price}</div>
                    </div>
                    <Button className='button' variant="danger" onClick={handleButtonClick}>Order Now</Button>                </div>
            </div>
            <RelatedProducts/>
        </div>
    )
}

export default ProductDisplay
