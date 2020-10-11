import React from "react";
import User from "../model/User";
import ModalRecovery from "./Recovery.modal";

interface IProps {
    open: number
}
interface IState {
    showed: boolean
    recovered: boolean
}

export default class Recover extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = { showed: Boolean(props.open), recovered: false };
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

    recover(e: React.MouseEvent) {
        this.close();
    }

    close() {
        this.setState({ showed: false });
    }

    render() {
        if (!this.state.showed) {
            return '';
        }

        return <ModalRecovery showed={this.state.showed} onClose={this.close} onRecovery={this.recover} />;
    }
}
