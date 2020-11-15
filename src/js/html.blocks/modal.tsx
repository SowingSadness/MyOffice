import React, { Fragment, useState } from "react";

export interface IModalProps {
    onClose?: (e: React.SyntheticEvent) => void;
}

interface IProps<TContentProps> {
    content: React.ComponentClass<TContentProps> | React.FunctionComponent<TContentProps>,
    options?: TContentProps,
    openSignal: number
}

export function createSignal(isVisible: boolean = true): number {
    return !isVisible ? 0 : Math.random();
}

export default function ModalWindow<T extends IModalProps>(props: Readonly<IProps<T>>): React.ReactElement {
    let [lastSignal, setSignal] = useState(props.openSignal);
    let [visible, setVisible] = useState(Boolean(props.openSignal));

    const isNotSameSignal = props.openSignal !== lastSignal;
    if (isNotSameSignal && Boolean(props.openSignal) !== visible) {
        setVisible(Boolean(props.openSignal));
    }

    if (isNotSameSignal) {
        setSignal(props.openSignal);
    }

    if (!visible) {
        return <Fragment />;
    }

    let options = {...props.options};
    const inOnClose = options?.onClose;
    let onClose = function (e: React.SyntheticEvent) {
        setVisible(false);
        if (inOnClose) {
            inOnClose.apply(undefined, arguments);
        }
    };
    if (options) {
        options.onClose = undefined;
    }

    return <div className="modal modal_show">
        <props.content { ...options } onClose={ onClose } />
    </div>;
}
