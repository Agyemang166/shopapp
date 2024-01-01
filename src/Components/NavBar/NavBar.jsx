import React, { useState } from "react";
import "./NavBar.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Logo from "../Assets/logo.jpeg";
import { Link } from "react-router-dom";

const navData = [
  {
    key: 1,
    anchor: "/",
    name: "Shop",
    subname: "shop",
  },
  {
    key: 2,
    anchor: "/womens",
    name: "Women",
    subname: "Womens",
  },
  {
    key: 3,
    anchor: "/mens",
    name: "Men",
    subname: "mens",
  },
  {
    key: 4,
    anchor: "/perfumes",
    name: "Perfume",
    subname: "perfume",
  },
  {
    key: 5,
    anchor: "/footwear",
    name: "Footwear",
    subname: "footwear",
  },
  {
    key: 6,
    anchor: "/jewelries",
    name: "Jewelries",
    subname: "jewelries",
  },
];
const NavBar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <Navbar expand="lg" className="bg-body-tertiary sticky-top">
      <Container>
        <div
          href="#home"
          className="nav-logo d-flex justify-content-center align-items-center"
        >
          <img src={Logo} alt="Campus Online Shop" className="pr-3" style={{width:"50px"}} />
          <p className="mt-3 p-1 font-extrabold">Campus Online Shop</p>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ml-5 nav-menu mt-3">
            {navData.map(({ key, anchor, name, subname }) => {
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
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
