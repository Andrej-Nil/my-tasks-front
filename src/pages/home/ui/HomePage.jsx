import {useUserStore} from "@/entities/user";
import {Welcome} from "@/widgets/welcome";

const HomePage = () => {
    const user = useUserStore((state) => state.user);

    return (
        <Welcome />
    )
}

export default HomePage;