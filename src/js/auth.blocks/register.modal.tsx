import React, { useState } from "react";
import RegUser from '../model/UserReg';

export interface IProps {
    validate?: string
    model?: RegUser
    onClose?: (e: React.MouseEvent, model?: RegUser) => void
}

export default function ModalRegister(props: Readonly<IProps>): React.ReactElement {
    const [name, setName] = useState(props.model?.name);
    const [email, setEmail] = useState(props.model?.email);
    const [login, setLogin] = useState(props.model?.login);
    const [phone, setPhone] = useState(props.model?.phone);

    const validate = props.validate ? <div className="popup__validate">{ props.validate }</div> : '';

    const registerHandler = (e: React.MouseEvent) => {
        e.preventDefault();
        props.onClose(e, new RegUser(login, name, phone, email))
    };

    return <div className="popup popup_reg">
        <span className="popup__close popup__close_reg" onClick={ props.onClose }></span>
        <h2 className="popup__title popup__title_reg">Регистрация</h2>
        { validate }
        <form className="popup__form popup__form_reg">
            <label className="popup__label popup__label_reg">
                Как вас зовут?*
                <input className="popup__input popup__input_reg" defaultValue={ props.model?.name } value={ name }
                    onChange={ (e) => setName(e.target.value) } />
            </label>
            <label className="popup__label popup__label_reg">
                Ваш e-mail*
                <input className="popup__input popup__input_reg" defaultValue={ props.model?.email } value={ email }
                    onChange={ (e) => setEmail(e.target.value) } />
            </label>
            <label className="popup__label popup__label_reg">
                Придумайте логин*
                <input className="popup__input popup__input_reg" defaultValue={ props.model?.login } value={ login }
                    onChange={ (e) => setLogin(e.target.value) } />
            </label>
            <label className="popup__label popup__label_reg">
                Укажите телефон*
                <input className="popup__input popup__input_reg" defaultValue={ props.model?.phone } value={ phone }
                    onChange={ (e) => setPhone(e.target.value) } />
            </label>
            <label>
                <input className="popup__captcha popup__captcha_reg"
                    placeholder="Тут встраивается ReCaptcha" />
            </label>
            <p className="popup__under-text popup__under-text_reg">
                Нажимая кнопку “Отправить” вы даёте согласие на обработку персональных данных в соответствии с
            <a href="policy.html" className="popup__under-text popup__under-text_reg">
                Политикой конфиденциальности
            </a>
            </p>
            <button className="popup__button popup__button_reg"
                onClick={ registerHandler }>Зарегистрироваться</button>
        </form>
    </div>;
}
