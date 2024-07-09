import React, { useState } from "react";
import { useParams } from "react-router-dom";

export const ProductDetails = () => {
  const { id } = useParams();
  const product = {
    name: "Ribbed vest top",
    description:
      "This short, fitted vest top is crafted from a premium ribbed jersey fabric that offers both comfort and style. It features a deep, round neckline at both the front and back, accentuating your neckline and shoulders. The overlocked hem adds a touch of durability and a subtle, stylish finish to the overall design. Perfect for layering or wearing on its own, this versatile top pairs effortlessly with a variety of outfits, making it an essential addition to your wardrobe. Whether you're dressing it up with a blazer and trousers for a chic office look or keeping it casual with jeans and sneakers for a weekend outing, this vest top provides a flattering fit and timeless appeal. Available in multiple colors to suit your ",
    price: 199.0,
    images: {
      img1: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F6d%2Fea%2F6deab693c180b6375c3b29811e033282b4a75e1c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      img2: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F03%2F71%2F0371f65de274455bd90818bdb16b3ad1d4fc2fbc.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
      img3: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F4b%2Fe5%2F4be583db5faf6851619a4cd9651c396062de458b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_tops_vests%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
      img4: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F7f%2Fca%2F7fca78e981484ae84cee2d7b175c165b6b148490.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_tops_vests%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    },
    colors: [
      {
        name: "White",
        image:
          "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F26%2Fc0%2F26c01003d69213dabd5bd7cb74b06639952c1034.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
      },
      {
        name: "Black",
        image:
          "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F2d%2F04%2F2d0410e71ec565c385aaa5f89a0f70411d824b19.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
      },
      {
        name: "Beige",
        image:
          "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F4b%2Fe5%2F4be583db5faf6851619a4cd9651c396062de458b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_tops_vests%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
      },
    ],
    sizes: ["XS", "S", "M", "L"],
  };
  const images = product.images;
  const [activeImg, setActiveImage] = useState(images.img1);
  const [amount, setAmount] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");

  return (
    <div className="flex flex-col justify-between lg:flex-row gap-8 lg:gap-16 lg:items-center m-12 h-full pt-[2em] lg:pt-0">
      <div className="flex flex-col gap-4 items-center justify-center lg:gap-6 lg:w-2/4">
        <img
          src={activeImg}
          alt=""
          className="w-3/4 h-auto aspect-square object-scale-down rounded-xl"
        />
        <div className="flex flex-row justify-between">
          {Object.values(product.images).map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              className="w-20 h-20 lg:w-24 lg:h-24 rounded-md cursor-pointer m-4 -mt-4 object-scale-down"
              onClick={() => setActiveImage(img)}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4 md:mt-[2em] lg:w-2/4">
        <div>
          <h1 className="text-2xl lg:text-4xl font-bold font-serif capitalize">
            {product.name}
          </h1>
        </div>
        <h6 className="text-xl lg:text-2xl font-semibold">
          INR {product.price.toFixed(2)}
        </h6>
        <div>
          <span className="text-lg font-medium">Colors:</span>
          <div className="flex flex-row gap-4 mt-2">
            {product.colors.map((color, index) => (
              <img
                key={index}
                src={color.image}
                alt={color.name}
                className={`w-20 h-20 lg:w-24 lg:h-24 rounded-md cursor-pointer border-2 object-scale-down ${
                  activeImg === color.image
                    ? "border-success"
                    : "border-transparent"
                }`}
                onClick={() => setActiveImage(color.image)}
              />
            ))}
          </div>
        </div>
        <div>
          <span className="text-lg font-medium">Sizes:</span>
          <div className="flex flex-row gap-4 mt-2">
            {product.sizes.map((size, index) => (
              <button
                key={index}
                className={`py-2 px-4 rounded-lg border-2 w-1/4 ${
                  selectedSize === size ? "border-success" : "border-gray-300"
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <p className="text-gray-700">{product.description}</p>
        <div className="flex flex-row items-center gap-6 lg:gap-12">
          <div className="flex flex-row items-center">
            <button
              className="bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-2xl lg:text-3xl"
              onClick={() => setAmount((prev) => Math.max(prev - 1, 1))}
              disabled={amount === 1}
            >
              -
            </button>
            <span className="py-2 px-4 text-lg lg:text-xl">{amount}</span>
            <button
              className="bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-2xl lg:text-3xl"
              onClick={() => setAmount((prev) => prev + 1)}
            >
              +
            </button>
          </div>
          <button className="btn btn-success lg:btn-wide text-white font-sans lg:text-lg hover:text-success hover:bg-white">
            Add to Cart
          </button>
        </div>

        <div className="mt-6">
          <div className="rating gap-1">
            <input
              type="radio"
              name="rating-3"
              className="mask mask-heart bg-red-400"
            />
            <input
              type="radio"
              name="rating-3"
              className="mask mask-heart bg-orange-400"
            />
            <input
              type="radio"
              name="rating-3"
              className="mask mask-heart bg-yellow-400"
            />
            <input
              type="radio"
              name="rating-3"
              className="mask mask-heart bg-lime-400"
            />
            <input
              type="radio"
              name="rating-3"
              className="mask mask-heart bg-green-400"
              defaultChecked
            />
            <p className="text-gray-500 ml-2">(10 reviews)</p>
          </div>
        </div>
      </div>
    </div>
  );
};
