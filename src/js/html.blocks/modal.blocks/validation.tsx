import React from "react";

export interface IValidationProps {
    message: string
}

interface IProps extends IValidationProps {
    onClose: (e: React.SyntheticEvent) => void
}

export default function Validation(props: IProps) {
    return <div className="popup popup_success">
        <span className="popup__close popup__close_new-success" onClick={ props.onClose }></span>
        <h2 className="popup__title popup__title_success">{ props.message }</h2>
    </div>;
}