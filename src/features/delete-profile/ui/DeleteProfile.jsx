import TrashIcon from '@/shared/assets/icons/trash.svg';
import {ButtonDanger} from "@/shared/ui/button-danger";

const DeleteProfile = ({onClick}) => {

    return (
      <ButtonDanger
        onClick={onClick}
        icon={TrashIcon}
        text="Удалить аккунт"
      />

    )
}

export default DeleteProfile;