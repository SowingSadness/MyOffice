import React from "react";
import Request, { Download } from '../../transport/request';
import Transactions, { ITransaction } from './transactions';

const emptyData = [
];

interface IResponse {
    todayTransactions: ITransaction[]
}

export default class TransactionController extends React.Component<{ login: string }, IResponse> {
    constructor(props: { login: string }) {
        super(props);
        this.state = {
            todayTransactions: []
        };
        this.collect(props.login);
        this.onDownload = this.onDownload.bind(this);
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

    onDownload(from: Date, to: Date) {
        if (isNaN(from.valueOf())) {
            alert("Не верная дата С");
            return
        }
        if (isNaN(to.valueOf())) {
            alert("Не верная дата ПО");
            return;
        }

        Download({
            "method": "private_getTransactions",
            "params": {
                "login": this.props.login,
                "dateFrom": Math.round(from.valueOf() / 1000),
                "dateTo": Math.round(to.valueOf() / 1000)
            }
        });
    }

    render() {
        return <Transactions data={ this.state } onDownload={ this.onDownload } />;
    };
}
