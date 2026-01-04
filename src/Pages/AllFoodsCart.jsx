import React from "react";
import { Link } from "react-router";

const AllFoodsCart = ({ food }) => {
  const {food_image, food_name, donator_image, food_quantity, pickup_location, donator_name, _id, expire_date, } = food;
  return (
    <div
      key={_id}
      className="bg-white rounded-2xl w-76 shadow-md hover:shadow-lg transition p-4">   
      <img
        src={food_image}
        alt={food_name}
        className="w-full h-48 object-cover rounded-xl mb-4"
      />
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{food_name}</h3>

      <div className="flex items-center mb-3">
        <img
          src={donator_image}
          alt={donator_name}
          className="w-10 h-10 rounded-full border border-orange-500 mr-3"
        />
        <div>
          <p className="text-sm font-medium text-gray-700">{donator_name}</p>
          <p className="text-xs text-gray-500">Donator</p>
        </div>
      </div>

      <p className="text-sm text-gray-700 mb-1">
        <span className="font-semibold">Quantity:</span> {food_quantity}
      </p>

      <p className="text-sm text-gray-700 mb-1">
        <span className="font-semibold">Pickup Location:</span>{" "}
        {pickup_location}
      </p>

      <p className="text-sm text-gray-700 mb-3">
        <span className="font-semibold">Expire Date:</span> {expire_date}
      </p>

      <div className="text-center">
        <Link
          to={`/food-details/${_id}`}
          // className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium px-4 py-2 rounded-lg transition"
          className="btn-primary"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default AllFoodsCart;
