export const validationCurrentPassword = (password) => {
    if(!password || !password.trim()){
        return "Введите пароль";
    }
}