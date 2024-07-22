import React from "react";
import WomenData from "../../utils/database/Womens.json";
import MenData from "../../utils/database/Mens.json";
import KidsData from "../../utils/database/Kids.json";
import { FullCard } from "../base/FullCard";

export const FullCollection = ({ collectionType }) => {
  let data;
  if (collectionType === "women") {
    data = WomenData;
  } else if (collectionType === "men") {
    data = MenData;
  } else if (collectionType === "kids") {
    data = KidsData;
  } else {
    return null;
  }
  data = data[collectionType];
  const items = [
    "Shirts",
    "Shorts",
    "Jackets",
    "Hoodies",
    "Trousers",
    "Shoes",
    "Accessories",
  ];

  const categorizedItems = items.map((category) => ({
    category,
    items: data[category] || [],
  }));

  return (
    <div
      className="hero w-full h-full flex flex-col mt-[10vh]"
      id={`${collectionType}-full`}
    >
      <div className="flex flex-col items-center justify-center text-center h-1/4 mt-[-1em]">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
          Complete{" "}
          <span className="font-cursive lg:text-6xl">
            {collectionType.charAt(0).toUpperCase() + collectionType.slice(1)}
          </span>{" "}
          Collection
        </h1>
      </div>
      <div className="flex flex-col p-4">
        {categorizedItems.map(({ category, items }) => (
          <div key={category} className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-left pl-4 font-serif">
              {category}
            </h2>
            <div className="flex flex-wrap justify-center gap-8 m-4">
              {items.map((e) => (
                <FullCard
                  key={e.id}
                  src={e.images.img1}
                  title={e.name}
                  desc={e.desc}
                  id={e.id}
                  category={e.category}
                  price={e.price}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
