import React, { useState } from "react";
import UserLogin from '../model/UserLogin';

export interface ILoginProps {
    model?: UserLogin
    validate?: string
    onClose?: (e: React.MouseEvent, model?: UserLogin) => void
    onForgot?: () => void
}

export default function ModalLogin(props: Readonly<ILoginProps>): React.ReactElement {
    const [login, setLogin] = useState(props?.model?.name);
    const [password, setPass] = useState(props?.model?.name);

    const loginHandler = (e: React.MouseEvent) => {
        e.preventDefault();
        props.onClose(e, new UserLogin(login, password));
    };

    const validate = props.validate ? <div className="popup__validate">{ props.validate }</div> : '';

    return <div className="modal modal_lk modal_show">
        <div className="popup popup_lk">
            <span className="popup__close popup__close_lk" onClick={ props.onClose }></span>
            <h2 className="popup__title popup__title_lk">Войти в личный кабинет</h2>
            { validate }
            <form className="popup__form popup__form_lk">
                <label className="popup__label popup__label_lk">
                    Логин
                    <input className="popup__input popup__input_lk"
                        onChange={ (e) => { setLogin(e.target.value); } } />
                </label>
                <label className="popup__label popup__label_lk">
                    Пароль
                    <input type="password" className="popup__input popup__input_lk"
                        onChange={ (e) => { setPass(e.target.value); } } />
                    <a href="#" className="popup__link">Забыли?</a>
                </label>
                <label>
                    <input className="popup__captcha" placeholder="Тут встраивается ReCaptcha" />
                </label>
                <button className="popup__button popup__button_lk" onClick={ loginHandler }>Войти</button>
            </form>
        </div>
    </div>;
}
