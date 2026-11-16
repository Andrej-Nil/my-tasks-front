import {useUser} from "@/entities/user";
import Welcome from "./welcome/Welcome";
import Dashboard from "./dashboard/Dashboard";

const HomePage = () => {
    const {data: user} = useUser();

    return (
        <main>

            {user ? <Dashboard/> : <Welcome/>}
        </main>

    )
}

export default HomePage;