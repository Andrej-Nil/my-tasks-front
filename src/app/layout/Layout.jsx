import { Outlet } from 'react-router-dom';
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import { useUser } from "@/entities/user";
import { CreateTaskModal } from "@/widgets/create-task-modal";
import { UpdateTaskModal } from "@/widgets/update-task-modal";
import { ErrorModal } from "@/shared/ui/error-modal";
import { LoaderBlock } from "@/shared/ui/loader-block";
import { ProfileModal } from "@/widgets/profile-modal";

const Layout = () => {

    const { isPending } = useUser();

    return(
        <div className="app">
            <Header />
            <div className="content">
                {isPending ? <LoaderBlock /> : <Outlet />}
            </div>
            <Footer />

            <CreateTaskModal />
            <UpdateTaskModal />
            <ErrorModal />
            <ProfileModal />

        </div>
    )
}

export default Layout;