import React, { useState } from 'react'
import "./NavBar.css"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Logo from "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png"
import { Link } from 'react-router-dom';

const navData = [
    {
        key: 1,
        anchor : "/",
        name: "Shop",
        subname: "shop"
    },
    {
        key: 2,
        anchor : "/mens",
        name: "Men",
        subname: "mens"
    },
    {
        key: 3,
        anchor : "/womens",
        name: "Women",
        subname: "Womens"
    },
]
const NavBar = () => {
    
    const [menu, setMenu] = useState("shop")

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <div href="#home" className='nav-logo d-flex justify-content-center align-items-center'>
                    <img src={Logo} alt='luxhut apparel' />
                    <p className='mt-3'>Luxhut Apparel</p>
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto ml-5 nav-menu mt-3">
                {
                    navData.map(({key, anchor, name, subname}) => {
                        return (
                          <Link
                                to={`${anchor}`}
                                key={`${key}`}
                                className="text-decoration-none text-dark"
                                onClick={() => setMenu(subname)}
                            >
                            {name} {menu === subname ? <hr /> : null}
                            </Link>
                        );
                    })
                }
                    </Nav>
                    <div className='nav-cart d-flex'>
                    <Link to="/cart">
                                        <img src={cart_icon} alt='Luxhut Apparel'/>
                    </Link>
                    <div className='nav-cart-count d-flex align-items-center justify-content-center'>0</div>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
