import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ title, src, desc, kids, id }) => {
  return (
    <div
      className={`max-h-64 w-72 relative group transition-all duration-300 ease-in-out m-4 ${
        kids
          ? "bg-gradient-to-r from-yellow-100 via-pink-100 to-purple-100"
          : ""
      }`}
    >
      <img
        src={src}
        alt="random"
        className="w-full object-scale-down object-center rounded-lg shadow-md"
      />
      <Link to={`/product/${id}`}>
        <div className="relative px-4 -mt-16">
          <div
            className={`bg-white p-6 rounded-lg shadow-lg transform group-hover:scale-105 transition-transform duration-300 ease-in-out} `}
          >
            <h4
              className={`mt-1 text-xl font-semibold uppercase font-serif ${
                kids ? "text-pink-500" : ""
              }`}
            >
              {title}
            </h4>
            <div className="mt-4">
              <span
                className={`text-md font-semibold lg:line-clamp-3 line-clamp-1 ${
                  kids ? "text-purple-700" : "text-amber-700"
                }`}
              >
                {desc}
              </span>
              <span
                className={`text-blue-800 ${kids ? "text-purple-700" : ""}`}
              >
                learn more
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
