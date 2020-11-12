import React from "react";
import Request, { IRpcErrorObject } from '../transport/request';
import * as auth from "../auth.blocks/auth";
import LK from "./lk/lk";
import { ILoginProps, ISupportResp } from './lk/lk';
import { IData as ITariffProps } from './lk/tariff';

const emptyData = {
    "name": "Иванов Вася",
    "email": "Buh1@v.ru",
    "phone": "+79600368214",
    "1CSupportLogin": "fedya",
    "1CSupportPass": "232332f",
    "tariffName": "Cтарт",
    "balance": "950.30 руб.",
    "dailyPaid": "25.00 руб.",
    "users": 2,
    "DiskSpace": "25 ГБ",
    "paidUntil": "21.10.2020",
    "addServices": [
        {
            "service": "1С Спарк",
            "paidUntil": "31.12.2020"
        },
        {
            "service": "1С Контрагент",
            "paidUntil": "31.12.2020"
        }
    ]
}

type IState = ILoginProps & ITariffProps & ISupportResp;

export default class LKController extends React.Component<{}, IState> {
    constructor(props: {}) {
        super(props);
        let login = auth.get().login;
        this.state = { login, ...emptyData };
        this.collect(login)
    }

    collect(login: string) {
        let param = {
            "method": "private_widget_tariff",
            "params": {
                "login": login,
            }
        };
        Request<IState>(param).then((data: IState) => {
            this.setState(data);
        }).catch((error: IRpcErrorObject) => {
            //this.setState({ validate: error?.error?.message })
            console.error(error);
        });
    }

    render() {
        return <LK data={ this.state } />;
    };
}
