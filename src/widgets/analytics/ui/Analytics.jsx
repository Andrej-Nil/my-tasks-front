import './analytics.scss'

const Analytics = () => {
    return (
        <div className="analytics block">

            <div className="analytics-block">
                <div className="analytics-block__title">
                    Задачи
                </div>

                <div className="analytics-block__list">
                    <div className="analytics-card">
                        <p className="analytics-card__title">Всего:</p>
                        <p className="analytics-card__total">53</p>

                    </div>

                    <div className="analytics-card">
                        <p className="analytics-card__title">Выполнено:</p>
                        <p className="analytics-card__total">53</p>
                    </div>


                </div>
            </div>


            <div className="analytics-block">
                <div className="analytics-block__title">
                    Группы Задач
                </div>

                <div className="analytics-block__list">
                    <div className="analytics-card">
                        <p className="analytics-card__title">Всего:</p>
                        <p className="analytics-card__total">53</p>

                    </div>

                    <div className="analytics-card">
                        <p className="analytics-card__title">Выполнено:</p>
                        <p className="analytics-card__total">53</p>
                    </div>

                    <div className="analytics-card">
                        <p className="analytics-card__title">Астивны:</p>
                        <p className="analytics-card__total">53</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Analytics;