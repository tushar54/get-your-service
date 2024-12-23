import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Context } from "../AllContext/Authcontext";


const PrivateRoute = ({children}) => {
const {currentUser,loading}=useContext(Context)
const location=useLocation();


if(loading){
    return <span className="loading loading-spinner loading-lg"></span>
}

if(currentUser&&currentUser?.email){
    return children;
}
    return <Navigate state ={location.pathname} to={'/login'}></Navigate>
};

export default PrivateRoute;