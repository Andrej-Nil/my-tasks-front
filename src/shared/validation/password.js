export const validationPassword = (password) => {
    if(!password.trim()){
        return "Введите пароль";
    }

    if(password.length < 6){
        return "Пароль должен быть не короче 6 символов";
    }
}