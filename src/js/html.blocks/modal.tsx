import React, { Fragment, useState } from "react";

export interface IModalProps {
    onClose?: (e: React.SyntheticEvent) => void;
}

interface IProps<TContentProps> {
    content: React.ComponentClass<TContentProps> | React.FunctionComponent<TContentProps>,
    options?: TContentProps,
    openSignal: number
}

interface IState {
    visible: boolean
}

export function createSignal(isVisible: boolean = true): number {
    return !isVisible ? 0 : Math.random();
}

export default class ModalWindow<T> extends React.Component<IProps<T & IModalProps>, IState> {
    private lastSignal: number;

    constructor(props: Readonly<IProps<T & IModalProps>>) {
        super(props);
        this.state = {
            visible: !!props.openSignal
        };

        this.onClose = this.onClose.bind(this);
    }

    shouldComponentUpdate(nextProps: IProps<T & IModalProps>, nextState: IState) {
        if (nextState.visible !== this.state.visible) {
            return true;
        }

        const isNotSameSignal = nextProps.openSignal !== this.lastSignal;
        this.lastSignal = nextProps.openSignal;
        if (isNotSameSignal && Boolean(nextProps.openSignal) !== this.state.visible) {
            this.setState({
                visible: Boolean(nextProps.openSignal)
            });
            return true;
        }

        return false;
    }

    onClose(e: React.SyntheticEvent) {
        this.setState({ visible: false });
        if (this.props.options.onClose) {
            this.props.options.onClose.apply(undefined, arguments);
        }
    };

    render() {
        if (!this.state.visible) {
            return <Fragment />;
        }

        const options = { ...this.props.options };
        delete options.onClose;

        return <div className="modal modal_show">
            <this.props.content { ...options } onClose={ this.onClose } />
        </div>;
    }
}
