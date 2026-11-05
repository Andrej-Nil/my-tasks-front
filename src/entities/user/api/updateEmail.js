import api from "@/shared/api";

export const updateEmail = async (email, password) => {
    const response = await api.put('api/user/update-email',
        {email, password}
    );
    return response.data;
}