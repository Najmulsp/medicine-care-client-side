import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";


const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    
    if(loading){
        return <div className="w-full flex justify-center py-6"><span className="loading loading-spinner loading-lg text-purple-600"></span></div>
    }
        if(user?.email){
            return children
        }
     return <Navigate state={location.pathname} to="/login" replace></Navigate>
};

PrivetRoute.propTypes = {
    children: PropTypes.object,
  };
export default PrivetRoute;