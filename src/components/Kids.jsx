import React, { useState } from "react";
import { Card } from "./Card";

export const Kids = () => {
  const [activeItem, setActiveItem] = useState("Shirts");

  const items = [
    "Shirts",
    "Shorts",
    "Jackets",
    "Hoodies",
    "Trousers",
    "Shoes",
    "Accessories",
  ];
  let card_items = [
    {
      src: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F4b%2Fde%2F4bde5e60defebc531304e6a927697673bfce542a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      title: "Denim cargo trousers",
      desc: "Cargo-style trousers in stretchy cotton denim with flap leg pockets. Low waist with adjustable elastication, zip fly with a button and wide legs. Front and back pockets.",
    },
    {
      src: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F4b%2F85%2F4b850f2954e4f37ebd87d88ca81245cdfc17f97d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      title: "Oversized print-motif T-shirt",
      desc: "Disney x Keith Haring. Oversized T-shirt in printed cotton jersey with low dropped shoulders. V-shaped, rib-trimmed neckline.",
    },
    {
      src: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fc4%2Fb6%2Fc4b6799f9b67b4a35bbbfcaad485a21c71644dc3.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      title: "Printed T-shirt",
      desc: "Disney x Keith Haring. Loose-fit T-shirt in soft cotton jersey with an all-over print. Round, rib-trimmed neckline and dropped shoulders.",
    },
    {
      src: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff1%2Fee%2Ff1ee667122edc713c4ed3705d6c097e6a4519d2d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      title: "Cotton jersey T-shirt",
      desc: "T-shirt in soft cotton jersey with a round, rib-trimmed neckline and forward-facing shoulder seams.",
    },
    {
      src: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F6e%2F37%2F6e37f10e45d891a1473690f474f24628d4245851.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      title: "Fly as hell T-shirt",
      desc: "Classic T-shirt in soft, printed jersey with a round, rib-trimmed neckline and a straight-cut hem.",
    },
  ];
  return (
    <div
      className="hero bg-gradient-to-r from-yellow-100 via-pink-100 to-purple-100 w-full h-screen flex flex-col"
      id="kids"
    >
      <div className="flex flex-col items-center justify-center text-center h-1/4 mt-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif text-purple-700">
          Latest{" "}
          <span className="font-cursive lg:text-6xl text-pink-500">Kids</span>{" "}
          Arrivals
        </h1>
        <div className="flex justify-center items-center mt-6">
          <nav className="flex space-x-4">
            {items.map((item) => (
              <button
                key={item}
                onClick={() => setActiveItem(item)}
                className={`button px-4 py-2 rounded-full ${
                  activeItem === item
                    ? "bg-pink-400 text-white"
                    : "text-purple-600 hover:text-pink-400"
                }`}
              >
                {item}
              </button>
            ))}
            <button className="btn rounded-full bg-purple-700 text-white font-serif hover:text-purple-700 hover:bg-white">
              View Full Collection
            </button>
          </nav>
        </div>
      </div>
      <div className="flex h-full p-4 justify-evenly mt-4 overflow-x-auto space-x-4">
        {card_items.map((e, index) => (
          <Card key={index} src={e.src} title={e.title} desc={e.desc} kids />
        ))}
      </div>
    </div>
  );
};
