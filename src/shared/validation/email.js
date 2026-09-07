export const validationEmail = (email) => {
    if(!email.trim()){
        return "Введите электронную почту";
    }

    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        return "Введите коректный email";
    }

    return "";
}