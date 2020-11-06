import React from "react";
import Begin from "./lk/begin";

export default function LK(): React.ReactElement {
    return <main className="main main_lk">
        <section className="lk">
            <div className="lk__upper-block">
                <div className="lk__left">
                    <div className="profile-settings profile-settings_lk">
                        <div className="profile-settings__title-wrapper">
                            <h2 className="profile-settings__title">Оплата</h2>
                        </div>
                        <div className="lk__wrapper">
                            <div className="lk__row">
                                <p className="lk__little-text">Период оплаты:</p>
                                <select className="lk__select">
                                    <option value="1 месяц" className="lk__option">1 месяц</option>
                                    <option selected className="lk__option">3 месяца</option>
                                    <option className="lk__option">6 месяцев</option>
                                    <option className="lk__option">Произвольный период</option>
                                </select>
                            </div>
                            <div className="lk__row">
                                <p className="lk__little-text">К оплате:</p>
                                <p className="lk__little-text">1 000 руб.</p>
                            </div>
                            <div className="lk__row">
                                <p className="lk__little-text">Скидка:</p>
                                <p className="lk__little-text">900 руб.</p>
                            </div>
                            <div className="lk__row">
                                <p className="lk__little-text lk__little-text_bold">Итого к оплате:</p>
                                <p className="lk__little-text">100 руб.</p>
                            </div>
                            <div className="lk__row">
                                <button className="lk__button lk__button_pay">Оплатить онлайн</button>
                                <button className="lk__button lk__button_download">Скачать счёт</button>
                            </div>
                            <p className="lk__little-text lk__little-text_under">
                                Для оформления возврата необходимо написать на e-mail: support@moiofis.ru
                                </p>
                        </div>
                    </div>
                    <div className="profile-settings profile-settings_lk profile-settings_add">
                        <div className="profile-settings__title-wrapper">
                            <h2 className="profile-settings__title">Дополнительные услуги</h2>
                        </div>
                        <div className="lk__wrapper">
                            <p className="lk__description">Период оплаты дополнительных услуг — 1 год</p>
                            <div className="lk__row lk__row_blue lk__row_padding">
                                <p className="lk__little-text lk__little-text_icon">1С Контрагент</p>
                                <div className="lk__box">
                                    <label className="lk__label">4 800 руб./год</label>
                                    <input className="lk__checkbox" type="checkbox" />
                                </div>
                            </div>
                            <div className="lk__row lk__row_padding">
                                <p className="lk__little-text lk__little-text_icon">1С Отчётность</p>
                                <div className="lk__box">
                                    <label className="lk__label">3 900 руб./год</label>
                                    <input className="lk__checkbox" type="checkbox" />
                                </div>
                            </div>
                            <div className="lk__row lk__row_blue lk__row_padding">
                                <p className="lk__little-text lk__little-text_icon">1С Спарк</p>
                                <div className="lk__box">
                                    <label className="lk__label">3 900 руб./год</label>
                                    <input className="lk__checkbox" type="checkbox" />
                                </div>
                            </div>
                            <div className="lk__row lk__row_last">
                                <p className="lk__little-text lk__little-text_bold">Итого к оплате:</p>
                                <input className="lk__input" disabled placeholder="3 900 руб." />
                            </div>
                            <div className="lk__row lk__row_last">
                                <button className="lk__button lk__button_pay">Оплатить онлайн</button>
                                <button className="lk__button lk__button_download">Скачать счёт</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lk__right">

                    <Begin />

                    <div className="profile-settings profile-settings_lk profile-settings_rates">
                        <div className="profile-settings__title-wrapper">
                            <h2 className="profile-settings__title">Мой тариф</h2>
                        </div>
                        <div className="lk__wrapper lk__wrapper_rate">
                            <p className="lk__little-text lk__little-text_bold-mini lk__little-text_bold">Основной тариф</p>
                            <div className="lk__row lk__row_blue lk__row_padding">
                                <p className="lk__little-text lk__little-text_no-margin">Текущий баланс:</p>
                                <p className="lk__little-text lk__little-text_no-margin lk__little-text_bold">
                                    3 000 руб.
                                    </p>
                            </div>
                            <div className="lk__row lk__row_padding">
                                <p className="lk__little-text lk__little-text_no-margin">Подключено сотрудников:</p>
                                <p className="lk__little-text lk__little-text_no-margin i lk__little-text_bold">
                                    2
                                    </p>
                            </div>
                            <div className="lk__row lk__row_blue lk__row_padding">
                                <p className="lk__little-text lk__little-text_no-margin">Дисковое пространство:</p>
                                <p className="lk__little-text lk__little-text_no-margin  lk__little-text_bold">
                                    2 Гб
                                    </p>
                            </div>
                            <div className="lk__row lk__row_padding lk__row_add">
                                <p className="lk__little-text lk__little-text_no-margin">Доступ оплачен до:</p>
                                <p className="lk__little-text lk__little-text_no-margin lk__little-text_bold">
                                    25.12.2020
                                    </p>
                            </div>
                            <p className="lk__little-text lk__little-text_bold-mini lk__little-text_bold">Дополнительные услуги</p>
                            <div className="lk__row lk__row_padding lk__row_first">
                                <p className=" lk__little-text  lk__little-text_bold lk__little-text_bold-mini lk__little-text_no-margin">Услуга:</p>
                                <p className="lk__little-text lk__little-text_bold lk__little-text_bold-mini lk__little-text_no-margin">Доступно до:</p>
                            </div>
                            <div className="lk__row lk__row_blue lk__row_padding">
                                <p className="lk__little-text_no-margin lk__little-text">1С Спарк</p>
                                <p className="lk__little-text_no-margin lk__little-text">21.10.2020</p>
                            </div>
                            <div className="lk__row lk__row_padding">
                                <p className="lk__little-text_no-margin lk__little-text">1С Отчётность</p>
                                <p className="lk__little-text_no-margin lk__little-text">Не подключено</p>
                            </div>
                            <div className="lk__row lk__row_blue lk__row_padding">
                                <p className="lk__little-text_no-margin lk__little-text">1С Контрагент</p>
                                <p className="lk__little-text_no-margin lk__little-text">21.10.2020</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="profile-settings profile-settings_row">
                <div className="profile-settings__title-wrapper">
                    <h2 className="profile-settings__title">Управление дисковым пространством</h2>
                </div>
                <div className="lk__wrapper lk__wrapper_control">
                    <div className="control-lk">
                        <div className="control-lk__engaged">
                            <p className="control-lk__sign">Занято:</p>
                            <p className="control-lk__sign control-lk__sign_bold">5 Гб</p>
                        </div>
                        <div className="control-lk__line">
                            <div className="control-lk__line control-lk__line_blue"></div>
                        </div>
                        <div className="control-lk__row">
                            <p className="control-lk__sign control-lk__sign_row">
                                Дополнительное дисковое пространство
                                </p>
                            <div className="calculate-block__count-block calculate-block__count-block_lk">
                                <div className="calculate-block__minus calculate-block__minus_lk">
                                    <img className="calculate-block__minus-icon" src={ require('src/images/lineMinus.svg') } />
                                </div>
                                <p className="calculate-block__number calculate-block__number_lk">5 Гб</p>
                                <div className="calculate-block__minus calculate-block__minus_lk">
                                    <img className="calculate-block__minus-icon" src={ require('src/images/lineMinus.svg') } />
                                    <img className="calculate-block__minus-icon_plus" src={ require('src/images/lineMinus.svg') } />
                                </div>
                            </div>
                            <div className="control-lk__pay">
                                <p className="control-lk__sign control-lk__sign_pay">Доплата:</p>
                                <p className="control-lk__sign">95 руб./мес</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
            <div className="profile-settings profile-settings_row">
                <div className="profile-settings__title-wrapper">
                    <h2 className="profile-settings__title">Транзакции</h2>
                </div>
                <div className="lk__wrapper lk__wrapper_employees-deleted">
                    <div className="accordion__panel_text accordion__panel_border">
                        <p className="accordion__text accordion__text_program accordion__text_lk">
                            Просмотр транзакций за сегодня
                            </p>
                    </div>
                    <div className="accordion__text-block accordion__text-block_border">
                        <div className="accordion__row accordion__row_lk">
                            <p className="accordion__text accordion__text_date">10:35</p>
                            <p className="accordion__text accordion__text_description">Внесён платёж за май</p>
                            <p className="accordion__text accordion__text_price">+ 1 000 руб.</p>
                        </div>
                        <div className="accordion__row accordion__row_lk">
                            <p className="accordion__text accordion__text_date">12:35</p>
                            <p className="accordion__text accordion__text_description">
                                Оплата за пользователя @sultanovaelena
                                </p>
                            <p className="accordion__text accordion__text_price accordion__text_pay">- 35 руб.</p>
                        </div>
                    </div>
                    <div className="transactions">
                        <p className="transactions__text">Скачать детализацию счёта:</p>
                        <label className="transactions__label">с</label>
                        <input className="transactions__input" />
                        <label className="transactions__label">по</label>
                        <input className="transactions__input" />
                        <button className="transactions__button">Скачать отчёт</button>
                    </div>
                </div>
            </div>
        </section>
    </main>;
}
