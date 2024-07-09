import React, { useState } from "react";
import { Card } from "./Card";

export const Man = () => {
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
      src: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F73%2F35%2F7335bd85914048e5cbcd0fa2070bae57bf1d338c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      title: "Loose Fit Textured resort shirt",
      desc: "Short-sleeved shirt in textured jersey with a resort collar, French front, yoke at the back and a straight-cut hem with a slit at each side. Loose fit for a generous but not oversized silhouette.",
    },
    {
      src: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F98%2F0b%2F980b003a6064d82faa0884ec5f027b57dbb2bd68.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      title: "Regular Fit Windbreaker",
      desc: "Regular-fit windbreaker in windproof, water-repellent nylon. Lined hood with an elasticated drawstring, a zip down the front and long sleeves with covered elastication at the cuffs. Zipped side pockets and an inner pocket with a press-stud. Concealed, elasticated drawstring at the hem. Lined.",
    },
    {
      src: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F30%2F59%2F3059c37542c8a684bca9d1ba0d1d958fbd614d52.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      title: "Loose Jeans",
      desc: "5-pocket jeans in rigid cotton denim with a rounded leg and a loose fit from the seat to the hem with a dropped crotch and extra room around the whole leg. Regular waist and a zip fly. All you need to conquer the full denim look.",
    },
    {
      src: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F87%2F46%2F874647b621aa1c7a144a786f8de3b836c4a2a067.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      title: "Relaxed Fit Linen suit trousers",
      desc: "Suit trousers in an airy linen weave with a zip fly and an extended waistband with a button and hook-and-eye fastening. Diagonal front pockets and jetted back pockets with a button. Legs with creases at the front and back. Relaxed fit for a casual but not oversized silhouette. Fabric made from linen is breathable, beautiful both ironed and wrinkled, and softens over time.",
    },
    {
      src: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff0%2F4d%2Ff04de306ec9f33dd076f49ca0faaec9b2a4bea64.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      title: "Slim Fit Jacket",
      desc: "Single-breasted jacket in a stretch weave with narrow notch lapels with a decorative buttonhole, a chest pocket, flap front pockets and one inner pocket. Slim fit with two buttons at the front, decorative buttons at the cuffs and a single back vent. Lined.",
    },
  ];
  return (
    <div className="hero w-full h-screen flex flex-col" id="men">
      <div className="flex flex-col items-center justify-center text-center h-1/4 mt-[-1em]">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif ">
          Latest <span className="font-cursive lg:text-6xl">Men</span> Arrivals
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
            <button className="btn rounded-full bg-black text-white font-serif hover:text-black hover:bg-white">
              View Full Collection
            </button>
          </nav>
        </div>
      </div>
      <div className="flex h-3/4 p-4 justify-evenly mt-[-2em]">
        {card_items.map((e) => (
          <Card src={e.src} title={e.title} desc={e.desc} />
        ))}
      </div>
    </div>
  );
};
