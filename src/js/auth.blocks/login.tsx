import React from "react";
import User from "../model/User";
import ModalLogin from "./login.modal";

interface IProps {
    open: number,
    validate?: boolean
    onLogined: (user: User) => unknown
}
interface IState {
    showed: boolean
}

export default class Login extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = { showed: Boolean(props.open) };
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

    login(e: React.MouseEvent) {
        this.props.onLogined(new User('Random user', '+7' + Math.floor(Math.random() * 1000000000)));
        this.close();
    }

    close() {
        this.setState({ showed: false });
    }

    render() {
        if (!this.state.showed) {
            return '';
        }

        return <ModalLogin showed={this.state.showed} onClose={this.close} onLogin={this.login} />;
    }
}
