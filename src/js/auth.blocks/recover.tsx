import React from "react";
import User from "../model/User";
import ModalRecovery, { TModalMode } from "./Recovery.modal";

interface IProps {
    open: number
}
interface IState {
    mode: TModalMode
    recovered: boolean
}

export default class Recover extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = { mode: 'hide', recovered: false };
        this.close = this.close.bind(this);
    }

    shouldComponentUpdate(nextProps: IProps, nextState: IState) {
        if (nextState.mode !== this.state.mode) {
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
        this.setState({ mode: 'reset' });
    }

    close() {
        this.setState({ mode: 'hide' });
    }

    render() {
        if (this.state.mode === 'hide') {
            return <div></div>;
        }

        return <ModalRecovery mode={this.state.mode} onClose={this.close} onRecover={this.recover} />;
    }
}
