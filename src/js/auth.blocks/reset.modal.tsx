import React from "react";
import { IModalProps } from "../html.blocks/modal";

export default function Reset(props: IModalProps) {
    return <div className="modal modal_reset">
        <div className="popup popup_reset">
            <span className="popup__close popup__close_reset" onClick={ props.onClose }></span>
            <h2 className="popup__title popup__title_reset">Пароль сброшен</h2>
            <p className="popup__under-text popup__under-text_reset">
                На ваш e-mail мы отправили данные для восстановления пароля
            </p>
        </div>
    </div>;
}
