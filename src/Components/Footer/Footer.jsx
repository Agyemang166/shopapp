import React from 'react'
import "./Footer.css"
import footer_logo from "../Assets/logo_big.png"
import { FaWhatsapp, FaTiktok,FaSnapchat } from "react-icons/fa";

const socialLinks = [
    {
        icon: FaWhatsapp,
        link: "https://wa.me/233591345224/",
        alt: "Luxhut Apparel Whatsapp Link"
    },
    {
        icon: FaSnapchat,
        link: "https://www.snapchat.com/add/philippa4353?share_id=MP1Nf88pYfg&locale=en-GH",
        alt: "Luxhut Apparel Snapchat Link"
    },
    {
        icon: FaTiktok,
        link: "https://www.tiktok.com/@philippa.asamoah?_t=8hxwJkede8j&_r=1",
        alt: "Luxhut Apparel Tiktok Link"
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
                    socialLinks.map(({ link, icon, alt }) => {
                        const Icon = icon
                        return (
                            <a href={`${link}`} className="footer-icons-container m-2">
                                <Icon size={40} color='black'/>
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
