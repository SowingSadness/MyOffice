import React from "react";
import Request from '../../transport/request';
import ModalWindow, { createSignal } from "../../html.blocks/modal";
import Validation, { IValidationProps } from "../../html.blocks/modal.blocks/validation";
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
    editModalSignal: number
    validationSignal: number
    message: string
}

export default class EmploiesController extends React.PureComponent<{ login: string }, IState> {
    constructor(props: { login: string }) {
        super(props);
        this.state = {
            isExecuteCommand: false,
            active: [],
            disabled: [],
            addModalSignal: createSignal(false),
            editModalSignal: createSignal(false),
            validationSignal: createSignal(false),
            message: ''
        };
        this.add = this.add.bind(this);
        this.edit = this.edit.bind(this);
        this.enable = this.enable.bind(this);
        this.disable = this.disable.bind(this);
        this.dismiss = this.dismiss.bind(this);
        this._modalAddEmplClose = this._modalAddEmplClose.bind(this);
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
        this.setState({ editModalSignal: createSignal() })
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

    _modalAddEmplClose(e: React.SyntheticEvent, model?: IModalEmployee): void {
        if (!model) {
            return;
        }
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

    _modalEditEmplClose(e: React.SyntheticEvent, model?: IModalEmployee): void {
        if (!model) {
            return;
        }

        Request({
            method: 'private_changeUser',
            params: {
                "login": this.props.login,
                "userLogin": model.login,
                "name": model.name,
                "email": model.email,
                "pass": model.password
            }
        }).then((res) => {
            this.setState({ addModalSignal: createSignal(false) });
            this.collect(this.props.login);
        }, (error) => {
            error.message
        });
    }

    _modalValidateClose(e: React.SyntheticEvent): void {

    }

    render() {
        const newUserOptions: IEmplCardProps = {
            onClose: this._modalAddEmplClose,
            isEditPass: false
        }

        const editUserOptions: IEmplCardProps = {
            onClose: this._modalEditEmplClose,
            isEditPass: true
        }

        const validateOptions = {
            message: this.state.message,
            onCloase: this._modalValidateClose
        };

        const actions: Partial<IActions> = !this.state.isExecuteCommand ? {
            add: this.add,
            edit: this.edit,
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

            <ModalWindow<IEmplCardProps> content={ EmployeeCard } options={ editUserOptions }
                openSignal={ this.state.editModalSignal } />

            <ModalWindow<IValidationProps> content={ Validation } options={ validateOptions }
                openSignal={ this.state.validationSignal } />

            <Emploies
                title="Отключенные сотрудники"
                emploies={ this.state.disabled }
                actions={ actionsUnactive } />
        </React.Fragment>
    };
}
