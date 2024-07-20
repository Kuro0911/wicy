import React, { useState } from "react";

const CustomerDetails = ({ customer, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedCustomer, setEditedCustomer] = useState({ ...customer });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedCustomer((prevCustomer) => ({
      ...prevCustomer,
      [name]: value,
    }));
  };

  const handleSaveClick = () => {
    onSave(editedCustomer);
    setIsEditing(false);
  };

  const handleCopyAddress = () => {
    setEditedCustomer((prevCustomer) => ({
      ...prevCustomer,
      billingAddress: prevCustomer.shippingAddress,
    }));
  };

  return (
    <div className="bg-gray-100 w-full xl:w-96 p-4 md:p-6 xl:p-8 space-y-6 flex flex-col">
      <div className="w-full text-center font-cursive">
        <h3 className="text-3xl font-semibold text-gray-800">
          Customer Details
        </h3>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-4 py-4 border-b border-gray-200 text-gray-800 text-center font-serif">
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={editedCustomer.name}
              onChange={handleInputChange}
              className="input input-bordered flex items-center gap-2 grow"
              placeholder={customer.name}
            />
          ) : (
            <p className="text-2xl font-semibold text-gray-800">
              {customer.name}
            </p>
          )}
        </div>
        <div className="flex flex-col space-y-4 py-4 border-b border-gray-200 text-gray-800">
          {isEditing ? (
            <div className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="email"
                name="email"
                value={editedCustomer.email}
                onChange={handleInputChange}
                className="grow"
                placeholder={customer.email}
              />
            </div>
          ) : (
            <div className="flex flex-row justify-evenly">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <p className="cursor-pointer text-sm">{customer.email}</p>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-4">
          <p className="text-base font-semibold text-gray-800">
            Shipping Address
          </p>
          {isEditing ? (
            <textarea
              name="shippingAddress"
              value={editedCustomer.shippingAddress}
              onChange={handleInputChange}
              className="input input-bordered flex items-center gap-2 grow"
              placeholder={customer.shippingAddress}
              style={{ height: "auto" }}
              rows={4}
            />
          ) : (
            <p className="text-sm text-gray-600">{customer.shippingAddress}</p>
          )}
        </div>
        {isEditing && (
          <div className="w-full flex justify-center">
            <button
              className=" btn w-5/6 btn-primary"
              onClick={handleCopyAddress}
            >
              Shipping Address same as Billing Address
            </button>
          </div>
        )}
        <div className="flex flex-col space-y-4">
          <p className="text-base font-semibold text-gray-800">
            Billing Address
          </p>
          {isEditing ? (
            <textarea
              name="billingAddress"
              value={editedCustomer.billingAddress}
              onChange={handleInputChange}
              className="input input-bordered flex items-center gap-2 grow"
              placeholder={customer.billingAddress}
              style={{ height: "auto" }}
              rows={4}
            />
          ) : (
            <p className="text-sm text-gray-600">{customer.billingAddress}</p>
          )}
        </div>
      </div>

      <div className="w-full flex justify-center">
        {isEditing ? (
          <button
            onClick={handleSaveClick}
            className="mt-6 py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-medium w-full text-base leading-4 text-gray-800"
          >
            Save Details
          </button>
        ) : (
          <button
            onClick={handleEditClick}
            className="mt-6 py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-medium w-full text-base leading-4 text-gray-800"
          >
            Edit Details
          </button>
        )}
      </div>
    </div>
  );
};

export default CustomerDetails;
