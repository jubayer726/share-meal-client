import React, { use, useState } from 'react';
import { AuthContext } from '../Authorization/AuthContext';
import Swal from 'sweetalert2';

const AddFood = () => {
  const {user} = use(AuthContext);
  const [refetch, setRefetch] = useState(false);
  
    const handleSubmit = (e) =>{
        e.preventDefault();
        const form = e.target;
        const formData = {
          food_name: form.name.value,
          food_quantity: form.quantity.value,
          pickup_location: form.location.value,
          expire_date: form.expire.value,
          additional_notes: form.description.value,
          food_image: form.photo.value,
          donator_name: user.displayName,
          donator_image: user.photoURL,
          created_by: user.email,
          created_at: new Date(),
          food_status: form.available.value
        };

         Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, added it!",
        }).then((result) => {
          if (result.isConfirmed) {
        fetch('http://localhost:3000/foods',{
          method: "POST",
          headers: {
            "Content-type" : "application/json",
          },
          body: JSON.stringify(formData)
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
          setRefetch(!refetch)
        })
        .catch(error=>{
          console.log(error);
        })
        
            Swal.fire({
              title: "Added!",
              text: "Your file has been added.",
              icon: "success",
            });
          }
          
        })
        .catch((error) => {
        console.log(error);
      });
  };
  
    return (
        <div className="card border border-gray-200 bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl">
        <div className="card-body p-6 relative">
        <h2 className="text-2xl font-bold text-center mb-6">Add New Foods</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="label font-medium">Food Name</label>
            <input
              type="text"
              name="name"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Food Name"
            />
          </div>

          {/* Category Dropdown */}
          <div>
            <label className="label font-medium">Quantity</label>
            <select
              defaultValue={""}
              name="quantity"
              required
              className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
            >
              <option value="" disabled>
                Select Quantity for People
              </option>
              <option value="01">Serves 1 people</option>
              <option value="02">Serves 2 people</option>
              <option value="03">Serves 3 people</option>
              <option value="04">Serves 4 people</option>
              <option value="05">Serves 5 more people</option>
              <option value="10">Serves 10 more people</option>
              <option value="20">Serves 20 more people</option>
              <option value="100">Serves 100 more people</option>
            </select>
          </div>
            {/* Pickup Location */}
           <div>
            <label className="label font-medium">Pickup Location</label>
            <input
              type="text"
              name="location"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Pickup Location"
            />
          </div>
            {/* Expire Date */}
           <div>
            <label className="label font-medium">Expire Date</label>
            <input
              type="text"
              name="expire"
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
              defaultValue={""}
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
            Add Model
          </button>
        </form>
      </div>
    </div>
    );
};

export default AddFood;