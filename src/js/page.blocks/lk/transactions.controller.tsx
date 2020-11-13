import React from "react";
import Request from '../../transport/request';
import Transactions, { ITransaction } from './transactions';

const emptyData = [
    {
        "dateTime": "2020-11-05T00:00:00",
        "desc": "Стартовый баланс",
        "summ": "280 руб.",
        "type": "+"
    },
    {
        "dateTime": "2020-11-05T00:00:00",
        "desc": "Оплата за пользователя user1@moiofis",
        "type": "-",
        "summ": "35.00 руб."
    }
];

interface IResponse {
    todayTransactions: ITransaction[]
}

export default class TransactionController extends React.Component<{ login: string }, IResponse> {
    constructor(props: { login: string }) {
        super(props);
        this.state = {
            todayTransactions: emptyData
        };
        this.collect(props.login);
    }

    collect(login: string) {
        let param = {
            "method": "private_widget_transactions",
            "params": {
                "login": login,
            }
        };
        Request<IResponse>(param).then((data: IResponse) => {
            this.setState(data);
        }).catch((error) => {
            //this.setState({ validate: error?.message });
            console.error(error);
        });
    }

    render() {
        return <Transactions data={ this.state } />;
    };
}
