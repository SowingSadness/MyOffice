import React from "react";
import type Header from "../html.blocks/header";
import User from "src/js/model/User";

type TProps = {
    Header: typeof Header,
    Body: React.ComponentClass | React.FunctionComponent
};

export default function Page(props: Readonly<TProps>): React.ReactElement {
    return <div className="page">
        <div id="header">
            <props.Header user={ undefined } />
        </div>
        <props.Body />
    </div>;
}