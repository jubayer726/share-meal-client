import React from "react";

const About = () => {
  const teamMembers = [
    {
      name: "Md Jubayer Hossain",
      role: "Founder & Lead Developer",
      image: "https://i.postimg.cc/FzTr6D42/JUBAYER_Photo.jpg",
    },
    {
      name: "Jabir Adnan",
      role: "Research Specialist",
      image: "https://i.postimg.cc/k43ZxZfv/Jubayer2.jpg",
    },
    {
      name: "Mesbah Uddin Raihan",
      role: "UI/UX Designer",
      image: "https://i.postimg.cc/qv7dR95L/teacher.png",
    },
  ];
  return (
    <section className="bg-green-50 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Text Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-green-800 mb-6">
            About Share-Meal
          </h2>

          <p className="text-gray-700 text-lg leading-7 mb-4">
            Philadelphia has the second highest rate of poverty of any major
            city in the U.S., and food insecurity is a public health crisis in
            our community. The ripple effects of the pandemic, slashed emergency
            benefits, and skyrocketing inflation have only made things even
            worse. Our network of caring volunteers, dedicated professionals,
            and generous donors works to bring nourishing food to our neighbors
            in need.
          </p>

          <p className="text-gray-700 text-lg leading-7">
            The food we distribute comes from many places including: government
            partners, supermarkets, wholesalers, restaurants, farms and food
            drives. There are complex logistics and significant funding needs to
            purchasing, coordinating, storing, packaging and distributing
            millions of pounds of food each month. Our work and impact is made
            possible by the generosity of our donors. Share started in 1986 as a
            food co-op for communities in need of access to low-cost food in
            Philadelphia.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="flex justify-center">
          <img
            src="https://www.sharefoodprogram.org/wp-content/uploads/2023/05/last-minute-lot-work2-1.jpg"
            alt="about illustration"
            className="w-full max-w-md"
          />
        </div>
      </div>

      <section className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Heading */}
          <h2 className="text-4xl font-bold text-green-800 mb-4">
            Meet the Team
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Our team is built with dedicated developers, researchers, and
            education-enthusiasts working together to make scholarship access
            easier.
          </p>

          {/* Team Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
                />

                <h3 className="text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>

                <p className="text-gray-600 mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
