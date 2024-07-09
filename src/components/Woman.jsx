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
      src: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F12%2F31%2F1231b3e663d20fad1a6b468f738539c008a05286.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
      title: "Tie-belt kaftan dress",
      desc: "Calf-length, loose-fit kaftan dress in a soft cotton and viscose weave with a band collar, V-shaped opening and buttons down the front. Yoke with gathers at the front and back, long balloon sleeves and wide, buttoned cuffs. Detachable tie belt at the waist and a straight-cut hem with a slit at each side. Unlined.",
      id: "d003ef09",
    },
    {
      src: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fe1%2Fb8%2Fe1b80cc8ecc8d034e21f77cf831af06f3c491144.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
      title: "Drawstring-detail halterneck dress",
      desc: "Elevate your wardrobe with our Women's Floral Bouquet Print Tunic, a perfect blend of art and fashion. Featuring a stunning, vibrant floral bouquet print on the front, this tunic is crafted from soft, breathable fabric for ultimate comfort.",
      id: "d003ef09",
    },
    {
      src: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fc2%2Ff4%2Fc2f4759ad72257cd15b3a7961988d14a353ad16f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      title: "Women's Floral Bouquet Print Tunic",
      desc: "Elevate your wardrobe with our Women's Floral Bouquet Print Tunic, a perfect blend of art and fashion. Featuring a stunning, vibrant floral bouquet print on the front, this tunic is crafted from soft, breathable fabric for ultimate comfort.",
      id: "d003ef09",
    },
    {
      src: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F0a%2F9a%2F0a9a32057086771b31b0050b524c813b7be04999.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_dresses_mididresses%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
      title: "Flounce-trimmed dress",
      desc: "Long, sleeveless dress in woven fabric made from a lyocell blend. Deep V-neckline at the front and back with narrow, horizontal ties at the back of the neck. Double-layered flounces over the shoulders and around the waist and a concealed zip at one side. Lined.",
      id: "d003ef09",
    },
    {
      src: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F0d%2Fb4%2F0db4ea9f78ede0d3cd6a1e46b629ddef476e9973.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
      title: "Oversized twill jacket",
      desc: "Oversized jacket in twill with a small stand-up collar and a wind flap with concealed press-studs down the front. Gently dropped shoulders and long sleeves with a slit and press-stud at the cuffs. Flap front pockets, a yoke at the back and covered elastication at the hem. Lined.",
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
