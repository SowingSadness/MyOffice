import React, { useState } from "react";

interface IProps {
    data: {
        "name": string
        "email": string
        "phone": string
        "tariffName": string
        "balance": string
        "dailyPaid": string
        "users": number
        "DiskSpace": string
        "paidUntil": string
        "addServices": {
            "service": string
            "paidUntil": string
        }[]
    }
}

export default function MyTariff(props: Readonly<IProps>): React.ReactElement {
    return <div className="profile-settings profile-settings_lk profile-settings_rates">
        <div className="profile-settings__title-wrapper">
            <h2 className="profile-settings__title">Мой тариф</h2>
        </div>
        <div className="lk__wrapper lk__wrapper_rate">
            <p className="lk__little-text lk__little-text_bold-mini lk__little-text_bold">Основной тариф</p>
            <div className="lk__row lk__row_blue lk__row_padding">
                <p className="lk__little-text lk__little-text_no-margin">Текущий баланс:</p>
                <p className="lk__little-text lk__little-text_no-margin lk__little-text_bold">
                    { props.data.balance }
                </p>
            </div>
            <div className="lk__row lk__row_padding">
                <p className="lk__little-text lk__little-text_no-margin">Подключено сотрудников:</p>
                <p className="lk__little-text lk__little-text_no-margin i lk__little-text_bold">
                    { props.data.users }
                </p>
            </div>
            <div className="lk__row lk__row_blue lk__row_padding">
                <p className="lk__little-text lk__little-text_no-margin">Дисковое пространство:</p>
                <p className="lk__little-text lk__little-text_no-margin  lk__little-text_bold">
                    { props.data.DiskSpace }
                </p>
            </div>
            <div className="lk__row lk__row_padding lk__row_add">
                <p className="lk__little-text lk__little-text_no-margin">Доступ оплачен до:</p>
                <p className="lk__little-text lk__little-text_no-margin lk__little-text_bold">
                    { props.data.paidUntil }
                </p>
            </div>
            <p className="lk__little-text lk__little-text_bold-mini lk__little-text_bold">Дополнительные услуги</p>
            <div className="lk__row lk__row_padding lk__row_first">
                <p className=" lk__little-text  lk__little-text_bold lk__little-text_bold-mini lk__little-text_no-margin">Услуга:</p>
                <p className="lk__little-text lk__little-text_bold lk__little-text_bold-mini lk__little-text_no-margin">Доступно до:</p>
            </div>
            { props.data.addServices.map((item, index) => {
                return <div className="lk__row lk__row_blue lk__row_padding" key={ index }>
                    <p className="lk__little-text_no-margin lk__little-text">{ item.service }</p>
                    <p className="lk__little-text_no-margin lk__little-text">{ item.paidUntil }</p>
                </div>
            }) }
        </div>
    </div>;
}
