import React from "react";

const FoodRequestedCart = ({ food }) => {
  const {
    requester_image,
    food_name,
   location,
    _id,
    requester_name,
    requester_email,
    status,
    reason,
    contact,
  } = food;
  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="flex gap-4">
        <figure className="px-2 lg:px-4 pt-4">
          <img
            src={requester_image}
            alt="Product Photo"
            className="w-[100px] lg:w-full h-[100px] object-cover hover:scale-110 transition-transform duration-300 rounded-2xl p-4"
          />
        </figure>
        <div className="grid grid-cols-3 gap-4 mx-auto items-center">
          <div>
            <h2 className="card-title">Items: {food_name}</h2>
            <h1>{reason}</h1>
            <h2 className="text-green-500 font-semibold">
              Location: {location}
            </h2>
          </div>

          <div className="px-5">
            <h2 className="text-gray-500">
              Requester Name: {requester_name}
            </h2>
            <h2 className="text-sm text-gray-500">
              Requester Email: {requester_email}
            </h2>
            <h1 className="text-gray-500">Contact Number: {contact}</h1>
          </div>

          <div>
            <h1 className="font-semibold p-4 text-center">Request Status</h1>
            <h1 className=" bg-orange-200 text-center font-semibold border-green-600 p-3 rounded-2xl">
            {status}
          </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodRequestedCart;
