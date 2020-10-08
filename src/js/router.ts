import React from "react";
import { render } from "react-dom";
import Header from './html.blocks/Header';
import { Page } from "./page.blocks";
import "./index.blocks";


export default function include_me(Body: React.ComponentClass | React.FunctionComponent) {
    const domPage = document.getElementById('page');
    render(React.createElement(Page, {
        Header,
        Body
    }), domPage);
};
