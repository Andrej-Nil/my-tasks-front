import {useUser} from "@/entities/user/index.js";
import {Navigate, Outlet} from "react-router-dom";

const PublicRoute = () => {
    const {data: user} = useUser();
    if(user){
        return <Navigate to="/" replace />
    }

    return <Outlet />
}

export default PublicRoute;