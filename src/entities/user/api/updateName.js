import api from "@/shared/api";

export const updateName = async (newName) => {
    const response = await api.put('api/user/update-name', {name: newName});

    return response.data;
}