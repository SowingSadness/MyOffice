import React from "react";
import Request from '../../transport/request';
import PaymentAddServices, { IService } from './addservices';

const emptyData: IService[] = [
];

interface IResponse {
    addServices: IService[]
}

export default class AddServicesController extends React.Component<{ login: string }, { services: IService[] }> {
    constructor(props: { login: string }) {
        super(props);
        this.state = { services: emptyData };
        this.collect(props.login);
    }

    collect(login: string) {
        let param = {
            "method": "private_widget_addServices",
            "params": {
                "login": login,
            }
        };
        Request<IResponse>(param).then((data: IResponse) => {
            this.setState({ services: data.addServices });
        }).catch((error) => {
            //this.setState({ validate: error?.message });
            console.error(error);
        });
    }

    render() {
        return <PaymentAddServices data={ this.state.services } />;
    };
}
