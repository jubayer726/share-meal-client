import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const UpdateFoods = () => {
    const data = useLoaderData();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = {
      food_name: form.name.value,
          food_quantity: form.quantity.value,
          pickup_location: form.location.value,
          expire_date: form.expire.value,
          additional_notes: form.description.value,
          food_image: form.photo.value,
          food_status: form.available.value
    };
    fetch(`https://share-meal-searver.vercel.app/foods/${data._id}`, 
      {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    }
  )
       .then((res) => res.json())
      .then((data) => {
        toast.success("✅ Food details updated successfully!")
        navigate("/manage-foods");
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "✅ Updated!",
            text: "Food details updated successfully!",
            icon: "success",
            confirmButtonColor: "#22c55e",
          });
          
        }
      });
    }
    return (
        <div className="card border border-gray-200 bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl">
        <div className="card-body p-6 relative">
        <h2 className="text-2xl font-bold text-center mb-6">Update Food Details</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="label font-medium">Food Name</label>
            <input
              type="text"
              name="name"
              defaultValue={data.food_name}
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Food Name"
            />
          </div>

          {/* Quantity Dropdown */}
          <div>
            <label className="label font-medium">Quantity</label>
            <select
              defaultValue={data.food_quantity}
              name="quantity"
              required
              className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
            >
              <option value="" disabled>
                Select Quantity for People
              </option>
              <option value="01 Person">Serves 1 people</option>
              <option value="02 Person">Serves 2 people</option>
              <option value="03 Person">Serves 3 people</option>
              <option value="04 Person">Serves 4 people</option>
              <option value="05 Person">Serves 5 people</option>
              <option value="06 Person">Serves 6 people</option>
              <option value="07 Person">Serves 7 people</option>
              <option value="08 Person">Serves 8 people</option>
              <option value="09 Person ">Serves 9 people</option>
              <option value="10 Person +">Serves 10 more people</option>
              <option value="20 Person +">Serves 20 more people</option>
              <option value="100 Person +">Serves 100 more people</option>
            </select>
          </div>
            {/* Pickup Location */}
           <div>
            <label className="label font-medium">Pickup Location</label>
            <input
              type="text"
              name="location"
              defaultValue={data.pickup_location}
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Pickup Location"
            />
          </div>
            {/* Expire Date */}
           <div>
            <label className="label font-medium">Expire Date</label>
            <input
              type="date"
              name="expire"
              defaultValue={data.expire_date}
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Expire Date"
            />
          </div>

          {/* Description Textarea */}
          <div>
            <label className="label font-medium">Description</label>
            <textarea
              name="description"
              defaultValue={data.additional_notes}
              required
              rows="3"
              className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-[200px]"
              placeholder="Enter description"
            ></textarea>
          </div>

          {/* Status Dropdown */}
          <div>
            <label className="label font-medium">Food Status</label>
            <select
              defaultValue={data.food_status}
              name="available"
              required
              className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
            >
              <option value="" disabled>
                Food Status
              </option>
              <option value="Available">Available</option>
              <option value="Not-Availabl">Not-Available</option>
            </select>
          </div>

          {/* Food Photo URL */}
          <div>
            <label className="label font-medium">Foods Photo URL</label>
            <input
              type="url"
              name="photo"
              defaultValue={data.food_image}
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-full text-white mt-6 rounded-full bg-linear-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
    );
};

export default UpdateFoods;