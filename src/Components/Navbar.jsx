import React, { use } from "react";
import logo from "/logo2.png";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Authorization/AuthContext";
import { IoLogIn, IoLogOut } from "react-icons/io5";

const Navbar = () => {
  const { user, signOutWithGoogle } = use(AuthContext);

  const links = <>
        <li><NavLink to='/' className={({isActive} )=>isActive? "text-gray-600 underline" : ""}>Home</NavLink></li>
        <li><NavLink to='/available-foods' className={({isActive} )=>isActive? "text-gray-600 underline" : ""}>Available Foods</NavLink></li>
    </>

  const handleLogOut = () => {
    signOutWithGoogle()
      .then(() => {
        alert("Logout Successfully");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="navbar bg-green-50 shadow-sm px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-xl font-semibold"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="flex gap-1 justify-center items-center">
          <img className="w-14 rounded-full" src={logo} alt="Logo" />
          <h1 className="btn-ghost text-2xl text-green-800 font-bold">
            Share Meal
          </h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-l font-semibold">
          {links}
        </ul>
      </div>  
           
      <div className="navbar-end gap-3">
        {user ? (
          <div className="dropdown dropdown-end z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-12 border-2 border-green-300 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  referrerPolicy="no-referrer"
                  src={
                    user.photoURL ||
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI9lRck6miglY0SZF_BZ_sK829yiNskgYRUg&s"
                  }
                />
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              <div className=" pb-3 border-b border-b-gray-200">
                <li className="text-sm font-bold">{user.displayName || "User Name"}</li>
                <li className="text-xs">{user.email}</li>
              </div>
              <li className="mt-3">
                <Link to={"/add-food"}>Add Food</Link>
              </li>

              <li>
                <Link to={"/manage-foods"}>Manage My Foods</Link>
              </li>

              <li>
                <Link to={"/food-request"}>My Food Requests</Link>
              </li>
              <li><button
                  onClick={handleLogOut}
                  className="btn btn-xs text-left bg-linear-to-r from-orange-500 to-red-500 text-white my-2"
                >
                  <IoLogOut /> Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            to={"/login"}
            className="btn rounded-full border-gray-300  btn-sm bg-linear-to-r from-orange-500 to-red-500 text-white"
          >
            {" "}
            <IoLogIn /> Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
