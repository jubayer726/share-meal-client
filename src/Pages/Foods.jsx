import React, { use, useState } from "react";
import FoodCart from "./FoodCart";
import { Link} from "react-router";
import { AuthContext } from "../Authorization/AuthContext";
import Loading from "../Components/Loading";

const Foods = ({ latestFoods }) => {
  const allFoods = use(latestFoods);
  const {loading, setLoading} = use(AuthContext)
    const [foods, setFoods] = useState(allFoods)
  
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
    <div className="lg:w-7xl mx-auto w-96 ">
      <div className="flex justify-between gap-4 items-center px-5 lg:px-10">
        <h1 className="text-xl lg:text-3xl text-green-900 font-bold text-center my-4">All Foods</h1>

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
        <button className="btn bg-linear-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700">
           Search
        </button>
      </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {
            foods.map(food=><FoodCart key={food._id} food={food}></FoodCart>)
        }
      </div>
      <div className="text-center">
        <Link to='/available-foods' className="btn items-center justify-center px-10 py-2 my-5 text-white font-bold text-2xl bg-linear-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 rounded-xl">Show All</Link>
      </div>
    </div>
  );
};

export default Foods;
