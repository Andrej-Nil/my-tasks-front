import {CreateShortTask} from "@/features/create-short-task";
import StartWork from "./StartWork";

const DashboardContent = ({tasks}) => {
    tasks = 0;

    return (
        <div className='dashboard__content'>

            {tasks.length ? null : <StartWork />}

            <div className="block container small">

                <CreateShortTask />
            </div>

        </div>
    )
}

export default DashboardContent;