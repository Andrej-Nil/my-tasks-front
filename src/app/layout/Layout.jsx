import { Outlet } from 'react-router-dom';
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import { useUser } from "@/entities/user";
import { CreateTask } from "@/features/create-task";

const Layout = () => {

    const { isPending } = useUser();

    if (isPending) {
        return <div>Загрузка приложения...</div>;
    }
    return(
        <div className="app">
            <Header />
            <div className="content">
                <Outlet />
            </div>
            <Footer />
            <CreateTask />
        </div>
    )
}

export default Layout;