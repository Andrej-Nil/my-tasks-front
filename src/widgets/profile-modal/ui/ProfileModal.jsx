import {Modal} from "@/shared/ui/modal";
import {useProfileModal} from "@/shared/model/profile-modal";
import {Logout} from "@/features/logout";

const ProfileModal = () => {

    const isOpen = useProfileModal((state) => state.isOpen);
    const close = useProfileModal((state) => state.close);

    if(!isOpen) return null;

    return (
        <Modal onClose={close} containerSize="small">
            <div className="profile block">
                <div className="profile__header">
                    <h2 className="profile__title">Профил</h2>
                </div>

                <div className="profile__button">
                    <Logout />
                </div>
            </div>

        </Modal>
    )
}

export default ProfileModal;