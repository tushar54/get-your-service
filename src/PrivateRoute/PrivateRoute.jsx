import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Context } from "../AllContext/Authcontext";


const PrivateRoute = ({ children }) => {
    const { currentUser, loading } = useContext(Context)
    const location = useLocation();


    if (loading) {
        return <div className="fixed inset-0 flex items-center justify-center bg-gray-100">
            <span className="loading loading-dots loading-lg"></span>
        </div>
    }

    if (currentUser && currentUser?.email) {
        return children;
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivateRoute;