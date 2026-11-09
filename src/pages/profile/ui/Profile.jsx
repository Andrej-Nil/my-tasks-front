import {Logout} from "@/features/logout";
import {ProfileItem} from "@/shared/ui/profile-item";
import {useUser} from "@/entities/user";
import './profile.scss';
import DeleteProfile from "@/features/delete-profile/ui/DeleteProfile";
import {useUpdateNameModal} from "@/shared/model/update-name-modal";
import {UpdateNameModal} from "@/widgets/update-name-modal";
import {UpdateEmailModal} from "@/widgets/update-email-modal";
import {useUpdateEmailModal} from "@/shared/model/update-email-modal";
import {useUpdatePasswordModal} from "@/shared/model/update-password-modal";
import {UpdatePasswordModal} from "@/widgets/update-password-modal";

const Profile = () => {

    const {data: user} = useUser();

    const updateNameModalOpen = useUpdateNameModal((state) => state.open);
    const updateEmailModalOpen = useUpdateEmailModal((state) => state.open);
    const updatePasswordModelOpen = useUpdatePasswordModal((state) => state.open)


    return (
        <div className="profile block">
            <h1 className="profile__title h1">Профиль</h1>
            <div className="profile__body">
                <ProfileItem title="Имя" content={user.name} onClick={updateNameModalOpen} />

                <ProfileItem title="Почта" content={user.email} onClick={updateEmailModalOpen} />

                <ProfileItem content="Изменить пароль" onClick={updatePasswordModelOpen} />
            </div>
            <div className="profile__bottom">
                <Logout />

                <DeleteProfile />
            </div>

            <UpdateNameModal />

            <UpdateEmailModal />

            <UpdatePasswordModal />


        </div>
    )
}

export default Profile;