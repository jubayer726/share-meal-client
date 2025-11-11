import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Authorization/AuthContext";
import Loading from "../Components/Loading";
import { Link } from 'react-router';
import Swal from "sweetalert2";

const ManageMyFoods = () => {
    const {user, loading, setLoading} =use(AuthContext);
    const [myFoods, setMyFoods] = useState([]);
  
    useEffect(()=>{
        fetch(`http://localhost:3000/manage-foods?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>{
            setMyFoods(data)
            setLoading(false)
        })
    }, [user, setMyFoods, setLoading])

    const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/foods/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type" : "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            // navigate("/");
          })
          .catch((error) => {
            console.log(error.message);
          });
      }
    });
  };

if(loading){
    return <Loading></Loading>
}
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-green-700">
        🥗 Manage My Foods
      </h2>

      {myFoods.length === 0 ? (
        <p className="text-center text-gray-500">No food items found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {myFoods.map(food => (
            <div
              key={food._id}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-4 relative"
            >
              <img
                src={food.food_image}
                alt={food.food_name}
                className="w-full h-44 object-cover rounded-xl mb-4"
              />

              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                {food.food_name}
              </h3>
              <p className="text-sm text-gray-700 mb-1">
                <span className="font-semibold text-green-700">Quantity:</span>{" "}
                {food.food_quantity}
              </p>
              <p className="text-sm text-gray-700 mb-1">
                <span className="font-semibold text-green-700">Pickup:</span>{" "}
                {food.pickup_location}
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <span className="font-semibold text-green-700">Expire:</span>{" "}
                {food.expire_date}
              </p>

              <div className="flex justify-between mt-4">
                <Link
                  to={`/update-food/${food._id}`}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition"
                >
                  ✏️ Update
                </Link>

                <button
                  onClick={()=>handleDelete(food._id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition"
                >
                  🗑 Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageMyFoods;
