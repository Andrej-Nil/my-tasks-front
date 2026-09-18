import {useUser} from "@/entities/user";
import Welcome from "./welcome/Welcome";
import Dashboard from "./dashboard/Dashboard";

const HomePage = () => {
    const {data: user} = useUser();

    return user ? <Dashboard/> : <Welcome/>
}

export default HomePage;