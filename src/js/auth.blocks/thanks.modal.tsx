import React from "react";

interface IProps {
    onClose?: () => void
}

export default function ModalThanks(props: Readonly<IProps>): React.ReactElement {
    return <div className="modal modal_thanks modal_show">
            <div className="popup popup_thanks">
                <span className="popup__close popup__close_thanks" onClick={ props.onClose }></span>
                <h2 className="popup__title popup__title_thanks">Спасибо за регистрацию</h2>
                <p className="popup__under-text popup__under-text_thanks">
                    Мы отправили на ваш e-mail данные для входа в систему.
                </p>
            </div>
        </div>;
}
