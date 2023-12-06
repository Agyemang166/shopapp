import React from 'react'
import "./Footer.css"
import footer_logo from "../Assets/logo_big.png"
import instagram_icon from "../Assets/instagram_icon.png"
import whatsapp_icon from "../Assets/whatsapp_icon.png"
import { Link } from 'react-router-dom'

const socialLinks = [
    {
        src: whatsapp_icon,
        link: "https://wa.me/233591345224/",
        alt: "Luxhut Apparel Whatsapp Link"
    },
]
const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo d-flex justify-content-center align-items-center ">
                <img src={footer_logo} alt='luxhut Apparel' />
                <p className='m-2'>LUXHUT APPAREL</p>
            </div>
            <div className="footer-social-icon">
                <h6 className='text-center'> Contact Us</h6>
                <div className='d-flex justify-content-center align-items-center'>
                {
                    socialLinks.map(({ link, src, alt }) => {
                        return (
                            <a href={`${link}`} className="footer-icons-container m-2">
                                <img src={src} alt={`${alt}`} />
                            </a>
                        )
                    })
                }                
                </div>
            </div>
            <div className="footer-copyright text-center">
            <hr/>
            <h6>All rights reserved - Copyright @ 2023</h6>
            <h6>Site created by <a href="https://linktr.ee/agyemang166" className='text-decoration-none'>AgyemangDev</a></h6>
            </div>
        </div>
    )
}

export default Footer
