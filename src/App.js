import "./App.css";
import NavBar from "./Components/NavBar/NavBar";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Footer from "./Components/Footer/Footer";

import men_banner from "./Components/Assets/banner_mens.png"
import women_banner from "./Components/Assets/banner_women.png"

function App() {
  return (
    <div>
    <BrowserRouter>
         <NavBar /> 
         <Routes>
          <Route path="/" element={<Shop/>}/>
          <Route path="/mens" element={<ShopCategory banner={men_banner} category="men"/> }/>
          <Route path="/womens" element={<ShopCategory banner={women_banner} category="women"/>}/>
          <Route path="/product" element={<Product/>}>
           <Route path=":productId" element={<Product/>}/>
          </Route> 
                   <Route path="/cart" element={<Cart/>}/>         
          </Routes>
         <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
