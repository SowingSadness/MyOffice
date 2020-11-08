import React, { useState } from "react";

interface IProps {
    todayTransactions: {
        dateTime: string
        desc: string
        type: string
        summ: string
    }[]
}

const classArrowActive = " accordion__panel_active-program";

export default function Transactions(props: IProps): React.ReactElement {
    const [show, setShow] = useState<boolean>(false);
    let arrowClass = "accordion__panel_text accordion__panel_border";
    if (show) {
        arrowClass += classArrowActive;
    }
    const listStyle = show ? { display: 'block'} : { display: 'none' };
    const cssPriceSumm = "accordion__text accordion__text_price";

    return <div className="profile-settings profile-settings_row">
        <div className="profile-settings__title-wrapper">
            <h2 className="profile-settings__title">Транзакции</h2>
        </div>
        <div className="lk__wrapper lk__wrapper_employees-deleted">
            <div className={ arrowClass } onClick={ () => setShow(!show) }>
                <p className="accordion__text accordion__text_program accordion__text_lk">
                    Просмотр транзакций за сегодня
                </p>
            </div>
            <div className="accordion__text-block_border accordion__text-block_price-active" style={ listStyle }>
                { props.todayTransactions.map((item, index) => {
                    return <div className="accordion__row accordion__row_lk" key={ index }>
                        <p className="accordion__text accordion__text_date">{ item.dateTime }</p>
                        <p className="accordion__text accordion__text_description">{ item.desc }</p>
                        <p className={ cssPriceSumm + (item.type === "-" ? " accordion__text_pay" : "") }>{ `${item.type} ${item.summ}` }</p>
                    </div>
                })}
            </div>
            <div className="transactions">
                <p className="transactions__text">Скачать детализацию счёта:</p>
                <label className="transactions__label">с</label>
                <input className="transactions__input" />
                <label className="transactions__label">по</label>
                <input className="transactions__input" />
                <button className="transactions__button">Скачать отчёт</button>
            </div>
        </div>
    </div>;
}
