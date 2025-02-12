import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Context } from "../AllContext/Authcontext";


const PrivateRoute = ({ children }) => {
    const { currentUser, loading,setLoading } = useContext(Context)
    const location = useLocation();
    if (currentUser && currentUser?.email) {
        return children;
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivateRoute;