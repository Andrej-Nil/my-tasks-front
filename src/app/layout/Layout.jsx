import { Outlet } from 'react-router-dom';
import { Header } from "@/widgets/header/index.js";
import Footer from "@/widgets/footer/index.js";
import {useUser} from "@/entities/user";

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
        </div>
    )
}

export default Layout;