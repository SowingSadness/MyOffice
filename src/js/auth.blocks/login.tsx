import React, { Fragment } from "react";
import * as auth from "./auth";
import User from "../model/User";
import UserLogin from "../model/UserLogin";
import ModalWindow, { openSignal, closeSignal, traverseSignal as traversePropsSignal, ISignal } from "../html.blocks/modal";
import ModalLogin, { ILoginProps } from "./login.modal";
import ModalRecovery, { IRecoveryProps } from "./recovery.modal";
import ModalReset from "./reset.modal";

interface IProps {
    signal: ISignal
    validate?: boolean
    onLogined: (user: User) => unknown
}
interface IState {
    signalLogin: ISignal | undefined
    signalRecover: ISignal<IRecoveryProps>
    signalReset: ISignal
}

export default class Login extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.login = this.login.bind(this);
        this.closeLogin = this.closeLogin.bind(this);
        this.closeRecover = this.closeRecover.bind(this);
        this.closeReset = this.closeReset.bind(this);
        this.forgot = this.forgot.bind(this);
        this.recover = this.recover.bind(this);

        this.state = {
            signalLogin: props.signal,
            signalRecover: closeSignal(),
            signalReset: closeSignal()
        };
    }

    shouldComponentUpdate(nextProps: IProps, nextState: IState) {
        if (!nextProps.signal.isUsed()) {
            this.setState({
                signalLogin: undefined
            });
        }

        return !nextProps.signal.isUsed() ||
            !(this.state.signalLogin && this.state.signalLogin.isUsed()) ||
            !this.state.signalRecover.isUsed() ||
            !this.state.signalReset.isUsed();
    }

    login(e: React.SyntheticEvent, model: UserLogin) {
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
                    signalLogin: openSignal<ILoginProps>({
                        validate: data?.error?.message,
                        model: model,
                        onClose: this.closeLogin,
                        onForgot: this.forgot
                    })
                });
                return;
            }
            const userInfo = data.result;
            const user = new User(userInfo.login, userInfo.balance, userInfo.paidFor);
            auth.set(user);
            this.closeLogin();
            this.props.onLogined(user);
        });
    }

    forgot() {
        this.setState({
            signalLogin: closeSignal(),
            signalRecover: openSignal({
                onRecover: this.recover,
                onClose: this.closeRecover
            }),
            signalReset: closeSignal()
        });
    }

    /**
     * TODO нужно сделать функцию запроса
     */
    recover() {
        this.setState({
            signalLogin: closeSignal(),
            signalRecover: closeSignal(),
            signalReset: openSignal({
                onClose: this.closeReset
            })
        });
    }

    closeLogin(e?: React.MouseEvent, user?: UserLogin) {
        if (user) {
            return this.login(e, user);
        }
        this.setState({
            signalLogin: closeSignal()
        });
    }

    closeRecover(e?: React.SyntheticEvent) {
        this.setState({
            signalRecover: closeSignal()
        });
    }

    closeReset(e?: React.SyntheticEvent) {
        this.setState({
            signalReset: closeSignal()
        });
    }

    render() {
        const loginSignal = this.state.signalLogin || traversePropsSignal<ILoginProps>(this.props.signal, {
            onClose: this.closeLogin,
            onForgot: this.forgot
        });

        return <Fragment>
            <ModalWindow<ILoginProps> content={ ModalLogin } signal={ loginSignal } />
            <ModalWindow<IRecoveryProps> content={ ModalRecovery } signal={ this.state.signalRecover } />
            <ModalWindow content={ ModalReset } signal={ this.state.signalReset } />
        </Fragment>;
    }
}
