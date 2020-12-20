import React, { Fragment } from "react";
import * as auth from "./auth";
import User from "../model/User";
import UserLogin from "../model/UserLogin";
import ModalLogin, { ILoginProps } from "./login.modal";
import ModalWindow, { openSignal, closeSignal, ISignal } from "../html.blocks/modal";
import ModalRecovery from "./recovery.modal";

interface IProps {
    signal: ISignal
    validate?: boolean
    onLogined: (user: User) => unknown
}
interface IState {
    signalLogin: ISignal<ILoginProps>
    signalRecover: ISignal
}

export default class Login extends React.PureComponent<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.login = this.login.bind(this);
        this.close = this.close.bind(this);
        this.state = {
            signalLogin: this.props.signal,
            signalRecover: closeSignal()
        };
    }

    login(e: React.MouseEvent, model: UserLogin) {
        e.preventDefault();

        let param = {
            "method": "auth",
            "params": {
                "login": model.name,
                "pass": model.password
            }
        }

        fetch('/rpc', {
            method: 'POST',
            body: JSON.stringify(param)
        }).then((response) => response.json()).then((data: any) => {
            if (!data.result) {
                this.setState({
                    signalLogin: openSignal({
                        validate: data?.error?.message
                    })
                });
                return;
            }
            const userInfo = data.result;
            const user = new User(userInfo.login, userInfo.balance, userInfo.paidFor);
            auth.set(user);
            this.close();
            this.props.onLogined(user);
        });
    }

    forgot() {
        this.setState({
            signalRecover: openSignal({
                onClose: this.close
            })
        });
    }

    close(e?: React.SyntheticEvent) {
        this.setState({
            signalLogin: closeSignal(),
            signalRecover: closeSignal()
        });
    }

    render() {
        return <Fragment>
            <ModalWindow<ILoginProps> content={ ModalLogin } signal={ this.state.signalLogin } />
            <ModalWindow content={ ModalRecovery } signal={ this.state.signalRecover } />
        </Fragment>;
    }
}
