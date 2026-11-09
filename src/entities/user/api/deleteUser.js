import api from "@/shared/api";

export const deleteUser = async (password) => {
    const response = await api.delete('api/user/delete', {
            data: {password}
        }
    )

    return response;
}