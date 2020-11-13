import React from "react";
import Request from '../../transport/request';
import Emploies, { IEmployee } from './emploies';

interface IResponse {
    activeUsers: IEmployee[]
}

interface IState {
    active: IEmployee[]
    disabled: IEmployee[]
}

export default class EmploiesController extends React.Component<{ login: string }, IState> {
    constructor(props: { login: string }) {
        super(props);
        this.state = {
            active: [],
            disabled: []
        };
        this.collect(props.login);
    }

    collect(login: string) {
        let param = {
            "method": "private_widget_activeUsers",
            "params": {
                "login": login,
            }
        };
        Request<IResponse>(param).then((data: IResponse) => {
            this.setState({ active: data.activeUsers });
        }).catch((error) => {
            //this.setState({ validate: error?.message });
            console.error(error);
        });
    }

    add(): Promise<IEmployee> {
        return Promise.resolve({
            name: "name",
            email: "email",
            login: 'login: ' + Math.round(Math.random() * 1000)
        });
    }

    render() {
        return <React.Fragment>
            <Emploies
                title="Активные сотрудники"
                emploies={ this.state.active }
                actions={ { add: this.add } } />
            <Emploies
                title="Отключенные сотрудники"
                emploies={ this.state.disabled }
                actions={ {} } />
        </React.Fragment>
    };
}
