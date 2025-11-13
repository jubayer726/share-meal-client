import React, { use, useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { AuthContext } from "../Authorization/AuthContext";
import Loading from "../Components/Loading";
import Swal from "sweetalert2";

const FoodDetails = () => {
  //  const navigate = useNavigate();
  const { id } = useParams();
  const [food, setFood] = useState({});
  const { user, loading, setLoading } = use(AuthContext);
  const [refetch, setRefetch] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch(`https://share-meal-searver.vercel.app/foods/${id}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setFood(data);
        setLoading(false);
      });
  }, [id, user, loading, setLoading]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = {
      food_id: food._id,
      food_name: food.food_name,
      requester_name: user?.displayName,
      requester_email: user?.email,
      requester_image: user?.photoURL,
      location: form.location.value,
      reason: form.reason.value,
      contact: form.contact.value,
      status: "pending",
      requested_at: new Date(),
    };

    fetch(`https://share-meal-searver.vercel.app/requiests/${food._id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          title: "✅ Request Submitted!",
          text: "Your food request has been sent successfully.",
          icon: "success",
          confirmButtonColor: "#22c55e",
        });
        setRefetch(!refetch);
      })
      .catch((error) => {
        Swal.fire({
          title: "❌ Error",
          text: "Something went wrong while sending your request.",
          icon: "error",
          confirmButtonColor: "#ef4444",
        });
        console.log(error);
      });
  };

  if (loading) {
    return <Loading></Loading>;
  }
  return (
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
              <span className="font-semibold text-green-700">
                Pickup Location:
              </span>{" "}
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
              onClick={() => setShowModal(true)}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition"
            >
             Request Food
            </button>
          </div>

          {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 relative">
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-3 right-4 text-gray-500 hover:text-gray-700 text-xl"
                >
                  ✕
                </button>

                <h3 className="text-2xl font-bold text-center mb-5 text-green-700">
                  Request This Food
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Location */}
                  <div>
                    <label className="label font-medium">Write Location</label>
                    <input
                      type="text"
                      name="location"
                      required
                      className="input input-bordered w-full rounded-full focus:border-green-400 focus:outline-none"
                      placeholder="Enter your location"
                    />
                  </div>

                  {/* Reason */}
                  <div>
                    <label className="label font-medium">Why Need Food</label>
                    <textarea
                      name="reason"
                      required
                      rows="3"
                      className="textarea textarea-bordered w-full rounded-2xl focus:border-green-400 focus:outline-none"
                      placeholder="Explain why you need this food"
                    ></textarea>
                  </div>

                  {/* Contact */}
                  <div>
                    <label className="label font-medium">Contact No.</label>
                    <input
                      type="text"
                      name="contact"
                      required
                      className="input input-bordered w-full rounded-full focus:border-green-400 focus:outline-none"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="btn w-full text-orange-600 mt-4 rounded-full bg-gradient-to from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                  >
                    Submit Request
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
