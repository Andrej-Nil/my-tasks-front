import './welcome.scss';
import {ButtonLink} from "@/shared/ui/button";
const Welcome = () => {
    return (
            <div className="container small">
                <div className="welcome block">
                    <h1 className="welcome__title">Добро пожаловать</h1>
                    <p className="welcome__text">
                        <strong>YourTasks</strong> - это простой задачник. Всем мы сталкивались, когда мы постоянно споминаем, что забыли ту или иную мелочь. YourTasks это как раз то место где можно записать задачу или пометку, что бы была возможность проверить не забыли ли вы что то важное или мелкие дела.
                    </p>

                    <div className="welcome__message">
                        Для того что бы продолжить войдите в аккаунт или зарегестрируйтесь.
                    </div>

                    <div className="welcome__bottom">
                        <ButtonLink to={'login'} className="btn--green">Вход</ButtonLink>
                        <ButtonLink to={'registration'} className="btn--blue">Регистрация</ButtonLink>
                    </div>

                </div>
            </div>
    )
}

export default Welcome;