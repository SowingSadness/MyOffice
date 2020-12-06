import React, { useState } from "react";

export interface IProfileData {
    login: string
    name: string
    email: string
    phone: string
    pass?: string
    newPass?: string
}

interface IProps {
    data: IProfileData,
    onSave: (data: IProfileData) => void
}

export default function LKProfile(props: IProps): React.ReactElement {
    const [login, setLogin] = useState(props.data.login);
    const [email, setEmail] = useState(props.data.email);
    const [name, setName] = useState(props.data.name);
    const [phone, setPhone] = useState(props.data.phone);
    const [pass, setPass] = useState('');
    const [newPass, setNewPass] = useState('');

    const onSave = (e: React.SyntheticEvent) => {
        e.preventDefault();
        props.onSave({
            login,
            email,
            name,
            phone,
            pass,
            newPass
        });
    }

    return <main className="main main_lk">
        <section className="profile-settings">
            <div className="profile-settings__title-wrapper">
                <h2 className="profile-settings__title">Настройки профиля</h2>
            </div>
            <form className="profile-settings__form">
                <label className="profile-settings__label">
                    <p className="profile-settings__text">Логин</p>
                    <input value={ login }
                        onChange={ (e) => { setLogin(e.target.value); } }
                        disabled className="profile-settings__input profile-settings__input_disabled" />
                </label>
                <label className="profile-settings__label">
                    <p className="profile-settings__text">E-mail</p>
                    <input value={ email }
                        onChange={ (e) => { setEmail(e.target.value); } }
                        disabled className="profile-settings__input profile-settings__input_disabled" />
                </label>
                <label className="profile-settings__label">
                    <p className="profile-settings__text">Фамилия Имя*</p>
                    <input value={ name }
                        onChange={ (e) => { setName(e.target.value); } }
                        className="profile-settings__input" />
                </label>
                <label className="profile-settings__label">
                    <p className="profile-settings__text">Телефон</p>
                    <input value={ phone }
                        onChange={ (e) => { setPhone(e.target.value); } }
                        className="profile-settings__input" />
                </label>
                <h3 className="profile-settings__next-title">Вы можете сменить пароль:</h3>
                <label className="profile-settings__label">
                    <p className="profile-settings__text">Старый пароль</p>
                    <input value={ pass }
                        onChange={ (e) => { setPass(e.target.value); } }
                        className="profile-settings__input" />
                </label>
                <label className="profile-settings__label">
                    <p className="profile-settings__text">Новый пароль</p>
                    <input value={ newPass }
                        onChange={ (e) => { setNewPass(e.target.value); } }
                        className="profile-settings__input" />
                </label>
                <button className="profile-settings__button" onClick={ onSave }>Сохранить</button>
            </form>
        </section>
    </main>;
}
