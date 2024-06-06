import { Link, useLocation, useNavigate } from "react-router-dom";
import bgImg from "../assets/login/log in page image 4  .jpg";

import { useContext, useState } from "react";

import { AuthContext } from "./AuthProvider";
import { toast } from "react-toastify";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../hooks/useAxiosPublic";
// import useAuth from "../../hooks/useAuth";


const Register = () => {
  const axiosPublic = useAxiosPublic()
  const { logout, googleLogin} = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate()
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
 
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
    .then(result =>{
      console.log(result.user)
      
      updateUserProfile(data.name, data.photo)
      .then(()=>{
        const userInfo = {
          name: data.name,
          emai: data.email
        }
        axiosPublic.post('/users', userInfo)
        .then(res => {
          if(res.data.insertedId){
            reset()
            toast('User has created successfully')
            logout()
        navigate("/login")
          }
        });
        // logout()
        // navigate("/login")
        // navigate(from, { replace: true });
      })
      .catch(error=>{
        console.log(error.message)
      })
      
    })
  };
  const handleGoogleLogin = () => {
    googleLogin()
    .then((result) => {
      console.log(result.user);
      const userInfo= {
        name: result.user?.displayName,
        email: result.user?.email
      }
      axiosPublic.post('/users', userInfo)
      .then(res=>{
        console.log(res.data)
        toast("You have successfully logged in");
        navigate(from, { replace: true });
      })
      
    });
  };
  return (
    <div
      className="hero min-h-screen pt-10"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse lg:w-5/12 border shadow-2xl my-10">
        
        <div className="card shrink-0 w-full max-w-sm ">
          <h1 className="text-4xl text-center text-sky-300 font-bold p-2">Register</h1>
          <button
            onClick={() =>
              handleGoogleLogin()
            }
            aria-label="Login with Google"
            type="button"
            className="flex  mt-4 items-center justify-center w-9/12 mx-auto py-4 space-x-4 border rounded-md bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-500 hover:bg-gradient-to-br dark:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
            <p>Login with Google</p>
          </button>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            {/* name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Name</span>
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="name"
                className="input input-bordered"
               
              />
              {errors.name && <p className="text-red-500">Please enter your name.</p>}
            </div>
            {/* email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Email</span>
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="email"
                className="input input-bordered"
                
              />
              {errors.name && <p className="text-red-500">Email is required.</p>}
            </div>
            {/* photo url */}
            <div className="form-control">
              <label className="label dark:text-black">
                <span className="label-text text-white">Photo URL</span>
              </label>
              <input
                {...register("photo")}
                type="text"
                placeholder="url"
                className="input input-bordered"
                
              />
              
            </div>
            {/* password */}
            <div className="form-control relative">
              <label className="label ">
                <span className="label-text text-white">Password</span>
              </label>
              <input
                {...register("password", { required: true,
                   minLength: 6 ,
                   pattern:/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/
                  })}
                type={showPassword ? "text" : "password"}
                placeholder="password"
                className="input input-bordered"
                
              />
              {errors.password?.type === "required" && (
                <p className="text-red-500">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-500">Password must be at least 6 characters </p>
              )}
              {errors.password?.type === "pattern" && (<p className="text-red-500">Password must have one Uppercase, one Lowercase, one number and one special character.</p>)}
             
              <span
                className="text-2xl absolute top-12 right-8"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <IoEyeOutline></IoEyeOutline>
                ) : (
                  <IoEyeOffOutline />
                )}
              </span>
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Register"
                className="btn bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-500 hover:bg-gradient-to-br dark:text-white"
              />
            </div>
          </form>
          <div className="text-center">
            <p className="text-white">
              Already registered?{" "}
              <Link to="/login" className="text-cyan-300 font-bold underline">
                Go to log in
              </Link>
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;