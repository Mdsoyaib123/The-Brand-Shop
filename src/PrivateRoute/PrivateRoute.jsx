/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../ContextApi/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user,loading}= useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <p>loading.....</p>
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;
