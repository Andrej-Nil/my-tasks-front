import {useQuery} from "@tanstack/react-query";
import {getTask} from "@/entities/task/api/getTask";

export const useTask = (taskId) => {
    return useQuery({
        queryKey: ['task', taskId],
        queryFn: () => getTask(taskId),
    })
}