export const validationUserName = (userName) => {

    if(!userName || !userName.trim()){
        return "Введите имя";
    }
    if(userName.length < 2) {
        return "Имя должно быть не менее 2 знаков";
    }
    if(userName.length > 255) {
        return "Имя должно превышать 255 знаков";
    }
    return "";
}