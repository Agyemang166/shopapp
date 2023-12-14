import React from 'react'
import "./ProductDisplay.css"
import star_icon from "../Assets/star_icon.png"

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


    const handleButtonClick = () => {
        alert("Merry Christmas❄️🎄🎅 Lovely Customer. Please, You can order a single item at a time. Happy Shopping from Luxhut Apparel. Add your next item to the cart after this one")
        const emailContent = `Product: ${product.name}\nPrice: ${product.new_price}\nImage: ${product.image}\n\nForm Info:\nBuyer's Name: ${buyername}\nBuyer's Location: ${buyerLocation} \nBuyer's WhatsApp Contact: ${contact}  \nQuantity : ${quantity}\nDelivery Location: ${delivery}\nAdditional Info: ${buyerMessage}`;
 
        window.location.href = `mailto:gyamfiagyemang999@gmail.com?subject=Product Details&body=${encodeURIComponent(emailContent)}`;
    };

    return (
        <div className='productdisplay'>
            <div className="row container">
                <div className="col-md-6 sm-12 d-flex">
                    <div className="productdisplay-img-list pt-4">
                        <img src={product.image2} alt="Luxhut Apparel" />
                        <img src={product.image1} alt="Luxhut Apparel" />
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
                        <div className="product-display-left-price-new">New Price: GH₵{product.new_price}</div>
                        <div className=" text-decoration-line-through text-secondary">Old Price: GH₵{product.old_price}</div>
                    </div>
                    <h6 className='text-center'>PROVIDE ADEQUATE INFORMATION</h6>
                    <hr/>
                    <form class="contact-form d-flex justify-content-center container" onSubmit={handleButtonClick}>
                        <div class="row">
                            <div class="col-sm-4 col-6 mb-2">
                                <input class="form-control" type="text" name="name" onChange={(e) => (buyername = e.target.value)} placeholder=" Your Name" required />
                            </div>
                            <div class="col-sm-4 col-6 mb-2">
                            <input class="form-control" type="text" name="delivery" onChange={(e) => (delivery = e.target.value)} placeholder="Pickup/Delivery" required />
                        </div>
                            <div class="col-sm-4 mb-2">
                                <input class="form-control" type="text" name="location" onChange={(e) => (buyerLocation = e.target.value)} placeholder="Your Location $ Address" required />
                            </div>
                            <div class="col-sm-4 col-6 mb-2">
                                <input class="form-control" type="tel" name="contact" onChange={(e) => (contact = e.target.value)} placeholder="Whatsapp Number" required />
                            </div>
                            <div class="col-sm-4 col-6 mb-2">
                                <input class="form-control" type="tel" name="quatity" onChange={(e) => (quantity = e.target.value)} placeholder="Quantity & size" required />
                            </div>
                            <div class="col-sm-12 mb-2">
                                <input style={{height:"150px"}} class="form-control text-area" as="text-area" onChange={(e) => (buyerMessage = e.target.value)} name="message" placeholder="Give Other Relevant Detailed Description" required />
                            </div>
                            <div class="col-sm-12">
                                <Button className='button' type="submit" variant="danger"  onClick={handleButtonClick}>Order Now</Button>
                                <p>NB: Payment Validates Order. Delivery at a Cost & Nationwide</p>
                            </div>
                            <div class="col-sm-1 mb-2">
                            <input class="form-control text-area" as="text-area" onChange={(e) => (buyerMessage = e.target.value)} name="message" placeholder="" required />
                        </div>
                        </div>
                    </form>

                </div>
            </div>
            <PopularInMen/>
            <PopularCollections/>
            <PopularInWomen/>
        </div>
    )
}

export default ProductDisplay
