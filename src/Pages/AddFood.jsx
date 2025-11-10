import React from 'react';

const AddFood = () => {

    const handleSubmit = () =>{
        console.log("Clicked");
    }
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
              placeholder="Enter name"
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
              <option value="Vehicles">Serves 1 people</option>
              <option value="Plants">Serves 2 people</option>
              <option value="Foods">Serves 3 people</option>
              <option value="Home & Living">Serves 4 people</option>
              <option value="Characters">Serves 5 more people</option>
              <option value="Space">Serves 10 more people</option>
              <option value="Animals">Serves 20 more people</option>
              <option value="Other">Serves 100 more people</option>
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
              placeholder="Enter name"
            />
          </div>
            {/* Expire Date */}
           <div>
            <label className="label font-medium">Food Name</label>
            <input
              type="text"
              name="expire"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter name"
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

          {/* Thumbnail URL */}
          <div>
            <label className="label font-medium">Foods Photo URL</label>
            <input
              type="url"
              name="thumbnail"
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