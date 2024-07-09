import React from "react";

export const Landing = () => {
  let images = [
    {
      link: "https://fashionista.com/.image/t_share/MTQxNjc4MTYzNTAyNTczNTEz/sostenibility-editorial-7stjpg.jpg",
      alt: "WOMEN",
    },
    {
      link: "https://www.thefashionisto.com/wp-content/uploads/2017/04/Zara-Man-2017-Tailoring-Editorial-Mathias-Lauridsen-007.jpg",
      alt: "MEN",
    },
    {
      link: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.VxabjY6rmFs5kEDAjcANZwAAAA%26pid%3DApi&f=1&ipt=4a82e54bab7f4292e67960c3a4269733abba6ec9d14a448ba67dc29f2f8a2c26&ipo=images",
      alt: "KIDS",
    },
    {
      link: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F5e%2Fbd%2Fed%2F5ebded1a872fb89396a5da16ea358e46.png&f=1&nofb=1&ipt=590bda46090030e668fd5e9c314d1b83da6a25701edbfd6b46ebe3a7a8bfec47&ipo=images",
      alt: "FASHION",
    },
  ];
  return (
    <div
      className="hero bg-golden-gradient w-full h-screen flex flex-col"
      id="home"
    >
      <div className="flex flex-col items-center justify-center text-center h-1/2 mt-[2em]">
        <p className="text-sm text-gray-600 mb-2 font-serif">
          Experience fashion like never before
        </p>
        <h1 className="text-3xl md:text-3xl font-bold mb-4 font-serif">
          Elevate Your Style With <br />
          <span className="font-cursive text-7xl">Sardar Sons</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6 font-serif">
          Discover a world of fashion-forward trends, curated collections, and
          timeless pieces that inspire. Unleash your inner fashionista and
          embark on a journey of confidence, elegance and impeccable style.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 ">
          START SHOPPING
        </button>
      </div>
      <div className="flex lg:flex-row flex-col space-x-4 lg:w-11/12 h-1/2 ">
        {images.map((e) => (
          <div className="relative lg:w-1/4 lg:h-96 overflow-hidden rounded-lg shadow-lg">
            <img
              src={e.link}
              alt={e.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-xl">{e.alt}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
