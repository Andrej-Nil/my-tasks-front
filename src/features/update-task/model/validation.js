import {validationTaskTitle} from "@/shared/validation";


export const validationUpdateTaskForm = (title) => {

    const errors= {};

    const titleError = validationTaskTitle(title);

    if(titleError){
        errors.title = titleError;
    }

    return errors;

}
