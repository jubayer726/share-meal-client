import React, { use, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import { AuthContext } from '../Authorization/AuthContext';
import Loading from '../Components/Loading';



const FoodDetails = () => {
//  const navigate = useNavigate();
  const { id } = useParams();
  const [food, setFood] = useState({})
  const {user, loading, setLoading} = use(AuthContext);

  

  useEffect(() => {
    fetch(`http://localhost:3000/foods/${id}`)
          .then((res) => res.json())
          .then((data) => {
            setFood(data)
          setLoading(false)
          })
  }, [id, user, loading, setLoading])

    

    // const handleDelete = () =>{
    //     console.log("clicked");
    // }

    // const handleDownload = () =>{
    //     console.log("clickeddddd");
    // }

    if(loading){
    return <Loading></Loading>
  }
    return (
    //    <div className="max-w-6xl mx-auto p-4 md:p-6 lg:p-8">
    //     <div className="card bg-base-100 shadow-xl border border-gray-200 rounded-2xl overflow-hidden">
    //         <div className="flex flex-col md:flex-row gap-8 p-6 md:p-8">
    //         <div className="shrink-0 w-full md:w-1/2">
    //         <img
    //           src={food.food_image}
    //           alt=""
    //           className="w-full object-cover rounded-xl shadow-md"
    //         />
    //       </div>

    //       <div className="flex flex-col justify-center space-y-4 w-full md:w-1/2">
           
    //         <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
    //           {food.food_name}
    //         </h1>

            
    //         <div className="badge badge-lg badge-outline text-orange-600 border-green-600 font-medium">
    //           {food.donator_name}
    //         </div>

           
    //         <div className="flex gap-4">
    //           <div className="badge badge-lg badge-outline text-orange-600 border-green-600 font-medium">
    //           Location: {food.pickup_location}
    //         </div>

    //         <div className="badge badge-lg badge-outline text-orange-600 border-green-600 font-medium">
    //           Food Qty: {food.food_quantity}
    //         </div>
    //         </div>

         
    //         <p className="text-gray-600 leading-relaxed text-base md:text-lg">
    //           {food.additional_notes}
    //         </p>

            
    //         <div className="flex gap-3 mt-6">
    //           <Link
    //             to={`/manage-foods/${food._id}`}
    //             className="btn btn-primary rounded-full bg-linear-to-r from-orange-500 to-red-600 text-white border-0 hover:from-orange-600 hover:to-red-700"
    //           >
    //             Update Food
    //           </Link>

    //           <button
    //             onClick={handleDownload}
    //             className="btn btn-outline rounded-full border-gray-300 hover:border-orange-500 hover:text-orange-600"
    //           >
    //             Download
    //           </button>

    //           <button
    //             onClick={handleDelete}
    //             className="btn btn-outline rounded-full border-gray-300 hover:border-orange-500 hover:text-orange-600"
    //           >
    //             Delete
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>


    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
        {/* Food Image */}
        <img
          src={food.food_image}
          alt={food.food_name}
          className="w-full h-72 object-cover"
        />

        {/* Info Section */}
        <div className="p-6">
          <h2 className="text-3xl font-bold text-green-700 mb-4">
            {food.food_name}
          </h2>

          {/* Donator Info */}
          <div className="flex items-center gap-3 mb-5">
            <img
              src={food.donator_image}
              alt={food.donator_name}
              className="w-12 h-12 rounded-full border-2 border-orange-400"
            />
            <div>
              <p className="text-lg font-semibold text-gray-800">
                {food.donator_name}
              </p>
              <p className="text-sm text-gray-500">{food.donator_email}</p>
            </div>
          </div>

          {/* Food Info */}
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <p className="text-gray-700">
              <span className="font-semibold text-green-700">Quantity:</span>{" "}
              {food.food_quantity}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold text-green-700">Pickup Location:</span>{" "}
              {food.pickup_location}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold text-green-700">Expire Date:</span>{" "}
              {food.expire_date}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold text-green-700">Status:</span>{" "}
              <span
                className={`${
                  food.food_status === "Available"
                    ? "text-green-600"
                    : "text-red-500"
                } font-semibold`}
              >
                {food.food_status}
              </span>
            </p>
          </div>

          {/* Additional Notes */}
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 mb-6">
            <h3 className="text-lg font-semibold text-orange-600 mb-2">
              Additional Notes:
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {food.additional_notes || "No additional notes provided."}
            </p>
          </div>

          {/* Request Button */}
          <div className="text-center">
            <button
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition"
            >
              🍽 Request Food
            </button>
          </div>
        </div>
      </div>
    </div>

    );
};

export default FoodDetails;