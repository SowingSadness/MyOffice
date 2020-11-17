import React from "react";
import Request from '../../transport/request';
import ModalWindow, { createSignal } from "../../html.blocks/modal";
import Emploies, { IEmployee, IActions } from './emploies';
import EmployeeCard, { IModalEmployee, IProps as IEmplCardProps } from './employee.card';

interface IResponse {
    activeUsers: IEmployee[]
}
interface IResponseUn {
    unActiveUsers: IEmployee[]
}

interface IState {
    isExecuteCommand: boolean
    active: IEmployee[]
    disabled: IEmployee[]
    addModalSignal: number
}

export default class EmploiesController extends React.Component<{ login: string }, IState> {
    constructor(props: { login: string }) {
        super(props);
        this.state = {
            isExecuteCommand: false,
            active: [],
            disabled: [],
            addModalSignal: createSignal(false)
        };
        this.add = this.add.bind(this);
        this.edit = this.edit.bind(this);
        this.enable = this.enable.bind(this);
        this.disable = this.disable.bind(this);
        this.dismiss = this.dismiss.bind(this);
        this._modalNewClose = this._modalNewClose.bind(this);
        this.collect(props.login);
    }

    collect(login: string) {
        const reqActive = Request<IResponse>({
            "method": "private_widget_activeUsers",
            "params": {
                "login": login,
            }
        });

        const reqDisabled = Request<IResponseUn>({
            "method": "private_widget_unActiveUsers",
            "params": {
                "login": login,
            }
        });

        Promise.all([reqActive, reqDisabled]).then(([dataA, dataD]) => {
            this.setState({
                isExecuteCommand: false,
                active: dataA.activeUsers,
                disabled: dataD.unActiveUsers
            });
        }).catch((e) => {
            console.error(e);
            this.setState({
                isExecuteCommand: false
            });
        });
    }

    add(): void {
        this.setState({ addModalSignal: createSignal() })
    }

    edit(item: IEmployee): void {
        this.setState({ addModalSignal: createSignal() })
    }

    enable(item: IEmployee): void {
        Request({
            method: 'private_userOn',
            params: {
                "login": this.props.login,
                "userLogin": item.login
            }
        }).then((res) => {
            this.setState({ isExecuteCommand: true });
            this.collect(this.props.login);
        });
    }

    disable(item: IEmployee): void {
        Request({
            method: 'private_userOff',
            params: {
                "login": this.props.login,
                "userLogin": item.login
            }
        }).then((res) => {
            this.setState({ isExecuteCommand: true });
            this.collect(this.props.login);
        });
    }

    dismiss(item: IEmployee): void {
    }

    _modalNewClose(e: React.SyntheticEvent, model?: IModalEmployee): void {
        if (model) {
            Request({
                method: 'private_addUser',
                params: {
                    "login": this.props.login,
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

        const actions: Partial<IActions> = !this.state.isExecuteCommand ? {
            add: this.add,
            // edit: this.edit,
            disable: this.disable
        } : {};

        const actionsUnactive: Partial<IActions> = !this.state.isExecuteCommand ? {
            enable: this.enable
        } : {};

        return <React.Fragment>
            <Emploies
                title="Активные сотрудники"
                emploies={ this.state.active }
                actions={ actions } />
            <ModalWindow<IEmplCardProps> content={ EmployeeCard } options={ newUserOptions }
                openSignal={ this.state.addModalSignal } />

            <Emploies
                title="Отключенные сотрудники"
                emploies={ this.state.disabled }
                actions={ actionsUnactive } />
        </React.Fragment>
    };
}
