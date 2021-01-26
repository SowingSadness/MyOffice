import React, { useState } from "react";

export interface IPayTariff {
    id: string
    period: string
    summ: number
    discount: number
    summForPay: number
}

interface IProps {
    data: Readonly<IPayTariff[]>
    isPayProcess: boolean
    onPay: (id: string) => void
    onLoadBill: (id: string) => void
}

function PaymentTariff(props: IPayTariff): React.ReactElement {
    return <React.Fragment>
        <div className="lk__row">
            <p className="lk__little-text">К оплате:</p>
            <p className="lk__little-text">{ props.summ } руб.</p>
        </div>
        <div className="lk__row">
            <p className="lk__little-text">Скидка:</p>
            <p className="lk__little-text">{ props.discount } руб.</p>
        </div>
        <div className="lk__row">
            <p className="lk__little-text lk__little-text_bold">Итого к оплате:</p>
            <p className="lk__little-text">{ props.summForPay } руб.</p>
        </div>
    </React.Fragment>;
}

export default function Payment(props: IProps): React.ReactElement  {
    let optionsList: Array<React.ReactElement>
    try {
        optionsList = props.data.map((item: IPayTariff) => {
            return <option key={ item.id } className="lk__option" value={ item.period }>{ item.period }</option>
        });
    } catch (e) {
        optionsList = [];
    }

    let [tariff, setTariff] = useState(props.data[0]);

    if (!tariff) {
        tariff = props.data[0];
    }

    function periodHandler(event: React.ChangeEvent) {
        //@ts-ignore
        setTariff(props.data[event.target.selectedIndex]);
    }

    const ButtonPay = props.isPayProcess ?
        <button className="lk__button lk__button_pay" disabled={ true }>Оплатить онлайн</button> :
        <button className="lk__button lk__button_pay" onClick={ () => props.onPay(tariff.id) }>Оплатить онлайн</button>;

    return <div className="profile-settings profile-settings_lk">
        <div className="profile-settings__title-wrapper">
            <h2 className="profile-settings__title">Оплата</h2>
        </div>
        <div className="lk__wrapper">
            <div className="lk__row">
                <p className="lk__little-text">Период оплаты:</p>
                <select className="lk__select" defaultValue={ 0 } onChange={ periodHandler }>
                { optionsList }
                </select>
            </div>
            <PaymentTariff { ...tariff } />
            <div className="lk__row">
                { ButtonPay }
                <button className="lk__button lk__button_download" onClick={ () => props.onLoadBill(tariff.id) }>Скачать счёт</button>
            </div>
            <p className="lk__little-text lk__little-text_under">
                Для оформления возврата необходимо написать на e-mail: support@moiofis.ru
            </p>
        </div>
    </div>;
}
