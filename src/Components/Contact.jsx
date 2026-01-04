import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div>
      <section className="bg-green-50 py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-green-800 mb-6">
              Contact Us
            </h2>

            <p className="text-gray-700 text-lg leading-7 mb-6">
              For press and media inquiries, contact Chief Communications Officer <br />
              at: <span className="text-blue-600">jubayer@sharemeal.com</span>
            </p>

            <div className="space-y-5 text-gray-800 text-lg">
              <div className="flex items-start space-x-3">
                <span className="text-2xl"><FaLocationDot /></span>
                <p>
                  Mohakhali Dhaka-1200.
                  <br />
                  Dhaka Bangladesh
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <span className="text-2xl"><FaPhoneAlt /></span>
                <p>(+88) 01234567890</p>
              </div>

              <div className="flex items-center space-x-3">
                <span className="text-2xl"><MdEmail /></span>
                <p>support@sharemeal.com</p>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white shadow-md rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-green-800 mb-6">
              Send us a Message
            </h3>

            <form className="space-y-5">
              <div>
                <label className="block text-gray-700 mb-1">Your Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2
                focus:ring-blue-500"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2
                focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1">Message</label>
                <textarea
                  rows="4"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2
                focus:ring-blue-500"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-linear-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 transition text-white py-3 rounded-lg font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
