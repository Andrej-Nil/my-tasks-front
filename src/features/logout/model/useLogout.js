import {useNavigate} from "react-router-dom";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {logout} from "@/entities/user";

export const useLogout = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn:  logout,
        networkMode: 'always',

        onSuccess: () => {
            queryClient.setQueryData(['user'], null);
            navigate('/', { replace: true });
        }
    })
}