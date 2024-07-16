import React, { useState, useEffect, useMemo } from "react";
import { Card } from "../base/Card";
import KidsData from "../../utils/database/Kids.json";

export const Kids = () => {
  const [activeItem, setActiveItem] = useState("Shirts");

  const items = useMemo(
    () => [
      "Shirts",
      "Shorts",
      "Jackets",
      "Hoodies",
      "Trousers",
      "Shoes",
      "Accessories",
    ],
    []
  );

  const card_items = useMemo(() => {
    return KidsData.Kids[activeItem] || [];
  }, [activeItem]);

  useEffect(() => {
    // console.log(KidsData.Kids);
  }, []);
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
          <Card key={index} src={e.src} title={e.title} desc={e.desc} />
        ))}
      </div>
    </div>
  );
};
