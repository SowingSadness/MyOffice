import React, { useState } from "react";
import ModalWindow, { createSignal, IModalProps } from "../../html.blocks/modal";

function TechSupport(props: IModalProps) {
    return <div className="popup popup_tech-support">
        <span className="popup__close popup__close_tech-support" onClick={ props.onClose }></span>
        <h2 className="popup__title popup__title_tech-support">Данные для техподдержки 1С</h2>
        <p className="popup__tech-support popup__tech-support_title">
            Логин в 1с:
            </p>
        <p className="popup__tech-support">
            gurbalguli.berdimukhamedov.m6326@moiofis
            </p>
        <p className="popup__tech-support popup__tech-support_title">
            Пароль:
            </p>
        <p className="popup__tech-support">
            XMX2B60S
            </p>
        <p className="popup__tech-support">
            Эти данные вам понадобятся для подтверждения легальности программ 1С
            </p>
    </div>;
}

interface IProps {
    "1CSupportLogin"?: string
    "1CSupportPass"?: string
}

export default function Begin(props: Readonly<IProps>): React.ReactElement {
    const [showSupp, setSuppShow] = useState(0);

    const hadlerSupportInfo = () => {
        setSuppShow(createSignal());
    };

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
            <a className="lk__link" href="#" onClick={ hadlerSupportInfo }>Данные для техподдержки 1С:</a>
        </div>
        <ModalWindow content={ TechSupport } openSignal={ showSupp } />
    </div>;
}
