import React, { useState } from "react";
import RegUser from '../model/RegUser';

interface IProps {
    validate?: string
    showed?: boolean
    onLogin?: (e: React.MouseEvent, model?: RegUser) => void
    onClose?: () => void
}

export default function ModalLogin(props: Readonly<IProps>): React.ReactElement {

    return <div className="modal modal_lk modal_show">
        <div className="popup popup_lk">
            <span className="popup__close popup__close_lk" onClick={props.onClose}></span>
            <h2 className="popup__title popup__title_lk">Войти в личный кабинет</h2>
            <form className="popup__form popup__form_lk">
                <label className="popup__label popup__label_lk">
                    Логин
                    <input className="popup__input popup__input_lk" />
                </label>
                <label className="popup__label popup__label_lk">
                    Пароль
                    <input type="password" className="popup__input popup__input_lk" />
                    <a href="#" className="popup__link">Забыли?</a>
                </label>
                <label>
                    <input className="popup__captcha" placeholder="Тут встраивается ReCaptcha" />
                </label>
                <button className="popup__button popup__button_lk" onClick={ (e) => props.onLogin(e) }>Войти</button>
            </form>
        </div>
    </div>;
}
