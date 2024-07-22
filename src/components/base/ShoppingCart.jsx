import React, { useEffect, useState } from "react";
import { useCart } from "../../utils/CartContext";
import { Link } from "react-router-dom";
import CustomerDetails from "./CustomerDetails";

export const ShoppingCart = () => {
  const { cartItems, removeFromCart } = useCart();

  const CalcSubtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  console.log(cartItems);
  const CalcDiscount = CalcSubtotal * 0.5;
  const CalcShipping = 8.0;

  let summary = {
    subtotal: CalcSubtotal,
    discount: CalcDiscount,
    discountCode: "STUDENT",
    shipping: CalcShipping,
    total: CalcSubtotal - CalcDiscount + CalcShipping,
  };

  let shippingDetails = {
    carrier: "DPD Delivery",
    deliveryTime: "Delivery within 24 Hours",
    cost: 8.0,
    logo: "https://i.ibb.co/L8KSdNQ/image-3.png",
  };

  let initialCustomer = {
    name: "Please enter your name",
    previousOrders: 0,
    email: "Please enter your email id",
    shippingAddress: "please enter the shipping address",
    billingAddress: "please enter the billing address",
  };

  const [customer, setCustomer] = useState(() => {
    const savedCustomer = localStorage.getItem("customer");
    return savedCustomer ? JSON.parse(savedCustomer) : initialCustomer;
  });

  const handleSaveCustomerDetails = (updatedCustomer) => {
    setCustomer(updatedCustomer);
    localStorage.setItem("customer", JSON.stringify(updatedCustomer));
    console.warn(updatedCustomer);
  };

  useEffect(() => {
    const savedCustomer = localStorage.getItem("customer");
    if (savedCustomer) {
      setCustomer(JSON.parse(savedCustomer));
    }
  }, []);

  return (
    <div className="py-14 px-4 mt-[2em] md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800 underline">
          Order #13432
        </h1>
        <p className="text-base font-medium leading-6 text-gray-600">
          {new Date().toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
      </div>
      <div className="mt-10 flex flex-col xl:flex-row justify-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
        <div className="flex flex-col w-full space-y-4 md:space-y-6 xl:space-y-8">
          <div className="flex flex-col bg-gray-100  p-4 md:p-6 xl:p-8 w-full space-y-6">
            <p className="text-lg lg:text-4xl md:text-xl font-semibold text-gray-800 font-cursive">
              Your Shopping Cart...
            </p>
            {cartItems && cartItems.length > 0 ? (
              <>
                {cartItems.map((item) => (
                  <div
                    key={item.genId}
                    className="flex flex-col md:flex-row justify-between items-start md:space-x-6 xl:space-x-8 w-full space-y-4 md:space-y-0 border-b border-gray-200 pb-8"
                  >
                    <div className="w-full md:w-40">
                      <img
                        className="w-full hidden md:block"
                        src={item.images.img1}
                        alt={item.name}
                      />
                      <img
                        className="w-full md:hidden"
                        src={item.images.img1}
                        alt={item.name}
                      />
                    </div>
                    <div className="w-full flex flex-col space-y-4">
                      <Link
                        to={`/product/${item.category}/${item.id}`}
                        className="text-xl xl:text-2xl font-semibold text-gray-800"
                      >
                        {item.name}
                      </Link>
                      <div className="space-y-2">
                        <p className="text-sm text-gray-800 ">
                          <span className="text-gray-500">Category:</span>{" "}
                          {item.category}
                        </p>
                        <p className="text-sm text-gray-800 ">
                          <span className="text-gray-500 ">Size:</span>{" "}
                          {item.selectedSize}
                        </p>
                        <p className="text-sm text-gray-800 ">
                          <span className="text-gray-500 ">Color:</span>{" "}
                          {item.selectedColor}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between w-full md:w-auto space-y-4 md:space-y-0 md:space-x-8">
                      <button
                        className="w-8 h-8"
                        onClick={() => removeFromCart(item.genId)}
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="icon w-8 h-8 hover:cursor-pointer hover:w-9 hover:h-9 transition-all duration-300 ease-in-out"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M154 260h568v700H154z" fill="#FF3B30" />
                          <path
                            d="M624.428 261.076v485.956c0 57.379-46.737 103.894-104.391 103.894h-362.56v107.246h566.815V261.076h-99.864z"
                            fill="#030504"
                          />
                          <path
                            d="M320.5 870.07c-8.218 0-14.5-6.664-14.5-14.883V438.474c0-8.218 6.282-14.883 14.5-14.883s14.5 6.664 14.5 14.883v416.713c0 8.219-6.282 14.883-14.5 14.883zM543.5 870.07c-8.218 0-14.5-6.664-14.5-14.883V438.474c0-8.218 6.282-14.883 14.5-14.883s14.5 6.664 14.5 14.883v416.713c0 8.219-6.282 14.883-14.5 14.883z"
                            fill="#152B3C"
                          />
                          <path
                            d="M721.185 345.717v-84.641H164.437z"
                            fill="#030504"
                          />
                          <path
                            d="M633.596 235.166l-228.054-71.773 31.55-99.3 228.055 71.773z"
                            fill="#FF3B30"
                          />
                          <path
                            d="M847.401 324.783c-2.223 0-4.475-0.333-6.706-1.034L185.038 117.401c-11.765-3.703-18.298-16.239-14.592-27.996 3.706-11.766 16.241-18.288 27.993-14.595l655.656 206.346c11.766 3.703 18.298 16.239 14.592 27.996-2.995 9.531-11.795 15.631-21.286 15.631z"
                            fill="#FF3B30"
                          />
                        </svg>
                      </button>
                      <p className="text-base xl:text-lg text-gray-800 ">
                        INR{item.price.toFixed(2)}{" "}
                        <span className="line-through text-red-400">
                          INR{item.price.toFixed(2)}
                        </span>
                      </p>
                      <p className="text-base xl:text-lg text-gray-800 ">
                        {item.quantity}
                      </p>
                      <p className="text-base xl:text-lg font-semibold text-gray-800 ">
                        INR {(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <div className="text-2xl w-full flex justify-center items-center">
                its a bit empty here
                <svg
                  width="50px"
                  height="50px"
                  viewBox="0 0 1024 1024"
                  class="icon"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M665.6 870.4c0 14.08-11.52 25.6-25.6 25.6H256c-14.08 0-25.6-11.52-25.6-25.6V281.6c0-14.08 11.52-25.6 25.6-25.6h384c14.08 0 25.6 11.52 25.6 25.6v588.8z"
                    fill="#E64C45"
                  />
                  <path
                    d="M819.2 870.4c0 14.08-11.52 25.6-25.6 25.6H665.6V256h128c14.08 0 25.6 11.52 25.6 25.6v588.8z"
                    fill="#CE2F3C"
                  />
                  <path
                    d="M793.6 908.8H256c-21.76 0-38.4-16.64-38.4-38.4V281.6c0-21.76 16.64-38.4 38.4-38.4h537.6c21.76 0 38.4 16.64 38.4 38.4v588.8c0 21.76-16.64 38.4-38.4 38.4zM256 268.8c-7.68 0-12.8 5.12-12.8 12.8v588.8c0 7.68 5.12 12.8 12.8 12.8h537.6c7.68 0 12.8-5.12 12.8-12.8V281.6c0-7.68-5.12-12.8-12.8-12.8H256z"
                    fill="#231C1C"
                  />
                  <path
                    d="M640 908.8H256c-21.76 0-38.4-16.64-38.4-38.4V281.6c0-21.76 16.64-38.4 38.4-38.4h384c21.76 0 38.4 16.64 38.4 38.4v588.8c0 21.76-16.64 38.4-38.4 38.4zM256 268.8c-7.68 0-12.8 5.12-12.8 12.8v588.8c0 7.68 5.12 12.8 12.8 12.8h384c7.68 0 12.8-5.12 12.8-12.8V281.6c0-7.68-5.12-12.8-12.8-12.8H256zM729.6 256h25.6v550.4h-25.6z"
                    fill="#231C1C"
                  />
                  <path
                    d="M661.76 904.96l-17.92-17.92 99.84-99.84 85.76 99.84-20.48 17.92-67.84-79.36zM614.4 243.2h-25.6c0-71.68-57.6-129.28-128-129.28S332.8 171.52 332.8 243.2h-25.6c0-85.76 69.12-154.88 153.6-154.88S614.4 157.44 614.4 243.2z"
                    fill="#231C1C"
                  />
                  <path
                    d="M742.4 243.2h-25.6c0-71.68-57.6-129.28-128-129.28S460.8 171.52 460.8 243.2h-25.6c0-85.76 69.12-154.88 153.6-154.88S742.4 157.44 742.4 243.2z"
                    fill="#231C1C"
                  />
                </svg>
              </div>
            )}
          </div>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8 w-full">
            <div className="flex flex-col bg-gray-100 p-4 md:p-6 xl:p-8 w-full space-y-6">
              <h3 className="text-xl font-semibold text-gray-800">Summary</h3>
              <div className="flex flex-col border-b border-gray-200 pb-4 space-y-4">
                <div className="flex justify-between">
                  <p className="text-base text-gray-800">Subtotal</p>
                  <p className="text-base text-gray-600">
                    INR{summary.subtotal.toFixed(2)}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-base text-gray-800">
                    Discount{" "}
                    <span className="bg-gray-200 text-gray-800 p-1 text-xs font-medium">
                      {summary.discountCode}
                    </span>
                  </p>
                  <p className="text-base text-gray-600">
                    -INR{summary.discount.toFixed(2)} (50%)
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-base text-gray-800 ">Shipping</p>
                  <p className="text-base text-gray-600 ">
                    INR{summary.shipping.toFixed(2)}
                  </p>
                </div>
              </div>
              <div className="flex justify-between">
                <p className="text-base font-semibold text-gray-800 ">Total</p>
                <p className="text-base font-semibold text-gray-600 ">
                  INR{summary.total.toFixed(2)}
                </p>
              </div>
              <div className="w-full flex items-center justify-center">
                <button className="btn btn-outline btn-primary btn-xl btn-wide font-cursive text-2xl">
                  Place your Order
                </button>
              </div>
            </div>

            <div className="flex flex-col bg-gray-100  p-4 md:p-6 xl:p-8 w-full space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 ">Shipping</h3>
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8">
                    <img
                      className="w-full h-full"
                      alt="logo"
                      src={shippingDetails.logo}
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-lg font-semibold text-gray-800 ">
                      {shippingDetails.carrier}
                    </p>
                    <p className="text-sm font-normal text-gray-600 ">
                      {shippingDetails.deliveryTime}
                    </p>
                  </div>
                </div>
                <p className="text-lg font-semibold text-gray-800 ">
                  INR{shippingDetails.cost.toFixed(2)}
                </p>
              </div>
              <div className="w-full flex justify-center">
                <button className="hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-full bg-gray-800 text-white text-base font-medium leading-4">
                  View Carrier Details
                </button>
              </div>
            </div>
          </div>
        </div>
        <CustomerDetails
          customer={customer}
          onSave={handleSaveCustomerDetails}
        />
      </div>
    </div>
  );
};
