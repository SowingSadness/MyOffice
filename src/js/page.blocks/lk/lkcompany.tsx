import React, { useState } from "react";

export interface ICompanyData {
    companyName: string
    INN: string
    KPP: string
    legalAdress: string
    postAdress: string
    bankName: string
    bik: string
    account: string
    korrAccount: string
}

interface IProps {
    data: ICompanyData,
    onSave: (model: ICompanyData) => void
}

export default function LKCompany(props: IProps): React.ReactElement {
    const [companyName, setCN] = useState(props.data.companyName);
    const [INN, setInn] = useState(props.data.INN);
    const [KPP, setKpp] = useState(props.data.KPP);
    const [legalAdress, setLAddr] = useState(props.data.legalAdress);
    const [postAdress, setPosAddr] = useState(props.data.postAdress);
    const [bankName, setBank] = useState(props.data.bankName);
    const [bik, setBik] = useState(props.data.bik);
    const [account, setAccount] = useState(props.data.account);
    const [korrAccount, setKorrAcc] = useState(props.data.korrAccount);

    const onSave = (e: React.SyntheticEvent) => {
        e.preventDefault();
        props.onSave({
            companyName,
            INN,
            KPP,
            legalAdress,
            postAdress,
            bankName,
            bik,
            account,
            korrAccount
        });
    };

    return <main className="main main_lk">
        <section className="profile-settings profile-settings_company">
            <div className="profile-settings__title-wrapper">
                <h2 className="profile-settings__title">Настройка компании</h2>
            </div>
            <form className="profile-settings__form profile-settings__form_company" onSubmit={ () => false }>
                <label className="profile-settings__label">
                    <p className="profile-settings__text profile-settings__text_company profile-settings__text_textarea">Наименование</p>
                    <textarea defaultValue={ companyName }
                        onChange={ (e) => { setCN(e.target.value); } }
                        className="profile-settings__input profile-settings__input_textarea">
                    </textarea>
                </label>
                <label className="profile-settings__label">
                    <p className="profile-settings__text profile-settings__text_company">ИНН</p>
                    <input className="profile-settings__input"
                        onChange={ (e) => { setInn(e.target.value); } }
                        value={ INN } />
                </label>
                <label className="profile-settings__label">
                    <p className="profile-settings__text profile-settings__text_company">КПП</p>
                    <input className="profile-settings__input"
                        onChange={ (e) => { setKpp(e.target.value); } }
                        value={ KPP } />
                </label>
                <label className="profile-settings__label">
                    <p className="profile-settings__text profile-settings__text_company">Юридический адрес</p>
                    <input className="profile-settings__input"
                        onChange={ (e) => { setLAddr(e.target.value); } }
                        value={ legalAdress } />
                </label>
                <label className="profile-settings__label">
                    <p className="profile-settings__text profile-settings__text_company">Почтовый адрес</p>
                    <input className="profile-settings__input"
                        onChange={ (e) => { setPosAddr(e.target.value); } }
                        value={ postAdress } />
                </label>
                <label className="profile-settings__label">
                    <p className="profile-settings__text profile-settings__text_company">Наименование банка</p>
                    <input className="profile-settings__input"
                        onChange={ (e) => { setBank(e.target.value); } }
                        value={ bankName } />
                </label>
                <label className="profile-settings__label">
                    <p className="profile-settings__text profile-settings__text_company">БИК</p>
                    <input className="profile-settings__input"
                        onChange={ (e) => { setBik(e.target.value); } }
                        value={ bik } />
                </label>
                <label className="profile-settings__label">
                    <p className="profile-settings__text profile-settings__text_company">Расчётный счёт</p>
                    <input className="profile-settings__input"
                        onChange={ (e) => { setAccount(e.target.value); } }
                        value={ account } />
                </label>
                <label className="profile-settings__label">
                    <p className="profile-settings__text profile-settings__text_company">Корреспондентский счёт</p>
                    <input className="profile-settings__input"
                        onChange={ (e) => { setKorrAcc(e.target.value); } }
                        value={ korrAccount } />
                </label>
                <button className="profile-settings__button" onClick={ onSave }>Сохранить</button>
            </form>
        </section>
    </main>;
}
