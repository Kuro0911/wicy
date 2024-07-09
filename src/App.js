import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer";
import { Landing } from "./components/Landing";
import { Kids } from "./components/Kids";
import { Man } from "./components/Man";
import { Navbar } from "./components/Navbar";
import { New } from "./components/New";
import { Offer } from "./components/Offer";
import { Woman } from "./components/Woman";
import { ShoppingCart } from "./components/ShoppingCart";
import { ProductDetails } from "./components/ProductDetails";

function App() {
  return (
    <Router>
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
                <Man />
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
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
