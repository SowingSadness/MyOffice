import React from "react";
import Request, { IRpcErrorObject } from '../transport/request';
import * as auth from "../auth.blocks/auth";
import LK from "./lk/lk";
import { ILoginProps, ISupportResp } from './lk/lk';
import { IData as ITariffProps } from './lk/tariff';

const emptyData: ITariffProps & ISupportResp = {
    "name": "",
    "email": "",
    "phone": "",
    "1CSupportLogin": undefined,
    "1CSupportPass": undefined,
    "tariffName": "",
    "balance": "",
    "dailyPaid": "",
    "users": 0,
    "DiskSpace": "",
    "paidUntil": "",
    "addServices": []
}

type IState = ILoginProps & ITariffProps & ISupportResp;

export default class LKController extends React.Component<{}, IState> {
    constructor(props: {}) {
        super(props);
        let login = auth.get().login;
        this.state = { login, ...emptyData };
        this.collect(login);
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
