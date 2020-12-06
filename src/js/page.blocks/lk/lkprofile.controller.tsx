import React from "react";
import Request from '../../transport/request';
import * as auth from "../../auth.blocks/auth";
import LKProfile, { IProfileData } from "./lkprofile";

interface IState {
    login: string
    model?: IProfileData
}

export default class Profile extends React.Component<{}, IState> {
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
            "method": "private_profile",
            "params": {
                "login": login,
            }
        };
        Request<IProfileData>(param).then((model: IProfileData) => {
            this.setState({ model });
        }).catch((error) => {
            //this.setState({ validate: error?.message });
            console.error(error);
        });
    }

    onSave(model: IProfileData) {
        const param = {
            "method": "private_changeProfile",
            "params": {
                "login": this.state.login,
                ...model
            }
        };
        Request<IProfileData>(param).catch((error) => {
            //this.setState({ validate: error?.message });
            console.error(error);
        });
    }

    render() {
        if (!this.state.model) {
            return '';
        }
        return <LKProfile data={ this.state.model } onSave={ this.onSave } />;
    };
}
