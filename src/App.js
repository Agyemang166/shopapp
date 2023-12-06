import "./App.css";
import NavBar from "./Components/NavBar/NavBar";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCartegory from "./Pages/ShopCartegory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
    <BrowserRouter>
         <NavBar /> 
         <Routes>
          <Route path="/" element={<Shop/>}/>
          <Route path="/mens" element={<ShopCartegory category="mens"/> }/>
          <Route path="/womens" element={<ShopCartegory category="womens"/>}/>
          <Route path="/kids" element={<ShopCartegory category="kids"/>}/>
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
