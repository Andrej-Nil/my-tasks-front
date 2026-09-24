export const validationTaskTitle = (title) => {

    if(!title || !title.trim()){
        return "Введите название";
    }

    if(title.length > 255) {
        return "Название должно превышать 255 знаков";
    }

    return "";
}