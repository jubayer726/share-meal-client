import React from 'react';

const FoodRequestedCart = ({food}) => {
    console.log(food);
    const { requester_image, food_name, food_quantity, pickup_location, _id, requester_name, requester_email,status } = food;
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
      <figure className="px-2 lg:px-4 pt-4">
        <img
          src={requester_image}
          alt="Product Photo"
          className="w-[300px] lg:w-full h-[300px] object-cover hover:scale-110 transition-transform duration-300 rounded-2xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{food_name}</h2>
        <h2 className="text-sm text-gray-500">Quantity: {food_quantity}</h2>
        <h2 className="text-sm text-gray-500">Requester Name: {requester_name}</h2>
        <h2 className="text-sm text-gray-500">requester Email: {requester_email}</h2>
        <h2 className="text-green-500 font-semibold">
          Location: {pickup_location}
        </h2>
        <button className='btn bg-orange-500 text-white font-semibold border-green-600 px-5 py-2'>{status}</button>
      </div>
    </div>
    );
};

export default FoodRequestedCart;