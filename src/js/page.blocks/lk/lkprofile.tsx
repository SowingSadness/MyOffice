import React from "react";
import Support from "./supp";
import PaymentController from "./payment.controller";
import AddServicesController from "./addservices.controller";
import EmploiesController from "./emploies.controller";
import MyTariff, { IData as ITariffProps } from "./tariff";
import TransactionsController from "./transactions.controller";

interface IProps {
    data: {
        "login": string
        "name": string
        "email": string
        "phone": string
    },
    onSave: (e: React.SyntheticEvent) => void
}

export default function LKProfile(props: IProps): React.ReactElement {
    return <main className="main main_lk">
        <section className="profile-settings">
            <div className="profile-settings__title-wrapper">
                <h2 className="profile-settings__title">Настройки профиля</h2>
            </div>
            <form className="profile-settings__form">
                <label className="profile-settings__label">
                    <p className="profile-settings__text">Логин</p>
                    <input value={ props.data.login }
                        disabled className="profile-settings__input profile-settings__input_disabled" />
                </label>
                <label className="profile-settings__label">
                    <p className="profile-settings__text">E-mail</p>
                    <input value={ props.data.email }
                        disabled className="profile-settings__input profile-settings__input_disabled" />
                </label>
                <label className="profile-settings__label">
                    <p className="profile-settings__text">Фамилия Имя*</p>
                    <input className="profile-settings__input" value={ props.data.name } />
                </label>
                <label className="profile-settings__label">
                    <p className="profile-settings__text">Телефон</p>
                    <input className="profile-settings__input" value={ props.data.phone } />
                </label>
                <h3 className="profile-settings__next-title">Вы можете сменить пароль:</h3>
                <label className="profile-settings__label">
                    <p className="profile-settings__text">Старый пароль</p>
                    <input className="profile-settings__input" />
                </label>
                <label className="profile-settings__label">
                    <p className="profile-settings__text">Новый пароль</p>
                    <input className="profile-settings__input" />
                </label>
                <button className="profile-settings__button" onClick={ props.onSave } >Сохранить</button>
            </form>
        </section>
    </main>;
}
