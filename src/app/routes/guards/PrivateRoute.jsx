import {useUser} from "@/entities/user/index.js";
import {Navigate, Outlet} from "react-router-dom";

const PrivateRoute = () => {
    const {data: user} = useUser();
    if(!user){
        return <Navigate to="/" replace />
    }

    return <Outlet />
}

export default PrivateRoute;