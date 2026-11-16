import {validationTaskTitle} from "@/shared/validation";

export const validationCreateTask = (title) => {
    const errors = {};

    const errorTitle = validationTaskTitle(title);

    if(errorTitle){
        errors.title = errorTitle;
    }

    return errors;
}