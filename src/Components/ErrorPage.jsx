import React from "react";
import Navbar from "./Navbar";
import error from "/error-404.png";
import Footer from "./Footer";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <img src={error} alt="" />
          <h1 className="text-3xl p-10 font-bold py-5">
            Oops, 404 page not found!
          </h1>
          <p className="text-gray-500">
            The page you are looking or is not available
          </p>
          <Link
            to="/"
            className="btn bg-orange-500 border-green-500 px-5 rounded-2xl text-white my-5"
          >
            Go Back!
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
