import React, { useState } from "react";

export default function Block(props: { title: string, children: React.ReactElement | React.ReactElement[] }): React.ReactElement {

    const [isOpen, open] = useState(false);
    const toggle = () => {
        open(!isOpen);
    }

    const ct = "accordion__panel" + (isOpen ? " accordion__panel_active" : "");
    const cb = "accordion__text-block" + (isOpen ? " accordion__text-block_active" : "");

    return <div className="accordion">
        <div className={ ct } onClick={ toggle }>
            <h3 className="accordion__title">{ props.title }</h3>
        </div>
        <div className={ cb }>
            { props.children }
        </div>
    </div>;
}