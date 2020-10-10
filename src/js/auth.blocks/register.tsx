import React from "react";
import ModalRegister from "./register.modal";
import ModalThanks from "./thanks.modal";

interface IProps {
    open: number
}
interface IState {
    showed: boolean
    registered: boolean
}

export default class Register extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = { showed: Boolean(props.open), registered: false };
        this.register = this.register.bind(this);
        this.close = this.close.bind(this);
    }

    shouldComponentUpdate(nextProps: IProps, nextState: IState) {
        if (nextState.showed !== this.state.showed) {
            return true;
        }

        if (nextState.registered !== this.state.registered) {
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

    close() {
        this.setState({showed: false, registered: false});
    }

    register(e: React.MouseEvent) {
        e.preventDefault();
        this.setState({registered: true});
    }

    render() {
        if (!this.state.showed) {
            return '';
        }

        if (this.state.registered) {
            return <ModalThanks onClose={this.close} />;
        }

        return <ModalRegister showed={this.state.showed} onClose={this.close} onRegister={this.register} /> ;
    }
}
