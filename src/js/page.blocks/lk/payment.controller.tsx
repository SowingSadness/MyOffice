import React from "react";
import Request, { Download } from '../../transport/request';
import Payment, { IPayTariff } from './payment';

interface IResponse {
    Payment: IPayTariff[]
}

export default class PaymentController extends React.Component<{ login: string }, { tariffs: IPayTariff[] }> {
    constructor(props: { login: string }) {
        super(props);
        this.state = {
            tariffs: []
        };
        this.collect(props.login);
        this.onLoadBill = this.onLoadBill.bind(this);
    }

    collect(login: string) {
        let param = {
            "method": "private_widget_payment",
            "params": {
                "login": login,
            }
        };
        Request<IResponse>(param).then((data: IResponse) => {
            this.setState({ tariffs: data.Payment });
        }).catch((error) => {
            //this.setState({ validate: error?.message });
            console.error(error);
        });
    }

    onLoadBill(id: number) {
        Download({
            "method": "private_getInvoiceTariff",
            "params": {
                "login": this.props.login,
                "id": id
            }
        });
    }

    render() {
        return <Payment data={ this.state.tariffs } onLoadBill={ this.onLoadBill }/>;
    };
}
