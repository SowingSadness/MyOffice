import React from "react";
import { render } from "react-dom";
import Header from './html.blocks/header';
import Footer from './html.blocks/footer';
import { Page } from "./page.blocks";


export default function include_me(Body: React.ComponentClass | React.FunctionComponent) {
    const domPage = document.getElementById('page');
    render(React.createElement(Page, {
        Header,
        Body,
        Footer
    }), domPage);
};
