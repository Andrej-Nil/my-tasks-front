import {useUserStore} from "@/entities/user";
import Welcome from "./welcome/Welcome";
import Dashboard from "./dashboard/Dashboard";

const HomePage = () => {
    const user = useUserStore((state) => state.user);

    return user ? <Dashboard/> : <Welcome/>
}

export default HomePage;