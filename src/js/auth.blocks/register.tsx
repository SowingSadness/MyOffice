import React from "react";
import ModalWindow, { openSignal, closeSignal, traverseSignal as traversePropsSignal, ISignal } from "../html.blocks/modal";
import RegUser from "../model/UserReg";
import ModalRegister, { IProps as IRegisterProps } from "./register.modal";
import ModalThanks from "./thanks.modal";

interface IProps {
    signal: ISignal
}

interface IState {
    signal: ISignal
    registered: boolean
    validate: string
}

export default class Register extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            signal: props.signal,
            registered: false,
            validate: undefined
        };
        this.register = this.register.bind(this);
        this.close = this.close.bind(this);
        this.closeThanks = this.closeThanks.bind(this);
    }

    shouldComponentUpdate(nextProps: IProps, nextState: IState) {
        if (nextState.registered !== this.state.registered) {
            return true;
        }

        if (!nextProps.signal.isUsed()) {
            this.setState({
                signal: undefined
            });
        }

        return !nextProps.signal.isUsed() ||
            !(nextState.signal && nextState.signal.isUsed());
    }

    closeThanks() {
        this.setState({registered: false});
    }

    close(e: React.MouseEvent, model?: RegUser) {
        if (model) {
            return this.register(e, model);
        }
        this.setState({
            signal: closeSignal()
        });
    }

    register(e: React.MouseEvent, model: RegUser) {
        let param = {
            "method": "register",
            "params": {
                "name": model.name,
                "email": model.email,
                "login": model.login,
                "phone": model.phone,
                "refer": ""
            }
        };

        fetch('/rpc', {
            method: 'POST',
            body: JSON.stringify(param)
        }).then((response) => response.json()).then((data: any) => {
            if (!data.result) {
                this.setState({
                    signal: openSignal<IRegisterProps>({
                        validate: data?.error?.message,
                        model: model,
                        onClose: this.close
                    })
                });
                return;
            }
            this.setState({
                signal: closeSignal(),
                registered: true
            });
        });
    }

    render() {
        if (this.state.registered) {
            return <ModalThanks onClose={this.closeThanks} />;
        }

        const registerSignal = this.state.signal || traversePropsSignal<IRegisterProps>(this.props.signal, {
            onClose: this.close
        });

        return <ModalWindow<IRegisterProps> content={ ModalRegister } signal={ registerSignal } />;
    }
}
