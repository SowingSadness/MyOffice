import React, { useState } from "react";

export interface IEmployee {
    name: string
    email: string
    login: string
}

type TAction = (employee: IEmployee) => void;
export interface IActions {
    add: () => void
    edit: TAction
    dismiss: TAction
    enable: TAction
    disable: TAction
}

const actionEdit = (item: IEmployee, action: TAction) => <img className="employees__icon employees__icon_edit"
    onClick={ () => action(item) }
    src={ require('src/images/edit.svg') } />;
const actionDismiss = (item: IEmployee, action: TAction) => <img className="employees__icon employees__icon_delete"
    onClick={ () => action(item) }
    src={ require('src/images/delete.svg') } />;
const actionEnable = (item: IEmployee, action: TAction) => <a href="#" className="employees__restore"
    onClick={ (e) => { e.preventDefault(); action(item); } } >
        Восстановить
    </a>;
const actionDisable = (item: IEmployee, action: TAction) => <img className="employees__icon employees__icon_stop"
    onClick={ () => action(item) }
    src={ require('src/images/stop.svg') } />;

export default function Emploies(props: { title: string, actions: Partial<IActions>, emploies: IEmployee[] }): React.ReactElement {

    const items = props.emploies.map((item) => {
        return <div className="employees__row" key={ item.login }>
            <p className="employees__text">{ item.name }</p>
            <p className="employees__text employees__text_login">{ item.login }</p>
            <p className="employees__text employees__text_email">{ item.email }</p>
            <div className="employees__icons">
                { props.actions.disable ? actionDisable(item, props.actions.disable) : '' }
                { props.actions.edit ? actionEdit(item, props.actions.edit) : '' }
                { props.actions.dismiss ? actionDismiss(item, props.actions.dismiss) : '' }
                { props.actions.enable ? actionEnable(item, props.actions.enable) : '' }
            </div>
        </div>
    });

    const addHandler = function (e: React.MouseEvent) {
        props.actions.add();
    }

    const addAction = props.actions.add ? <button className="employees__add-button" onClick={ addHandler }>+ Сотрудник</button> : '';

    return <React.Fragment>
        <div className="profile-settings profile-settings_row profile-settings_employees">
            <div className="profile-settings__title-wrapper">
                <h2 className="profile-settings__title">{ props.title }</h2>
            </div>
            <div className="lk__wrapper lk__wrapper_employees-active">
                <div className="employees">
                    <div className="employees__row employees__row_titles">
                        <p className="employees__title">Сотрудник</p>
                        <p className="employees__title employees__title_login">Логин</p>
                        <p className="employees__title employees__title_email">E-mail</p>
                    </div>
                    { items }
                    { addAction }
                </div>
            </div>
        </div>
    </React.Fragment>;
}
