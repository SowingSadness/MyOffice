import React from "react";
import LKProfile from "./lkprofile";

interface IProps {
}

export default function Profile(props: IProps): React.ReactElement {
    const onSave = (e: React.SyntheticEvent) => { };
    const data = {
        "login": "Buh1",
        "name": "Иванов Вася",
        "email": "Buh1@v.ru",
        "phone": "+79600368214"
    };

    return <LKProfile data={ data } onSave={ onSave } />;
}
