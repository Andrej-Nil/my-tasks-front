import {validationTaskTitle} from "@/shared/validation";

export const validationShortTask = (title) => {
    const errorTitle = validationTaskTitle(title);

    if(errorTitle){
        return errorTitle;
    }

    return "";
}