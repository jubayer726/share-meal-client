import React from "react";

const OurMission = () => {
  return (
   <div className="w-7xl mx-auto py-10 text-green-700">
    <div className="py-5">
        <h1 className="text-3xl font-bold  text-center py-4">Our Purpose & Our Values</h1>
        <p className="text-center text-xl text-green-400">Empowering people to end global hunger</p>
        <p className="text-sm text-center p-8">We're here to end global hunger. And were guessing you are too. That's why we were founded in 2015 under the United Nations World Food Programme — <br /> to make fighting hunger accessible to everyone. Because with just BDT 68.00 and a few taps on your phone, you can share your meal with someone in need.</p>
    </div>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-between">
      <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow-sm m-5 p-6 text-center hover:shadow-md transition">
        <div className="flex justify-center items-center gap-3 mb-4">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-50">
            <img src="https://i.postimg.cc/MXJw7ntF/M1.avif" alt="photo" />
          </div>
          <div><h3 className="text-lg font-semibold text-gray-800 mb-2">Open and honest</h3></div>
        </div>
        <p className="text-gray-600">
          We want you to know how your donation is used and the impact you're
          having around the world.
        </p>
      </div>

      <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow-sm m-5 p-6 text-center hover:shadow-md transition">
        <div className="flex justify-center items-center gap-3 mb-4">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-50">
            <img src="https://i.postimg.cc/0r1vYzZW/m2.avif" alt="photo" />
          </div>
          <div><h3 className="text-lg font-semibold text-gray-800 mb-2">Every shared meal counts</h3></div>
        </div>
        <p className="text-gray-600">
          Give what you can — whether it's one meal or one year of meals — and know that it makes a difference.
        </p>
      </div>

      <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow-sm m-5 p-6 text-center hover:shadow-md transition">
        <div className="flex justify-center items-center gap-3 mb-4">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-50">
            <img src="https://i.postimg.cc/Rqxm7WG8/m3.avif" alt="photo" />
          </div>
          <div><h3 className="text-lg font-semibold text-gray-800 mb-2"> We're in it together</h3></div>
        </div>
        <p className="text-gray-600">
          We want fighting hunger to be inclusive so that anyone, anywhere, can share the meal.
        </p>
      </div>
    </div>
   </div>
  );
};

export default OurMission;
