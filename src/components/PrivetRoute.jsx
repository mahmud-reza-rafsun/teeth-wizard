import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <h2>Loading...</h2>
    }
    if (!user) {
        return <Navigate state={{ from: location?.pathname }} to="/login" />
    }
    return children;
}

export default PrivetRoute;