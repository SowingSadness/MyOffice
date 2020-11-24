import React, { useState } from "react";
import ModalWindow, { openSignal, ISignal, IModalProps, closeSignal } from "../../html.blocks/modal";


function TechSupport(props: IProps & IModalProps) {
    return <div className="popup popup_tech-support">
        <span className="popup__close popup__close_tech-support" onClick={ props.onClose }></span>
        <h2 className="popup__title popup__title_tech-support">Данные для техподдержки 1С</h2>
        <p className="popup__tech-support popup__tech-support_title">
            Логин в 1с:
        </p>
        <p className="popup__tech-support">{ props.SupportLogin }</p>
        <p className="popup__tech-support popup__tech-support_title">
            Пароль:
        </p>
        <p className="popup__tech-support">{ props.SupportPass }</p>
        <p className="popup__tech-support">
            Эти данные вам понадобятся для подтверждения легальности программ 1С
        </p>
    </div>;
}

interface IProps {
    "SupportLogin"?: string
    "SupportPass"?: string
}

export default function Support(props: Readonly<IProps>): React.ReactElement {
    const [showSupp, setSuppShow] = useState<ISignal<IProps>>(closeSignal());

    const hadlerSupportInfo = (e: React.MouseEvent) => {
        e.preventDefault();
        setSuppShow(openSignal());
    };

    const SuppLink = props.SupportLogin ? <a className="lk__link" href="#" onClick={ hadlerSupportInfo }>Данные для техподдержки 1С:</a> : '';

    return <div className="profile-settings profile-settings_lk profile-settings_small">
        <div className="profile-settings__title-wrapper">
            <h2 className="profile-settings__title">Начало работы</h2>
        </div>
        <div className="lk__wrapper">
            <div className="lk__row lk__row_start">
                <p className="lk__little-text lk__little-text_start">
                    Для начала работы скачайте программу и запустите её:
                </p>
                <button className="lk__button lk__button__get-program">Скачать программу</button>
            </div>
            { SuppLink }
        </div>
        <ModalWindow<IProps> content={ TechSupport } signal={ showSupp } />
    </div>;
}
