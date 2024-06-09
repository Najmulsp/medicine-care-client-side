import { useContext, useState } from "react";
import bgImg from "../assets/login/log in page image 4  .jpg";


import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { AuthContext } from "./AuthProvider";
import { toast } from "react-toastify";
import Googlelogin from "../pages/shared/Googlelogin";

// import useAxiosPublic from "../../hooks/useAxiosPublic";


const Login = () => {
  const { login } = useContext(AuthContext);
//   const axiosPublic = useAxiosPublic()
  // get state from privet route where user wanted to go and after log in send there
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";



  const [showPassword, setShowPassword] = useState(false);


  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);

    // log in
    login(email, password)
    .then((result) => {
      console.log(result.user);
      toast("You have successfully logged in");
      navigate(from, { replace: true });
    });
  };


  return (
    <div
      className="hero min-h-screen "
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="hero-content flex-col lg:flex-row lg:w-4/12 border shadow-2xl">
        
        <div className="card shrink-0 w-full max-w-sm ">
          <h1 className="text-4xl text-center text-sky-300 font-bold p-2">Log in</h1>
          <Googlelogin></Googlelogin>
          
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text text-white">Password</span>
              </label>
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="password"
                className="input input-bordered"
                required
              />
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
                value="Join Us"
                className="btn bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-500 hover:bg-gradient-to-br dark:text-white"
              />
            </div>
          </form>

          <div className="text-center">
            <p className="dark:text-white">
              New here?{" "}   
              <Link
                to="/register"
                className="text-sky-300 font-bold underline"
              > Create a New Account</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;