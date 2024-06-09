import { Link, useNavigate } from "react-router-dom";
import bgImg from "../assets/login/log in page image 4  .jpg";

import { useContext, useState } from "react";

import { AuthContext } from "./AuthProvider";
import { toast } from "react-toastify";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Googlelogin from "../pages/shared/Googlelogin";
// import useAuth from "../../hooks/useAuth";


const Register = () => {
  const axiosPublic = useAxiosPublic()
  const { logout,} = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate()
  // const location = useLocation();
  // const from = location.state?.from?.pathname || "/";
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
          email: data.email,
          photoURL: data.photo
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
  
  return (
    <div
      className="hero min-h-screen pt-10"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse lg:w-5/12 border shadow-2xl my-10">
        
        <div className="card shrink-0 w-full max-w-sm ">
          <h1 className="text-4xl text-center text-sky-300 font-bold p-2">Register</h1>
          <Googlelogin></Googlelogin>
          
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