import api from "@/shared/api";

export const updatePassword = async (currentPassword, newPassword) => {
    const response = await api.put(
        'api/user/update-password',
        {
            password: currentPassword,
            new_password: newPassword,
            new_password_confirmation: newPassword
        }
    );

    return response;
}