import { useState } from "react";
import { Routes, Route,BrowserRouter } from "react-router-dom";
import "./App.css";

import { FavoritesProvider } from './Components/FavoritesContext';


// Components
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import MiniFooter from "./Components/MiniFooter";

// Pages
import Home from "./Components/Home";
import Shop from "./Components/Shop";
import Contact from "./Components/Contact";
import Blog from "./Components/Blog";
import Profile from "./Components/Profile";
import Search from "./Components/Search";
import Product from "./Components/Product";
import Products from "./Components/Products";
import Cart from "./Components/Cart";
import CartSidebar from "./Components/CartSidebar";
import Checkout from "./Components/Checkout";
import Compare from "./Components/Compare";
import FavoritesPage from "./Components/FavoritesPage";
import Info from "./Components/Info";
import Share from "./Components/Share";
import About from "./Components/About";
import { CartProvider } from "./Contexts/CartContext";
import ProductCard from "./Components/ProductCard";
import ProductPage from "./Pages/ProductPage";


const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <div>
      <BrowserRouter basename="/Furniture-store">
      <CartProvider>
      <FavoritesProvider>
      <Navbar cartItems={cartItems} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/shop" element={<Shop addToCart={addToCart}/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<Search />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart cartItems={cartItems}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity} />} />
        <Route path="/cart-sidebar" element={<CartSidebar />} />
        <Route path="/checkout" element={<Checkout cartItems={cartItems}/>} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/info" element={<Info />} />
        <Route path="/share" element={<Share />} />
        <Route path="/about" element={<About />} />
         <Route path="/productcard" element={<ProductCard addToCart={addToCart}/>} />
        <Route path="/favourites" element={<FavoritesPage />} />
         <Route path="/product/:id" element={<ProductPage addToCart={addToCart} />} />
   
      </Routes>
      <MiniFooter />
      <Footer />
      </FavoritesProvider>
      </CartProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
