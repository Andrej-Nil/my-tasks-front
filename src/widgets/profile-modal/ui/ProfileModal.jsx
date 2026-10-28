import {useProfileModal} from "@/shared/model/profile-modal";
import {Modal} from "@/shared/ui/modal";
import {Logout} from "@/features/logout";
import {Link} from "react-router-dom";
import UserInfo from './UserInfo';
import './profile.scss';

const ProfileModal = ({user}) => {

    const isOpen = useProfileModal((state) => state.isOpen);
    const close = useProfileModal((state) => state.close);

    if(!isOpen) return null;


    return (
        <Modal onClose={close} containerSize="small">
            <div className="profile-modal block">
                <div className="profile-modal__header">
                    <h2 className="profile__title">Профил</h2>
                </div>

                <div className="profile-modal__body">
                    <UserInfo user={user}/>
                    <Link to="profile" className="profile-modal-link" onClick={close}>
                        Редарктировать
                    </Link>
                </div>

                <div className="profile-modal__button">
                    <Logout />
                </div>
            </div>

        </Modal>
    )
}

export default ProfileModal;