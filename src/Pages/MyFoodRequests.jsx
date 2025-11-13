import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Authorization/AuthContext";
import Loading from "../Components/Loading";
import FoodRequestedCart from "./FoodRequestedCart";

const MyFoodRequests = () => {
  const { user, loading, setLoading } = use(AuthContext);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/my-requests?email=${user.email}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
        setLoading(false);
      });
  }, [user, loading, setLoading]);

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="w-10/12 mx-auto">
      <h1 className="text-center font-bold text-3xl p-5">My Requiested Foods</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {foods.map((food) => (
          <FoodRequestedCart key={food.food_id} food={food}></FoodRequestedCart>
        ))}
      </div>
    </div>
  );
};

export default MyFoodRequests;
