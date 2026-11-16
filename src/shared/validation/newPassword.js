export const validationNewPassword = (currentPassword, newPassword) => {
    if(!newPassword || !newPassword.trim()){
        return "Введите пароль";
    }

    if(newPassword.trim() === currentPassword.trim()){
        return "Новый пароль должен отличаться от текущего";
    }
    if(newPassword.length < 6){
        return "Пароль должен быть не колроче 6 символов";
    }

    return "";
}