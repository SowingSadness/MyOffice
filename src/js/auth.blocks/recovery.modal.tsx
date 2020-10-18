import React, { useState } from "react";

export type TModalMode = 'hide' | 'recovery' | 'reset';
interface IProps {
    mode: TModalMode;
    onRecover?: (e: React.MouseEvent) => void
    onClose?: () => void
}

export default function ModalRecovery(props: Readonly<IProps>): React.ReactElement {
    switch (props.mode) {
        case 'recovery':
            return <Recovery onRecover={props.onRecover} />;
        case 'reset':
            return <Reset onClick={props.onClose} />;
        default:
            return <div></div>;
    };
}

function Recovery(props: { onRecover: (e: React.MouseEvent) => void }) {
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

function Reset(props: { onClick: () => void }) {
    return <div className="modal modal_reset">
        <div className="popup popup_reset">
            <span className="popup__close popup__close_reset" onClick={props.onClick}></span>
            <h2 className="popup__title popup__title_reset">Пароль сброшен</h2>
            <p className="popup__under-text popup__under-text_reset">
                На ваш e-mail мы отправили данные для восстановления пароля
            </p>
        </div>
    </div>;
}
