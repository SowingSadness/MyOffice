import React from "react";
import Request, { Download } from '../../transport/request';
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
        this.onLoadBill = this.onLoadBill.bind(this);
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

    onLoadBill(serviceIds: string[]) {
        if (serviceIds.length === 0) {
            alert("Выберите услуги");
        }

        Download({
            "method": "private_getInvoiceAddServices",
            "params": {
                "login": this.props.login,
                "IDs": serviceIds
            }
        });
    }

    render() {
        return <PaymentAddServices data={ this.state.services } onLoadBill={ this.onLoadBill } />;
    };
}
