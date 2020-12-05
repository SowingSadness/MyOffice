import React, { Fragment } from "react";
import type Header from "../html.blocks/header";
import User from "../model/User";

type TProps = {
    Header: typeof Header,
    Body: React.ComponentClass | React.FunctionComponent,
    Footer: React.FunctionComponent,
    user?: User,
    subMenu?: React.ComponentClass | React.FunctionComponent
};

export default function Page(props: Readonly<TProps>): React.ReactElement {
    return <Fragment>
        <div id="header">
            <props.Header user={ props.user } subMenu={ props.subMenu } />
        </div>
        <props.Body />
        <props.Footer />
    </Fragment>;
}