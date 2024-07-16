import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WomenData from "../../utils/database/Womens.json";
import MenData from "../../utils/database/Mens.json";
import KidsData from "../../utils/database/Kids.json";

export const ProductDetails = () => {
  const { id } = useParams();
  const { category } = useParams();
  const [filteredProduct, setFilteredProduct] = useState(null);

  const [activeImg, setActiveImage] = useState(null);
  const [amount, setAmount] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    let data;
    if (category === "women") {
      data = WomenData;
    } else if (category === "men") {
      data = MenData;
    } else if (category === "kids") {
      data = KidsData;
    } else {
      return null;
    }
    data = data[category];
    for (const key in data) {
      const productArray = data[key];
      if (Array.isArray(productArray)) {
        const product = productArray.find((product) => product.id === id);
        if (product) {
          setFilteredProduct(product);
          setActiveImage(product.images.img1);
          setLoading(false);
        }
      }
    }
  }, [id, category]);

  return (
    <div className="flex flex-col justify-between lg:flex-row gap-8 lg:gap-16 lg:items-center m-12 h-full pt-[2em] lg:pt-0">
      {loading ? (
        <div className="h-[90vh] flex items-center justify-center w-full">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-4 items-center justify-center lg:gap-6 lg:w-2/4">
            <img
              src={activeImg}
              alt=""
              className="w-3/4 h-auto aspect-square object-scale-down rounded-xl"
            />
            <div className="flex flex-row justify-between">
              {Object.values(filteredProduct.images).map((img, index) => (
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
                {filteredProduct.name}
              </h1>
            </div>
            <h6 className="text-xl lg:text-2xl font-semibold">
              INR {filteredProduct.price.toFixed(2)}
            </h6>
            <div>
              <span className="text-lg font-medium">Colors:</span>
              <div className="flex flex-row gap-4 mt-2">
                {filteredProduct.colors.map((color, index) => (
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
                {filteredProduct.sizes.map((size, index) => (
                  <button
                    key={index}
                    className={`py-2 px-4 rounded-lg border-2 w-1/4 ${
                      selectedSize === size
                        ? "border-success"
                        : "border-gray-300"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <p className="text-gray-700">{filteredProduct.desc}</p>
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
        </>
      )}
    </div>
  );
};
