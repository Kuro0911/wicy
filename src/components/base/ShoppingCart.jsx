import React from "react";

export const ShoppingCart = () => {
  let items = [
    {
      id: 1,
      name: "Premium Quality Dress",
      style: "Italic Minimal Design",
      size: "Small",
      color: "Light Blue",
      price: 36.0,
      originalPrice: 45.0,
      quantity: 1,
      image: "https://i.ibb.co/84qQR4p/Rectangle-10.png",
      imageMobile: "https://i.ibb.co/L039qbN/Rectangle-10.png",
    },
    {
      id: 2,
      name: "High Quality Italic Dress",
      style: "Italic Minimal Design",
      size: "Small",
      color: "Light Blue",
      price: 20.0,
      originalPrice: 30.0,
      quantity: 1,
      image: "https://i.ibb.co/s6snNx0/Rectangle-17.png",
      imageMobile: "https://i.ibb.co/BwYWJbJ/Rectangle-10.png",
    },
  ];

  let summary = {
    subtotal: 56.0,
    discount: 28.0,
    discountCode: "STUDENT",
    shipping: 8.0,
    total: 36.0,
  };

  let shippingDetails = {
    carrier: "DPD Delivery",
    deliveryTime: "Delivery within 24 Hours",
    cost: 8.0,
    logo: "https://i.ibb.co/L8KSdNQ/image-3.png",
  };

  let customer = {
    name: "David Kent",
    previousOrders: 10,
    email: "david89@gmail.com",
    avatar: "https://i.ibb.co/5TSg7f6/Rectangle-18.png",
    shippingAddress: "180 North King Street, Northhampton MA 1060",
    billingAddress: "180 North King Street, Northhampton MA 1060",
  };
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
            <p className="text-lg md:text-xl font-semibold text-gray-800 ">
              Customer’s Cart
            </p>
            {items.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row justify-between items-start md:space-x-6 xl:space-x-8 w-full space-y-4 md:space-y-0 border-b border-gray-200 pb-8"
              >
                <div className="w-full md:w-40">
                  <img
                    className="w-full hidden md:block"
                    src={item.image}
                    alt={item.name}
                  />
                  <img
                    className="w-full md:hidden"
                    src={item.imageMobile}
                    alt={item.name}
                  />
                </div>
                <div className="w-full flex flex-col space-y-4">
                  <h3 className="text-xl xl:text-2xl font-semibold text-gray-800">
                    {item.name}
                  </h3>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-800 ">
                      <span className="text-gray-500">Style:</span> {item.style}
                    </p>
                    <p className="text-sm text-gray-800 ">
                      <span className="text-gray-500 ">Size:</span> {item.size}
                    </p>
                    <p className="text-sm text-gray-800 ">
                      <span className="text-gray-500 ">Color:</span>{" "}
                      {item.color}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between w-full md:w-auto space-y-4 md:space-y-0 md:space-x-8">
                  <p className="text-base xl:text-lg text-gray-800 ">
                    INR{item.price.toFixed(2)}{" "}
                    <span className="line-through text-red-400">
                      INR{item.originalPrice.toFixed(2)}
                    </span>
                  </p>
                  <p className="text-base xl:text-lg text-gray-800 ">
                    {item.quantity}
                  </p>
                  <p className="text-base xl:text-lg font-semibold text-gray-800 ">
                    INR{(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
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

        <div className="bg-gray-100 w-full xl:w-96 p-4 md:p-6 xl:p-8 space-y-6 flex flex-col">
          <h3 className="text-xl font-semibold text-gray-800 ">Customer</h3>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-4 py-8 border-b border-gray-200">
              <img
                src={customer.avatar}
                alt="avatar"
                className="w-16 h-16 rounded-full"
              />
              <div className="flex flex-col space-y-2">
                <p className="text-base font-semibold text-gray-800">
                  {customer.name}
                </p>
                <p className="text-sm text-gray-600 ">
                  {customer.previousOrders} Previous Orders
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4 py-4 border-b border-gray-200 text-gray-800">
              <img
                className="w-6 h-6"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/order-summary-3-svg1.svg"
                alt="email"
              />
              <p className="cursor-pointer text-sm">{customer.email}</p>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-4">
              <p className="text-base font-semibold text-gray-800">
                Shipping Address
              </p>
              <p className="text-sm text-gray-600 ">
                {customer.shippingAddress}
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <p className="text-base font-semibold text-gray-800 ">
                Billing Address
              </p>
              <p className="text-sm text-gray-600 ">
                {customer.billingAddress}
              </p>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <button className="mt-6 py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-medium w-full text-base leading-4 text-gray-800">
              Edit Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
