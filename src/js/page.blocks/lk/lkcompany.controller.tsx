import React from "react";
import LkCompany from "./lkcompany";


interface IProps {
}

export default function LKCompany(props: IProps): React.ReactElement {
    const onSave = (e: React.SyntheticEvent) => { };
    const data = {
        "companyName": "OOO Test",
        "INN": "123321",
        "KPP": "123321",
        "legalAdress": "fsfsdfsdfs",
        "postAdress": "sdfsdfsdf",
        "bankName": "АО Сбер",
        "bik": "14251147785",
        "account": "547454545546456",
        "korrAccount": "4564564645645656"
    };

    return <LkCompany data={ data } onSave={ onSave } />;
}
