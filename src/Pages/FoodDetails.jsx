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

    

    const handleDelete = () =>{
        console.log("clicked");
    }

    const handleDownload = () =>{
        console.log("clickeddddd");
    }

    if(loading){
    return <Loading></Loading>
  }
    return (
       <div className="max-w-6xl mx-auto p-4 md:p-6 lg:p-8">
        <div className="card bg-base-100 shadow-xl border border-gray-200 rounded-2xl overflow-hidden">
            <div className="flex flex-col md:flex-row gap-8 p-6 md:p-8">
            <div className="shrink-0 w-full md:w-1/2">
            <img
              src={food.food_image}
              alt=""
              className="w-full object-cover rounded-xl shadow-md"
            />
          </div>

          <div className="flex flex-col justify-center space-y-4 w-full md:w-1/2">
           
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              {food.food_name}
            </h1>

            
            <div className="badge badge-lg badge-outline text-orange-600 border-green-600 font-medium">
              {food.donator_name}
            </div>

           
            <div className="flex gap-4">
              <div className="badge badge-lg badge-outline text-orange-600 border-green-600 font-medium">
              Location: {food.pickup_location}
            </div>

            <div className="badge badge-lg badge-outline text-orange-600 border-green-600 font-medium">
              Food Qty: {food.food_quantity}
            </div>
            </div>

         
            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              {food.additional_notes}
            </p>

            
            <div className="flex gap-3 mt-6">
              <Link
                to={`/manage-foods/${food._id}`}
                className="btn btn-primary rounded-full bg-linear-to-r from-orange-500 to-red-600 text-white border-0 hover:from-orange-600 hover:to-red-700"
              >
                Update Food
              </Link>

              <button
                onClick={handleDownload}
                className="btn btn-outline rounded-full border-gray-300 hover:border-orange-500 hover:text-orange-600"
              >
                Download
              </button>

              <button
                onClick={handleDelete}
                className="btn btn-outline rounded-full border-gray-300 hover:border-orange-500 hover:text-orange-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    );
};

export default FoodDetails;