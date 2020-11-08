import React, { useState } from "react";

export default function Emploies(): React.ReactElement {
    return <React.Fragment>
        <div className="profile-settings profile-settings_row profile-settings_employees">
            <div className="profile-settings__title-wrapper">
                <h2 className="profile-settings__title">Активные сотрудники</h2>
            </div>
            <div className="lk__wrapper lk__wrapper_employees-active">
                <div className="employees">
                    <div className="employees__row employees__row_titles">
                        <p className="employees__title">Сотрудник</p>
                        <p className="employees__title employees__title_login">Логин</p>
                        <p className="employees__title employees__title_email">E-mail</p>
                    </div>
                    <div className="employees__row">
                        <p className="employees__text">Бердымухамедов Гурбангулы</p>
                        <p className="employees__text employees__text_login">@berdimuhamedovgurbanguli</p>
                        <p className="employees__text employees__text_email">berdimuhamedovgurbanguli@mail.ru</p>
                        <div className="employees__icons">
                            <img className="employees__icon employees__icon_stop" src={ require('src/images/stop.svg') } />
                            <img className="employees__icon employees__icon_edit" src={ require('src/images/edit.svg') } />
                            <img className="employees__icon employees__icon_delete" src={ require('src/images/delete.svg') } />
                        </div>
                    </div>
                    <div className="employees__row">
                        <p className="employees__text">Бердымухамедов Гурбангулы</p>
                        <p className="employees__text employees__text_login">@berdimuhamedovgurbanguli</p>
                        <p className="employees__text employees__text_email">berdimuhamedovgurbanguli@mail.ru</p>
                        <div className="employees__icons">
                            <img className="employees__icon employees__icon_stop" src={ require('src/images/stop.svg') } />
                            <img className="employees__icon employees__icon_edit" src={ require('src/images/edit.svg') } />
                            <img className="employees__icon employees__icon_delete" src={ require('src/images/delete.svg') } />
                        </div>
                    </div>
                    <button className="employees__add-button">+ Сотрудник</button>
                </div>
            </div>
        </div>
        <div className="profile-settings profile-settings_row profile-settings_employees">
            <div className="profile-settings__title-wrapper">
                <h2 className="profile-settings__title">Отключенные сотрудники</h2>
            </div>
            <div className="lk__wrapper lk__wrapper_employees-deleted">
                <div className="employees">
                    <div className="employees__row employees__row_titles employees__row_deleted">
                        <p className="employees__title">Сотрудник</p>
                        <p className="employees__title employees__title_login">Логин</p>
                        <p className="employees__title employees__title_email">E-mail</p>
                    </div>
                    <div className="employees__row employees__row_deleted">
                        <p className="employees__text" title="Бердымухамедов Гурбангулы">Бердымухамедов Гурбангулы</p>
                        <p className="employees__text employees__text_login" title="@berdimuhamedovgurbanguli">@berdimuhamedovgurbanguli</p>
                        <p className="employees__text employees__text_email" title="berdimuhamedovgurbanguli@mail.ru">
                            berdimuhamedovgurbanguli@mail.ru
                                </p>
                        <a href="#" className="employees__restore">Восстановить</a>
                    </div>
                    <div className="employees__row employees__row_deleted">
                        <p className="employees__text" title="Бердымухамедов Гурбангулы">Бердымухамедов Гурбангулы</p>
                        <p className="employees__text employees__text_login" title="@berdimuhamedovgurbanguli">@berdimuhamedovgurbanguli</p>
                        <p className="employees__text employees__text_email" title="berdimuhamedovgurbanguli@mail.ru">
                            berdimuhamedovgurbanguli@mail.ru
                                </p>
                        <a href="#" className="employees__restore">Восстановить</a>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>;
}
