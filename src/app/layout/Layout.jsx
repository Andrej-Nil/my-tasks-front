import { Outlet } from 'react-router-dom';
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import { useUser } from "@/entities/user";
import { CreateTaskModal } from "@/widgets/create-task-modal";
import {UpdateTaskModal} from "@/widgets/update-task-modal";
import {ErrorModal} from "@/shared/ui/error-modal";

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

            <CreateTaskModal />
            <UpdateTaskModal />
            <ErrorModal />

        </div>
    )
}

export default Layout;