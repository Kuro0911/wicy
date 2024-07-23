import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Card = ({ title, src, desc, category, id }) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = cardRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`max-h-64 w-72 relative group transition-all duration-300 ease-in-out m-4 ${
        category === "kids"
          ? "bg-gradient-to-r from-yellow-100 via-pink-100 to-purple-100"
          : ""
      }`}
    >
      <img
        src={src}
        alt="random"
        className="w-full object-scale-down object-center rounded-lg shadow-md"
      />
      <Link to={`/product/${category}/${id}`}>
        <div className="relative px-4 -mt-16">
          <div
            className={`bg-white p-6 rounded-lg shadow-lg transform group-hover:scale-105 transition-transform duration-300 ease-in-out`}
          >
            <h4
              className={`mt-1 text-xl font-semibold uppercase font-serif ${
                category === "kids" ? "text-pink-500" : ""
              }`}
            >
              {title}
            </h4>
            <div className="mt-4">
              <span
                className={`text-md font-semibold lg:line-clamp-3 line-clamp-1 ${
                  category === "kids" ? "text-purple-700" : "text-amber-700"
                }`}
              >
                {desc}
              </span>
              <span
                className={`text-blue-800 ${
                  category === "kids" ? "text-purple-700" : ""
                }`}
              >
                learn more
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
