import React from "react";
import Request from '../../transport/request';
import * as auth from "../../auth.blocks/auth";
import LkCompany, { ICompanyData } from "./lkcompany";


interface IState {
    login: string
    model?: ICompanyData
}

export default class LKCompany extends React.Component<{}, IState> {
    constructor(params: {}) {
        super(params);
        const login = auth.get().login;
        this.state = {
            login,
            model: undefined
        };
        this.collect(auth.get().login);
        this.onSave = this.onSave.bind(this);
    }

    collect(login: string) {
        let param = {
            "method": "private_company",
            "params": {
                "login": login,
            }
        };
        Request<ICompanyData>(param).then((model: ICompanyData) => {
            this.setState({ model });
        }).catch((error) => {
            //this.setState({ validate: error?.message });
            console.error(error);
        });
    }

    onSave(model: ICompanyData) {
        const param = {
            "method": "private_changeCompany",
            "params": {
                "login": this.state.login,
                ...model
            }
        };
        Request<ICompanyData>(param).catch((error) => {
            //this.setState({ validate: error?.message });
            console.error(error);
        });
    }

    render() {
        if (!this.state.model) {
            return '';
        }
        return <LkCompany data={ this.state.model } onSave={ this.onSave } />;
    };
}