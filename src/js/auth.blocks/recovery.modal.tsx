import React from "react";
import { IModalProps } from "../html.blocks/modal";

export interface IRecoveryProps {
    onRecover: (e: React.MouseEvent) => void
}

export default function Recovery(props: { onRecover: (e: React.MouseEvent) => void } & IModalProps) {
    return <div className="modal modal_recovery" >
        <div className="popup popup_recovery">
            <span className="popup__close popup__close_recovery"></span>
            <h2 className="popup__title popup__title_recovery">Восстановление пароля</h2>
            <p className="popup__under-text popup__under-text_recovery">
                Введите ваш e-mail. На указанный адрес мы вышлем вам данные для восстановления пароля.
            </p>
            <form className="popup__form popup__form_recovery">
                <label className="popup__label popup__label_recovery">
                    <input className="popup__input popup__input_recovery" />
                </label>
                <button className="popup__button popup__button_recovery" onClick={props.onRecover}>Восстановить</button>
            </form>
        </div>
    </div>;
}
