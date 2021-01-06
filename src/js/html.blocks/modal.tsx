import React, { Fragment } from "react";

type IOpenType = "open";
type ICloseType = "close";
type ISignalTypes = IOpenType | ICloseType;
export type ISignal<T = {}> = IOpenSignal<T> | ICloseSignal;

export interface IAbstractSignal {
    use(): void
    isUsed(): boolean
}

export interface IOpenSignal<T = void> extends IAbstractSignal{
    type: IOpenType
    props?: T
}

export interface ICloseSignal extends IAbstractSignal {
    type: ICloseType
}

class Signal<TT extends ISignalTypes, TP> implements IAbstractSignal {
    private used: boolean = false;

    constructor(public type: TT, used: boolean, public props?: TP) {
    }

    isUsed(): boolean {
        return this.used;
    }

    use(): void {
        this.used = true;
    }
}

export function openSignal<T = {}>(props?: T, used: boolean = false): IOpenSignal<T> {
    return new Signal<IOpenType, T>("open", used, props);
}

export function closeSignal(used: boolean = false): ICloseSignal {
    return new Signal<ICloseType, void>("close", used);
}

export function traverseSignal<T = {}>(initSignal: ISignal, props?: T & IModalProps): ISignal<T> {
    const isUsed = initSignal.isUsed();
    initSignal.use();
    if (initSignal.type !== "open") {
        return closeSignal(isUsed);
    }

    return openSignal({ ...initSignal.props, ...props }, isUsed);
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

function isShadowEqual(first: object, second: object): boolean {
    if (first != second) {
        return false;
    }

    const keysFirst = Object.keys(first);
    const keysSecond = Object.keys(second);
    if (keysFirst.length !== keysSecond.length) {
        return false;
    }

    for (let i = 0; i < keysFirst.length; i++) {
        // @ts-ignore
        if (first[keysFirst[i]] !== second[keysFirst[i]]) {
            return false;
        }
    }

    return true;
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

        if (nextProps.signal.isUsed()) {
            return false;
        }

        this.setState({
            visible: nextProps.signal.type === "open"
        });

        return true;
    }

    onClose(e: React.SyntheticEvent) {
        if (this.props.signal.type === "close") {
            return;
        }

        if (!e.defaultPrevented) {
            this.setState({ visible: false });
        }

        this.props.signal?.props?.onClose?.apply(undefined, arguments);
    };

    render() {
        this.props.signal.use();

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
