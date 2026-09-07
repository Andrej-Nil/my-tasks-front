import { Outlet } from 'react-router-dom';
import { Header } from "@/widgets/header/index.js";
import Footer from "@/widgets/footer/index.js";

const Layout = () => {
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