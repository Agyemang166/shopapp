import "./App.css";
import NavBar from "./Components/NavBar/NavBar";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Footer from "./Components/Footer/Footer";

import men_banner from "./Components/Assets/banner_mens.png"
import women_banner from "./Components/Assets/banner_women.png"
import perfume_banner from "./Components/Assets/perfume_banner.jpg"
import shoes_banner from "./Components/Assets/shoes_banner.jpg"
import jewelries_banner from "./Components/Assets/jewelries_banner.jpeg"

import 'lightbox2/dist/css/lightbox.min.css';
import 'lightbox2/dist/js/lightbox.min.js';

function App() {
  return (
    <div>
    <BrowserRouter>
         <NavBar /> 
         <Routes>
          <Route path="/" element={<Shop/>}/>
          <Route path="/mens" element={<ShopCategory banner={men_banner} category="men"/> }/>
          <Route path="/womens" element={<ShopCategory banner={women_banner} category="women"/>}/>
          <Route path="/perfumes" element={<ShopCategory banner={perfume_banner} category="perfume"/>}/>
          <Route path="/footwear" element={<ShopCategory banner={shoes_banner} category="footwear"/>}/>
          <Route path="/jewelries" element={<ShopCategory banner={jewelries_banner} category="jewelries"/>}/>
          <Route path="/product" element={<Product/>}>
           <Route path=":productId" element={<Product/>}/>
          </Route> 
          </Routes>
         <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
