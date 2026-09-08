export const validationUserName = (userName) => {

    if(!userName.trim()){
        return "Введите имя";
    }
    if(userName.length < 2) {
        return "Имя должно быть не менее 2 знаков";
    }
}