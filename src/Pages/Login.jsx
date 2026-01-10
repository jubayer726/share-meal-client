import React, { use, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from "../Authorization/AuthContext";
import { toast } from "react-toastify";

const Login = () => {
  const {signInUser, signInwithGoogle} = use(AuthContext)
    const [showPass, setShowPass] = useState(false)
    const location = useLocation();
    const navigate = useNavigate();
     const [error, setError] = useState("");

  const handleLogIn = (e) =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
    .then(result=>{
      console.log(result.user);
       navigate(`${location.state? location.state : "/"}`)
    })
    .catch(error=>{
      console.log(error.message);
      const errorCode = error.code;
      setError(errorCode, error.message);
    })

  }
    const handleGoogleSignIn = () =>{
        signInwithGoogle()
        .then(result=>{
            console.log(result.user);
            toast.success("Login Successfully")
            navigate(`${location.state? location.state : "/"}`)
        })
        .catch(error=>{
            console.log(error.message);
        })

    }

  return (
    <div className="flex flex-col items-center min-h-screen justify-center bg-[url('/login.jpg')] bg-cover bg-center ">
      
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleLogIn} className="card-body">
          <h1 className="text-2xl font-semibold text-center p-5">
            Login your accout
          </h1>
          <p className="font-semibold text-center py-1">
            Don't have account ? Please{" "}
            <Link to="/register" className="text-secondary">
              Sign Up
            </Link>
          </p>
          <fieldset className="fieldset">
            {/* email */}
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              name="email"
            //   ref={emailRef}
              placeholder="Email"
              required
            />
            {/* password */}
            <label className="label">Password</label>
            <div className="relative">
              <input type={showPass? "text" : "password"} className="input" name="password" placeholder="Password"/>
              <span onClick={()=>setShowPass(!showPass)} className="absolute top-4 right-8">
                {showPass? <FaRegEye />: <FaRegEyeSlash />}</span>
            </div>
            <div>
            </div>
            <div>
              <Link to='/forgetpassword' className="link link-hover">Forgot password?</Link>
            </div>
            {error && <p className="text-red-700">{error}</p>}
            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
          </fieldset>
          
        </form>
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="h-px w-20 bg-gray-400"></div>
          <span className="text-sm">or</span>
          <div className="h-px w-20 bg-gray-400"></div>
        </div>
        {/* Google */}
        <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5] m-5">
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
