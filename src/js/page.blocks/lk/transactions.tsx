import React, { useState } from "react";
import Request from '../../transport/request';

export interface ITransaction {
    "dateTime": string
    "desc": string
    "summ": string
    "type": string
}

interface IProps {
    data: {
        todayTransactions: ITransaction[]
    }
    onDownload: (from: Date, to: Date) => void
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

    const refFrom = React.createRef<HTMLInputElement>();
    const refTo = React.createRef<HTMLInputElement>();

    const onDownload = (e: React.SyntheticEvent) => {
        e.preventDefault();
        props.onDownload(new Date(refFrom.current.value), new Date(refTo.current.value));
    }


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
                { props.data.todayTransactions.map((item, index) => {
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
                <input className="transactions__input" type="date" ref={ refFrom } />
                <label className="transactions__label">по</label>
                <input className="transactions__input" type="date" ref={ refTo } />
                <button className="transactions__button" onClick={ onDownload } >Скачать отчёт</button>
            </div>
        </div>
    </div>;
}
