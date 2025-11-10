import React, { use } from "react";
import FoodCart from "./FoodCart";

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
    </div>
  );
};

export default Foods;
