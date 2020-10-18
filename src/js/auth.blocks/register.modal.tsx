import React, { useState } from "react";
import RegUser from '../model/UserReg';

interface IProps {
    validate?: string
    showed?: boolean
    onRegister?: (e: React.MouseEvent, model?: RegUser) => void
    onClose?: () => void
}

export default function ModalRegister(props: Readonly<IProps>): React.ReactElement {
    const [model, setUser] = useState(new RegUser());

    let styles = ["modal modal_reg"];
    if (props.showed) {
        styles.push("modal_show")
    }

    return <div className={ styles.join(" ") }>
        <div className="popup popup_reg">
            <span className="popup__close popup__close_reg" onClick={ props.onClose }></span>
            <h2 className="popup__title popup__title_reg">Регистрация</h2>
            <form className="popup__form popup__form_reg">
                <label className="popup__label popup__label_reg">
                    Как вас зовут?*
                    <input className="popup__input popup__input_reg" value={model.name} onChange={(e) => { model.setName(e.target.value); setUser(model); }} />
                </label>
                <label className="popup__label popup__label_reg">
                    Ваш e-mail*
                    <input className="popup__input popup__input_reg" value={model.email} onChange={(e) => model.setEmail(e.target.value)} />
                </label>
                <label className="popup__label popup__label_reg">
                    Придумайте логин*
                    <input className="popup__input popup__input_reg" value={model.login} onChange={(e) => model.setLogin(e.target.value)} />
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
                    onClick={(e) => props.onRegister(e, model)}>Зарегистрироваться</button>
            </form>
        </div>
    </div>;
}
