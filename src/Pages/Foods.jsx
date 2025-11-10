import React, { use } from "react";
import FoodCart from "./FoodCart";
import { Link } from "react-router";

const Foods = ({ latestFoods }) => {
  const allFoods = use(latestFoods);


  return (
    <div className="w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-center my-4">All Foods</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {
            allFoods.map(food=><FoodCart key={food._id} food={food}></FoodCart>)
        }
      </div>
      <div className="flex items-center justify-center">
        <Link to='/available-foods' className="btn px-10 py-2 my-5 font-bold text-2xl bg-orange-400 text-white border-green-400 rounded-2xl">Show All</Link>
      </div>
    </div>
  );
};

export default Foods;
