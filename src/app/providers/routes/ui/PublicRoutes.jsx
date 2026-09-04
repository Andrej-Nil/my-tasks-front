import {useUserStore} from "@/entities/user/index.js";
import {Navigate, Outlet} from "react-router-dom";

const PublicRoutes = () => {

    const user = useUserStore((state) => state.user);

    if(user){
        return <Navigate to="/" replace />
    }

    return <Outlet />
}

export default PublicRoutes;