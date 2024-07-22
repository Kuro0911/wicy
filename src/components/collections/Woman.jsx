import React, { useState, useEffect, useMemo } from "react";
import { Card } from "../base/Card";
import WomenData from "../../utils/database/Womens.json";
import { Link } from "react-router-dom";

export const Woman = () => {
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
    return WomenData.women[activeItem] || [];
  }, [activeItem]);

  useEffect(() => {
    // console.log(WomenData.women);
  }, []);

  return (
    <div className="hero w-full h-screen flex flex-col" id="women">
      <div className="flex flex-col items-center justify-center text-center h-1/4 mt-[-1em]">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif ">
          Latest <span className="font-cursive lg:text-6xl">Women</span>{" "}
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
                    ? "bg-amber-300 text-black"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                {item}
              </button>
            ))}
            <Link
              to={"/women-full"}
              className="btn rounded-full bg-black text-white font-serif hover:text-black hover:bg-white"
            >
              View Full Collection
            </Link>
          </nav>
        </div>
      </div>
      <div className="flex h-3/4 p-4 justify-evenly mt-[-2em]">
        {card_items.map((e) => (
          <Card
            src={e.images.img1}
            title={e.name}
            desc={e.desc}
            id={e.id}
            key={e.id}
            category={e.category}
          />
        ))}
      </div>
    </div>
  );
};
