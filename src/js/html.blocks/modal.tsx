import React, { Fragment } from "react";


export type ISignal<T = {}> = IOpenSignal<T> | ICloseSignal

export interface IOpenSignal<T = void> {
    type: 'open'
    props: T
}

export interface ICloseSignal {
    type: 'close'
}

export function openSignal<T = void>(props?: T): IOpenSignal<T> {
    return {
        type: 'open',
        props
    };
}

export function closeSignal(): ICloseSignal {
    return { type: 'close' };
}

export interface IModalProps {
    onClose?: (e: React.SyntheticEvent) => void;
}

interface IProps<T> {
    content: React.ComponentClass<T> | React.FunctionComponent<T>
    signal: IOpenSignal<T> | ICloseSignal
}

interface IState<T> {
    visible: boolean
}

export default class ModalWindow<T> extends React.Component<IProps<T & IModalProps>, IState<T & IModalProps>> {
    constructor(props: Readonly<IProps<T & IModalProps>>) {
        super(props);
        this.state = {
            visible: props.signal.type === "open",
        };

        this.onClose = this.onClose.bind(this);
    }

    shouldComponentUpdate(nextProps: IProps<T & IModalProps>, nextState: IState<T & IModalProps>) {
        if (nextState.visible !== this.state.visible) {
            return true;
        }

        const isSameTypeSignal = nextProps.signal.type === this.props.signal.type;
        if (isSameTypeSignal && nextProps.signal.type === "close") {
            return false;
        }

        this.setState({
            visible: nextProps.signal.type === "open",
        });

        return true;
    }

    onClose(e: React.SyntheticEvent) {
        if (this.props.signal.type === "close") {
            return;
        }
        this.setState({ visible: false });

        this.props.signal?.props?.onClose?.apply(undefined, arguments);
    };

    render() {
        if (!this.state.visible || this.props.signal.type === "close") {
            return <Fragment />;
        }

        const options = { ...this.props.signal.props };
        delete options.onClose;

        return <div className="modal modal_show">
            <this.props.content { ...options } onClose={ this.onClose } />
        </div>;
    }
}
