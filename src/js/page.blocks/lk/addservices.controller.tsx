import React from "react";
import Request from '../../transport/request';
import PaymentAddServices, { IService } from './addservices';

const emptyData = [
    {
        "name": "1C Контрагент",
        "price": 4800,
        "comment": "Заполнение данных контрагентов по ИНН"
    },
    {
        "name": "1C Отчетность",
        "price": 3900,
        "comment": "Сдача отчетности в электронном виде прямо из 1С"
    }
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
