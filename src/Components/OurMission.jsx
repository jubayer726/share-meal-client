import React from "react";

const OurMission = () => {
  return (
  <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 text-green-700">
  {/* Header Section */}
  <div className="text-center mb-10">
    <h1 className="text-2xl md:text-3xl font-bold mb-2">Our Purpose & Our Values</h1>
    <p className="text-lg md:text-xl text-green-500 mb-4">
      Empowering people to end global hunger
    </p>
    <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-3xl mx-auto">
      We're here to end global hunger. And we're guessing you are too. 
      That's why we were founded in 2015 under the United Nations World Food Programme — 
      to make fighting hunger accessible to everyone. Because with just BDT 68.00 
      and a few taps on your phone, you can share your meal with someone in need.
    </p>
  </div>

  {/* Values Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    
    {/* Card 1 */}
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 text-center hover:shadow-md transition duration-300">
      <div className="flex flex-col items-center mb-4">
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-50 mb-3">
          <img src="https://i.postimg.cc/MXJw7ntF/M1.avif" alt="Open and honest" className="w-10 h-10 rounded-full object-cover" />
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Open and honest</h3>
      </div>
      <p className="text-gray-600 text-sm md:text-base">
        We want you to know how your donation is used and the impact you're
        having around the world.
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 text-center hover:shadow-md transition duration-300">
      <div className="flex flex-col items-center mb-4">
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-50 mb-3">
          <img src="https://i.postimg.cc/0r1vYzZW/m2.avif" alt="Every shared meal counts" className="w-10 h-10 rounded-full object-cover" />
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Every shared meal counts</h3>
      </div>
      <p className="text-gray-600 text-sm md:text-base">
        Give what you can — whether it's one meal or one year of meals — and know that it makes a difference.
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 text-center hover:shadow-md transition duration-300">
      <div className="flex flex-col items-center mb-4">
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-50 mb-3">
          <img src="https://i.postimg.cc/Rqxm7WG8/m3.avif" alt="We're in it together" className="w-10 h-10 rounded-full object-cover" />
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">We're in it together</h3>
      </div>
      <p className="text-gray-600 text-sm md:text-base">
        We want fighting hunger to be inclusive so that anyone, anywhere, can share the meal.
      </p>
    </div>

  </div>
</div>
   
  );
};

export default OurMission;
