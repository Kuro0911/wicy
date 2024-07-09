import React, { useState } from "react";
import { Card } from "./Card";

export const Woman = () => {
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
      src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fcd%2F68%2F99%2Fcd6899127a342e5eb277240036ac9287.jpg&f=1&nofb=1&ipt=c5155df1d0d937d94abeab319c854b3d437251e5d867ef2d5fdafd2193c21f2d&ipo=images",
      title: "Women's Floral Bouquet Print Tunic",
      desc: "Elevate your wardrobe with our Women's Floral Bouquet Print Tunic, a perfect blend of art and fashion. Featuring a stunning, vibrant floral bouquet print on the front, this tunic is crafted from soft, breathable fabric for ultimate comfort.",
      id: "d003ef09",
    },
    {
      src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fcd%2F68%2F99%2Fcd6899127a342e5eb277240036ac9287.jpg&f=1&nofb=1&ipt=c5155df1d0d937d94abeab319c854b3d437251e5d867ef2d5fdafd2193c21f2d&ipo=images",
      title: "Women's Floral Bouquet Print Tunic",
      desc: "Elevate your wardrobe with our Women's Floral Bouquet Print Tunic, a perfect blend of art and fashion. Featuring a stunning, vibrant floral bouquet print on the front, this tunic is crafted from soft, breathable fabric for ultimate comfort.",
      id: "d003ef09",
    },
    {
      src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fcd%2F68%2F99%2Fcd6899127a342e5eb277240036ac9287.jpg&f=1&nofb=1&ipt=c5155df1d0d937d94abeab319c854b3d437251e5d867ef2d5fdafd2193c21f2d&ipo=images",
      title: "Women's Floral Bouquet Print Tunic",
      desc: "Elevate your wardrobe with our Women's Floral Bouquet Print Tunic, a perfect blend of art and fashion. Featuring a stunning, vibrant floral bouquet print on the front, this tunic is crafted from soft, breathable fabric for ultimate comfort.",
      id: "d003ef09",
    },
    {
      src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fcd%2F68%2F99%2Fcd6899127a342e5eb277240036ac9287.jpg&f=1&nofb=1&ipt=c5155df1d0d937d94abeab319c854b3d437251e5d867ef2d5fdafd2193c21f2d&ipo=images",
      title: "Women's Floral Bouquet Print Tunic",
      desc: "Elevate your wardrobe with our Women's Floral Bouquet Print Tunic, a perfect blend of art and fashion. Featuring a stunning, vibrant floral bouquet print on the front, this tunic is crafted from soft, breathable fabric for ultimate comfort.",
      id: "d003ef09",
    },
    {
      src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fcd%2F68%2F99%2Fcd6899127a342e5eb277240036ac9287.jpg&f=1&nofb=1&ipt=c5155df1d0d937d94abeab319c854b3d437251e5d867ef2d5fdafd2193c21f2d&ipo=images",
      title: "Women's Floral Bouquet Print Tunic",
      desc: "Elevate your wardrobe with our Women's Floral Bouquet Print Tunic, a perfect blend of art and fashion. Featuring a stunning, vibrant floral bouquet print on the front, this tunic is crafted from soft, breathable fabric for ultimate comfort.",
      id: "d003ef09",
    },
  ];

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
            <button className="btn rounded-full bg-black text-white font-serif hover:text-black hover:bg-white">
              View Full Collection
            </button>
          </nav>
        </div>
      </div>
      <div className="flex h-3/4 p-4 justify-evenly mt-[-2em]">
        {card_items.map((e) => (
          <Card src={e.src} title={e.title} desc={e.desc} id={e.id} />
        ))}
      </div>
    </div>
  );
};
