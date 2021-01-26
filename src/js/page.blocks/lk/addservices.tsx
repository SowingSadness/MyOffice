import React, { useState } from "react";

export interface IService {
    id: string
    name: string
    price: number
    comment: string
}

interface IProps {
    data: Readonly<IService[]>
    isPayProcess: boolean
    onPay: (ids: string[]) => void
    onLoadBill: (servicesIds: string[]) => void
}

export default function PaymentAddServices(props: IProps): React.ReactElement {
    const [checked, setChecked] = useState<string[]>([])
    const cbHandler = (event: React.ChangeEvent, index: string) => {
        const checkSet = new Set<string>(checked);
        //@ts-ignore
        if (event.target.checked) {
            checkSet.add(index);
        } else {
            checkSet.delete(index);
        }

        setChecked(Array.from(checkSet));
    };

    let total = 0;
    let items: Array<React.ReactElement>;
    try {
        items = props.data.map((item) => {
            total += checked.includes(item.id) ? item.price : 0;
            return <div className="lk__row lk__row_blue lk__row_padding" key={ item.id }>
                <p className="lk__little-text lk__little-text_icon" title={ item.comment }>{ item.name }</p>
                <div className="lk__box">
                    <label className="lk__label">{ item.price } руб./год</label>
                    <input className="lk__checkbox" type="checkbox"
                        value={ item.price } onChange={ (e) => cbHandler(e, item.id) }
                        checked={ checked.includes(item.id) } />
                </div>
            </div>;
        });
    } catch (e) {
        items = [];
    }

    const ButtonPay = props.isPayProcess ?
        <button className="lk__button lk__button_pay" disabled={ true }>Оплатить онлайн</button> :
        <button className="lk__button lk__button_pay" onClick={ () => props.onPay(checked) } >Оплатить онлайн</button>

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
                { ButtonPay }
                <button className="lk__button lk__button_download" onClick={ () => props.onLoadBill(checked) } >Скачать счёт</button>
            </div>
        </div>
    </div>;
}
