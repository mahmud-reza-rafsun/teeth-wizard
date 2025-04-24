import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivetRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    if (!user) {
        <Navigate to={'/login'} />
        return;
    }
    return children;
}

export default PrivetRoute;