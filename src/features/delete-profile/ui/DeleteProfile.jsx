import TrashIcon from '@/shared/assets/icons/trash.svg';
import {ButtonDanger} from "@/shared/ui/button-danger";

const DeleteProfile = () => {

    const handleClick = () => {
    }

    return (
      <ButtonDanger
        onClick={handleClick}
        icon={TrashIcon}
        text="Удалить аккунт"
      />

    )
}

export default DeleteProfile;