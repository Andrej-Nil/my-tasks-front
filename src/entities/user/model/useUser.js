import {useQuery} from "@tanstack/react-query";
import {getUser} from "@/entities/user/api/getUser";


export const useUser = () => {
    return useQuery({
        queryKey: ['user'],
        queryFn: getUser,
        retry: false,
    })
}