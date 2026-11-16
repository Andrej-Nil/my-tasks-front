import './user-info.scss';

const UserInfo = ({user}) => {

    const {name, email} = user;
    return (
        <div className="user-info">
            <div className="user-info-item">
                <span className="user-info-item__label">Имя:</span>
                <span className="user-info-item__value">{name}</span>
            </div>
            <div className="user-info-item">
                <span className="user-info-item__label">Почта:</span>
                <span className="user-info-item__value">{email}</span>
            </div>
        </div>
    )
}

export default UserInfo;