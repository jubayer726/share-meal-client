const FAQ = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-600 mb-12">
          Frequently Asked Questions (FAQ)
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* LEFT COLUMN */}
          <div className="space-y-10">
            <div>
              <h3 className="text-lg font-semibold text-orange-600 mb-2">
                What is Share-Meal?
              </h3>
              <p className="text-gray-600  leading-relaxed">
                Share-Meal is a community-driven food sharing platform where people
                can donate meals, share surplus food, and help those in need.
                Our goal is to reduce food waste and fight hunger together.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-orange-600 mb-2">
                Nice initiative, how can I help?
              </h3>
              <p className="text-gray-600  leading-relaxed">
                You can help by donating meals, volunteering, or spreading the
                word among your friends and family. Every small effort makes
                a big impact.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-orange-600 mb-2">
                How does it work?
              </h3>
              <ul className="list-decimal ml-5 space-y-2 text-gray-600 ">
                <li>Create an account or login</li>
                <li>Browse available meals in your area</li>
                <li>Donate food or request a meal</li>
                <li>Connect with nearby donors or receivers</li>
                <li>Share happiness by sharing food ❤️</li>
              </ul>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-10">
            <div>
              <h3 className="text-lg font-semibold text-orange-600 mb-2">
                Do you charge money for using Share-Meal?
              </h3>
              <p className="text-gray-600 ">
                No. Share-Meal is completely free for everyone — now and always.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-orange-600 mb-2">
                Do I need a high-end device to use the platform?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Not at all. Share-Meal is a responsive web application and works
                smoothly on mobile phones, tablets, laptops, and desktop computers.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-orange-600 mb-2">
                Is Share-Meal available in my area?
              </h3>
              <p className="text-gray-600">
                We are expanding continuously. You can check availability by
                searching meals based on your location.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;
