import {Logout} from "@/features/logout";
import {ProfileItem} from "@/shared/ui/profile-item";
import {useUser} from "@/entities/user";
import './profile.scss';
import DeleteProfile from "@/features/delete-profile/ui/DeleteProfile";
import {useNameEditModal} from "@/shared/model/name-edit-modal";
import {NameEditModal} from "@/widgets/name-edit-modal";

const Profile = () => {

    const {data: user} = useUser();

    const nameEditModalOpen = useNameEditModal((state) => state.open);



    return (
        <div className="profile block">
            <h1 className="profile__title h1">Профиль</h1>
            <div className="profile__body">
                <ProfileItem title="Имя" content={user.name} onClick={nameEditModalOpen} />

                <ProfileItem title="Почта" content={user.email} onClick={()=> console.log('Почта')} />

                <ProfileItem content="Изменить пароль" onClick={()=> console.log('name')} />
            </div>
            <div className="profile__bottom">
                <Logout />

                <DeleteProfile />
            </div>


        <NameEditModal />


        </div>
    )
}

export default Profile;