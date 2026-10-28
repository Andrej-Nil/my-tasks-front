import {useProfileModal} from "@/shared/model/profile-modal";
import {Modal} from "@/shared/ui/modal";
import {Logout} from "@/features/logout";
import {Link} from "react-router-dom";
import './profile.scss';
const ProfileModal = ({user}) => {

    const isOpen = useProfileModal((state) => state.isOpen);
    const close = useProfileModal((state) => state.close);

    if(!isOpen) return null;

    const {name, email} = user;
    return (
        <Modal onClose={close} containerSize="small">
            <div className="profile block">
                <div className="profile__header">
                    <h2 className="h2">Профил</h2>
                </div>

                <div className="profile__body">
                    <div className="profile-info">
                        <div className="profile-info-item">
                            <span className="profile-info-item__label">Имя:</span>
                            <span className="profile-info-item__value">{name}</span>
                        </div>
                        <div className="profile-info-item">
                            <span className="profile-info-item__label">Почта:</span>
                            <span className="profile-info-item__value">{email}</span>
                        </div>
                    </div>


                    <Link to="profile/edit" className="profile-link" onClick={close}>


                        Редарктировать
                    </Link>
                </div>

                <div className="profile__button">
                    <Logout />
                </div>
            </div>

        </Modal>
    )
}

export default ProfileModal;