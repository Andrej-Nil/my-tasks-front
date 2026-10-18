import  './not-found.scss'
import {ButtonLink} from "@/shared/ui/button";

const NotFoundPage = () => {
    return (

        <div className="container small">
            <div className="block not-found">
                <h1 className="not-found__title">404</h1>
                <p className="not-found__text">Страница не найдена</p>

                <ButtonLink to={"/"} className="btn--success">На главную</ButtonLink>
            </div>
        </div>
    )
}


export default NotFoundPage;