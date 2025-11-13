import React, { use, useState } from "react";
import { Link, useLoaderData } from "react-router";
import AllFoodsCart from "./AllFoodsCart";
import { AuthContext } from "../Authorization/AuthContext";
import Loading from "../Components/Loading";

const AvailableFoods = () => {
  const allfoods = useLoaderData();
  const {loading, setLoading} = use(AuthContext)
  const [foods, setFoods] = useState(allfoods)

  const handleSearch =(e) =>{
   e.preventDefault();
   const search_text = e.target.search.value;
  
   setLoading(false)
   fetch(`https://share-meal-searver.vercel.app/search?search=${search_text}`)
   .then(res=>res.json())
   .then(data=>{
    setFoods(data)
    setLoading(false)
   })
  }

  if(loading){
    return <Loading></Loading>
  }

  return (
    <div className="">
      <div className="w-7xl mx-auto">
        <div className="flex justify-between items-center gap-4 p-5 ">
          <h1 className="text-3xl font-bold text-center my-4 text-green-800">All Foods</h1>
        <form
        onSubmit={handleSearch}
        className=" mt-5 mb-10 flex gap-2 justify-center"
      >
        <label className="input rounded-full ">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input name="search" type="search" placeholder="Search" />
        </label>
        <button className="btn bg-orange-500 text-white rounded-full">
           Search
        </button>
      </form>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {foods.map((food) => (
            <AllFoodsCart key={food._id} food={food}></AllFoodsCart>
          ))}
        </div>
        <div className="flex items-center justify-center"></div>
      </div>
    </div>
  );
};

export default AvailableFoods;
