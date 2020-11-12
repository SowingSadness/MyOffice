import React from "react";
import Request from '../../transport/request';
import Payment, { IPayTariff } from './payment';

const emptyData = [
    {
        "period": "1 месяц",
        "summ": 1000,
        "discount": 0,
        "summForPay": 1000
    },
    {
        "period": "3 месяца",
        "summ": 3000,
        "discount": 200,
        "summForPay": 2800
    },
    {
        "period": "6 месяцев",
        "summ": 6000,
        "discount": 500,
        "summForPay": 5500
    }
];

interface IResponse {
    Payment: IPayTariff[]
}

export default class PaymentController extends React.Component<{ login: string }, { tariffs: IPayTariff[] }> {
    constructor(props: { login: string }) {
        super(props);
        this.state = {
            tariffs: emptyData
        };
        this.collect(props.login);
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

    render() {
        return <Payment data={ this.state.tariffs } />;
    };
}
