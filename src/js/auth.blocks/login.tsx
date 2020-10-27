import React, { Fragment } from "react";
import * as auth from "./auth";
import User from "../model/User";
import UserLogin from "../model/UserLogin";
import ModalLogin from "./login.modal";
import Recover from "./recover";

interface IProps {
    open: number
    validate?: boolean
    onLogined: (user: User) => unknown
}
interface IState {
    showed: boolean
    showRecover: number
    validateError?: string
}

export default class Login extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = { showed: Boolean(props.open), showRecover: 0 };
        this.login = this.login.bind(this);
        this.close = this.close.bind(this);
    }

    shouldComponentUpdate(nextProps: IProps, nextState: IState) {
        if (nextState.showed !== this.state.showed) {
            return true;
        }

        if (nextProps.open === this.props.open) {
            return false;
        }

        //@ts-ignore
        this.state.showed = Boolean(nextProps.open);
        return true;
    }

    componentDidUpdate(prevProps: IProps) {
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
                this.setState({ validateError: data?.error?.message })
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
        this.setState({ showRecover: Math.random() });
    }

    close() {
        this.setState({ showed: false });
    }

    render() {
        if (!this.state.showed) {
            return '';
        }

        return <Fragment>
            <ModalLogin showed={ this.state.showed }
                onClose={ this.close }
                onLogin={ this.login }
                onForgot={ this.forgot }
                validate={ this.state.validateError }
            />;
            <Recover open={ this.state.showRecover } />
        </Fragment>;
    }
}
