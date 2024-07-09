import React from "react";

export const Offer = ({ src, title, desc }) => {
  return (
    <div className="h-[50vh] w-full flex items-start justify-center">
      <div className="card lg:card-side bg-gray-200 shadow-xl w-2/3">
        <figure>
          <img src={src} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-serif text-2xl">{title}</h2>
          <p className="text-xl">{desc}</p>
          <div className="card-actions justify-start">
            <button className="btn bg-amber-300 rounded-full btn-wide hover:bg-white">
              Shop now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
