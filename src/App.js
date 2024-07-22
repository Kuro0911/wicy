import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/base/Footer";
import { Landing } from "./components/base/Landing";
import { Kids } from "./components/collections/Kids";
import { Men } from "./components/collections/Men";
import { Navbar } from "./components/base/Navbar";
import { New } from "./components/collections/New";
import { Offer } from "./components/base/Offer";
import { Woman } from "./components/collections/Woman";
import { ShoppingCart } from "./components/base/ShoppingCart";
import { ProductDetails } from "./components/base/ProductDetails";
import { CartProvider } from "./utils/CartContext";
import { FullCollection } from "./components/full/FullCollection";

function App() {
  return (
    <Router>
      <CartProvider>
        <div>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <Landing />
                  <Woman />
                  <Offer
                    title="Save 50% this Holiday season"
                    desc="It's time to revamp your fashion game without breaking the bank! Dive into our exclusive 50% off sale and discover unbearable deals on the most coveted styles."
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs2.r29static.com%2Fbin%2Fentry%2F553%2F0%2C1%2C2000%2C1050%2Fx%2F1700476%2Fimage.png&f=1&nofb=1&ipt=c744576cb80c9c1f114ec022385706924850079d00d1f8266b79ebd057df5de6&ipo=images"
                  />
                  <Men />
                  <Kids />
                  <New />
                </>
              }
            ></Route>
            <Route
              path="/cart"
              element={
                <>
                  <ShoppingCart />
                </>
              }
            />
            <Route path="/product/:category/:id" element={<ProductDetails />} />
            <Route
              path="/women-full"
              element={<FullCollection collectionType="women" />}
            />
            <Route
              path="/men-full"
              element={<FullCollection collectionType="men" />}
            />
            <Route
              path="/kids-full"
              element={<FullCollection collectionType="kids" />}
            />
          </Routes>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
