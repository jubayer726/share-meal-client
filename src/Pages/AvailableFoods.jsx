import React from "react";
import { Link, useLoaderData } from "react-router";
import AllFoodsCart from "./AllFoodsCart";

const AvailableFoods = () => {
  const allfoods = useLoaderData();

  return (
    <div className="">
      <div className="w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-center my-4">All Foods</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {allfoods.map((food) => (
            <AllFoodsCart key={food._id} food={food}></AllFoodsCart>
          ))}
        </div>
        <div className="flex items-center justify-center"></div>
      </div>
    </div>
  );
};

export default AvailableFoods;
