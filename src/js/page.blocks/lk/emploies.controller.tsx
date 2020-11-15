import React from "react";
import Request from '../../transport/request';
import ModalWindow, { createSignal } from "../../html.blocks/modal";
import Emploies, { IEmployee } from './emploies';
import EmployeeCard, { IModalEmployee, IProps as IEmplCardProps } from './employee.card';

interface IResponse {
    activeUsers: IEmployee[]
}

interface IState {
    active: IEmployee[]
    disabled: IEmployee[]
    addModalSignal: number
}

export default class EmploiesController extends React.Component<{ login: string }, IState> {
    constructor(props: { login: string }) {
        super(props);
        this.state = {
            active: [],
            disabled: [],
            addModalSignal: createSignal(false)
        };
        this.add = this.add.bind(this);
        this._modalNewClose = this._modalNewClose.bind(this);
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

    add(): void {
        this.setState({ addModalSignal: createSignal() })
    }

    _modalNewClose(e: React.SyntheticEvent, model?: IModalEmployee): void {
        if (model) {
            Request({
                method: 'private_addUser',
                params: {
                    "login": model.login,
                    "name": model.name,
                    "email": model.email
                }
            }).then((res) => {
                this.setState({ addModalSignal: createSignal(false) });
                this.collect(this.props.login);
            });
        }
    }

    render() {
        const newUserOptions: IEmplCardProps = {
            onClose: this._modalNewClose,
            isEditPass: false
        }

        return <React.Fragment>
            <Emploies
                title="Активные сотрудники"
                emploies={ this.state.active }
                actions={ { add: this.add } } />
            <ModalWindow<IEmplCardProps> content={ EmployeeCard } options={ newUserOptions }
                openSignal={ this.state.addModalSignal } />

            <Emploies
                title="Отключенные сотрудники"
                emploies={ this.state.disabled }
                actions={ {} } />
        </React.Fragment>
    };
}
