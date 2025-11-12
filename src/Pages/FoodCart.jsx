import React from "react";
import { Link } from "react-router";

const FoodCart = ({ food }) => {
  const { food_image, food_name, food_quantity, pickup_location, _id } = food;
  return (
    <div className="">
      <div className="card bg-base-100 shadow-sm">
        <figure className="px-4 pt-4">
          <img
            src={food_image}
            alt="Product Photo"
            className="w-full h-[300px] object-cover hover:scale-110 transition-transform duration-300 rounded-2xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{food_name}</h2>
          <h2 className="text-sm text-gray-500">Quantity: {food_quantity}</h2>
          <h2 className="text-green-500 font-semibold">
            Location: {pickup_location}
          </h2>
          {/* <p className="text-gray-600 py-3 font-semibold ">{description}</p> */}
          <Link
            to={`/food-details/${_id}`}
            className="btn w-full outline outline-orange-500 text-orange-600"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCart;
