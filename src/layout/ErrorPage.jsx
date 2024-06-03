import { Link } from "react-router-dom";
import errorImg from "../assets/404 page/error img .png";

const ErrorPage = () => {
  return (
    <div className="container h-full bg-cover">
      <div className="w-full h-screen relative">
        <img src={errorImg} alt="" className="h-screen w-full" />
        <div className="absolute top-1/2 left-[44%] text-white pt-6 space-y-2">
          <h1 className="text-6xl font-bold">Oops!</h1>
          <p className="text-3xl">Page Not Found</p>
          <p className="text-2xl">
            Go back to{" "}
            <Link to="/">
              <span className="text-cyan-300 font-bold">Home</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
