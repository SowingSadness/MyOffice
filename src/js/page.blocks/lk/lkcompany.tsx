import React from "react";
import Support from "./supp";
import PaymentController from "./payment.controller";
import AddServicesController from "./addservices.controller";
import EmploiesController from "./emploies.controller";
import MyTariff, { IData as ITariffProps } from "./tariff";
import TransactionsController from "./transactions.controller";

interface IProps {
    data: {
        "companyName": string
        "INN": string
        "KPP": string
        "legalAdress": string
        "postAdress": string
        "bankName": string
        "bik": string
        "account": string
        "korrAccount": string
    },
    onSave: (e: React.SyntheticEvent) => void
}

export default function LKCompany(props: IProps): React.ReactElement {
    return <main className="main main_lk">
        <section className="profile-settings profile-settings_company">
            <div className="profile-settings__title-wrapper">
                <h2 className="profile-settings__title">Настройка компании</h2>
            </div>
            <form className="profile-settings__form profile-settings__form_company">
                <label className="profile-settings__label">
                    <p className="profile-settings__text profile-settings__text_company profile-settings__text_textarea">Наименование</p>
                    <textarea className="profile-settings__input profile-settings__input_textarea">
                        { props.data.companyName }
                    </textarea>
                </label>
                <label className="profile-settings__label">
                    <p className="profile-settings__text profile-settings__text_company">ИНН</p>
                    <input className="profile-settings__input" value={ props.data.INN } />
                </label>
                <label className="profile-settings__label">
                    <p className="profile-settings__text profile-settings__text_company">КПП</p>
                    <input className="profile-settings__input" value={ props.data.KPP } />
                </label>
                <label className="profile-settings__label">
                    <p className="profile-settings__text profile-settings__text_company">Юридический адрес</p>
                    <input className="profile-settings__input" value={ props.data.legalAdress } />
                </label>
                <label className="profile-settings__label">
                    <p className="profile-settings__text profile-settings__text_company">Почтовый адрес</p>
                    <input className="profile-settings__input" value={ props.data.postAdress } />
                </label>
                <label className="profile-settings__label">
                    <p className="profile-settings__text profile-settings__text_company">Наименование банка</p>
                    <input className="profile-settings__input" value={ props.data.bankName } />
                </label>
                <label className="profile-settings__label">
                    <p className="profile-settings__text profile-settings__text_company">БИК</p>
                    <input className="profile-settings__input" value={ props.data.bik } />
                </label>
                <label className="profile-settings__label">
                    <p className="profile-settings__text profile-settings__text_company">Расчётный счёт</p>
                    <input className="profile-settings__input" value={ props.data.account } />
                </label>
                <label className="profile-settings__label">
                    <p className="profile-settings__text profile-settings__text_company">Корреспондентский счёт</p>
                    <input className="profile-settings__input" value={ props.data.korrAccount } />
                </label>
                <button className="profile-settings__button" onClick={ props.onSave }>Сохранить</button>
            </form>
        </section>
    </main>;
}
