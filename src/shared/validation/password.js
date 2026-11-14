export const validationPassword = (password) => {
    if(!password || !password.trim()){
        return "Введите пароль";
    }
    if(password.length < 8){
        return "Пароль должен быть не короче 8 символов";
    }

    return "";
}