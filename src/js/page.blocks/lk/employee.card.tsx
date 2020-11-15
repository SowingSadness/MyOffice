import React, { useState } from "react";

export interface ITransaction {
    "dateTime": string
    "desc": string
    "summ": string
    "type": string
}

export interface IModalEmployee {
    login: string
    name: string
    email: string
    password?: string
}

export interface IProps {
    employee?: IModalEmployee
    isEditPass?: boolean
    onClose: (e: React.SyntheticEvent, model?: IModalEmployee) => void
}

export default function EmployeeCard(props: IProps): React.ReactElement {
    const [login, setLogin] = useState<string>(props?.employee?.login);
    const [name, setName] = useState<string>(props?.employee?.name);
    const [email, setEmail] = useState<string>(props?.employee?.email);
    const [password, setPassword] = useState<string>('');

    const PasswordField = <label className="popup__label popup__label_edit-employee">
        Новый пароль
        <input name="empl-pass" type="password" className="popup__input popup__input_edit-employee"
            value={ password }
            onChange={ (e) => setPassword(e.target.value) } />
    </label>;

    const onClose = (e: React.SyntheticEvent) => {
        e.preventDefault();
        props?.onClose(e, {
            login, name, email, password
        });
    };

    return <div className="popup popup_new-employee">
        <span className="popup__close popup__close_new-employee" onClick={ props.onClose }></span>
        <h2 className="popup__title popup__title_new-employee">Новый сотрудник</h2>
        <form className="popup__form popup__form_new-employee">
            <label className="popup__label popup__label_new-employee">
                Логин
                <input className="popup__input popup__input_new-employee"
                    value={ login }
                    onChange={ (e) => setLogin(e.target.value) } />
            </label>
            <label className="popup__label popup__label_new-employee">
                Имя сотрудника
                <input className="popup__input popup__input_new-employee"
                    value={ name }
                    onChange={ (e) => setName(e.target.value) } />
            </label>
            <label className="popup__label popup__label_new-employee">
                E-mail
                <input name="empl-name" className="popup__input popup__input_new-employee"
                    value={ email }
                    onChange={ (e) => setEmail(e.target.value) } />
            </label>
            { props?.isEditPass ? PasswordField : '' }
            <button className="popup__button popup__button_new-employee" onClick={ onClose }>Сохранить</button>
        </form>
    </div>;
}


// var windows = <React.Fragment>
//     <div className="modal modal_new-success">
//         <div className="popup popup_success">
//             <span className="popup__close popup__close_new-success"></span>
//             <h2 className="popup__title popup__title_success">Сотрудник успешно добавлен!</h2>
//         </div>
//     </div>
//     <div className="modal modal_delete-employee">
//         <div className="popup popup_delete-employee">
//             <span className="popup__close popup__close_delete-employee"></span>
//             <h2 className="popup__title popup__title_delete-employee">
//                 Вы уверены, что хотите удалить сотрудника?
//             </h2>
//             <div className="popup__button-container">
//                 <button className="popup__button popup__button_delete-employee">Удалить</button>
//                 <button className="popup__button popup__button_cancel">Отмена</button>
//             </div>
//         </div>
//     </div>
//     <div className="modal modal_delete-success">
//         <div className="popup popup_delete-success">
//             <span className="popup__close popup__close_delete-success"></span>
//             <h2 className="popup__title popup__title_delete-success">Сотрудник удалён!</h2>
//         </div>
//     </div>
// </React.Fragment>;
