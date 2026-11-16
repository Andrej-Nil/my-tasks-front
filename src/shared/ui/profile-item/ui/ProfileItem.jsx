import {Button} from "@/shared/ui/button";
import { MdModeEdit } from "react-icons/md";
import "./profile-item.scss";

const ProfileItem = ({title, content, onClick}) => {
    return (
        <div className="profile-item">
            <p className="profile-item__title">{title}</p>
            <div className="profile-item__wrapper">
                <span className="profile-item__content">{content}</span>
                <Button onClick={onClick} className="btn--base profile-item__edit">
                    <MdModeEdit />
                </Button>
            </div>
        </div>
    )
}

export default ProfileItem;