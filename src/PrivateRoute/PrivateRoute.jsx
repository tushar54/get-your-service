import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Contex } from "../AuthContex/Authcontex";


const PrivateRoute = ({children}) => {
const {currentUser,loading}=useContext(Contex)
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