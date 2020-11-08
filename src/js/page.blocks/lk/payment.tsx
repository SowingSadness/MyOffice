import React, { useState } from "react";

interface IPayTariff {
    period: string
    summ: number
    discount: number
    summForPay: number
}

interface IService {
    name: string
    desc: string
    summ: number
}

interface IProps {
    payTariff: IPayTariff[]
    payServices: IService[]
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
        <div className="lk__row">
            <button className="lk__button lk__button_pay">Оплатить онлайн</button>
            <button className="lk__button lk__button_download">Скачать счёт</button>
        </div>
        <p className="lk__little-text lk__little-text_under">
            Для оформления возврата необходимо написать на e-mail: support@moiofis.ru
        </p>
    </React.Fragment>;
}

function PaymentServices(props: { services: IService[] }): React.ReactElement {
    const [checked, setChecked] = useState<number[]>([])
    const cbHandler = (event: React.ChangeEvent, index: number) => {
        const checkSet = new Set<number>(checked);
        //@ts-ignore
        if (event.target.checked) {
            checkSet.add(index);
        } else {
            checkSet.delete(index);
        }

        setChecked(Array.from(checkSet));
    };

    let total = 0;
    const items = props.services.map((item, index) => {
        total += checked.includes(index) ? item.summ : 0;
        return <div className="lk__row lk__row_blue lk__row_padding" key={index}>
            <p className="lk__little-text lk__little-text_icon" title={ item.desc }>{ item.name }</p>
            <div className="lk__box">
                <label className="lk__label">{ item.summ } руб./год</label>
                <input className="lk__checkbox" type="checkbox"
                    value={ item.summ } onChange={ (e) => cbHandler(e, index) }
                    checked={ checked.includes(index) } />
            </div>
        </div>;
    });

    return <div className="profile-settings profile-settings_lk profile-settings_add">
        <div className="profile-settings__title-wrapper">
            <h2 className="profile-settings__title">Дополнительные услуги</h2>
        </div>
        <div className="lk__wrapper">
            <p className="lk__description">Период оплаты дополнительных услуг — 1 год</p>

            { items }

            <div className="lk__row lk__row_last">
                <p className="lk__little-text lk__little-text_bold">Итого к оплате:</p>
                <input className="lk__input" disabled placeholder={ total + " руб." } />
            </div>
            <div className="lk__row lk__row_last">
                <button className="lk__button lk__button_pay">Оплатить онлайн</button>
                <button className="lk__button lk__button_download">Скачать счёт</button>
            </div>
        </div>
    </div>;
}

export default function PaymentList(props: IProps): React.ReactElement  {
    const optionsList = props.payTariff.map((item: IPayTariff) => {
        return <option key={ item.period } className="lk__option" value={ item.period }>{ item.period }</option>
    });

    const [tariff, setTariff] = useState(props.payTariff[0]);

    function periodHandler(event: React.ChangeEvent) {
        //@ts-ignore
        setTariff(props.payTariff[event.target.selectedIndex]);
    }

    return <div className="lk__left">
        <div className="profile-settings profile-settings_lk">
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
            </div>
        </div>

        <PaymentServices services={ props.payServices } />
    </div>;
}
