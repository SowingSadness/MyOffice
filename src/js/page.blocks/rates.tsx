import React, { useState } from "react";
import Register from "src/js/auth.blocks/register";
import { openSignal, closeSignal, ISignal } from "src/js/html.blocks/modal";

export default function Rates(): React.ReactElement {
    const [registerSignal, onSignal] = useState<ISignal>(closeSignal());

    return <main className="main main_rates">
        <img className="rates__parts rates__part1" src={ require('src/images/cloud_rates/rate1.svg') } />
        <img className="rates__parts rates__part2" src={ require('src/images/cloud_rates/rate2.svg') } />
        <img className="rates__parts rates__part3" src={ require('src/images/cloud_rates/rate3.svg') } />
        <img className="rates__parts rates__part4" src={ require('src/images/cloud_rates/rate4.svg') } />
        <img className="rates__parts rates__part5" src={ require('src/images/cloud_rates/rate4.svg') } />
        <img className="rates__parts rates__part6" src={ require('src/images/cloud_rates/rate5.svg') } />
        <img className="rates__parts rates__part7" src={ require('src/images/cloud_rates/rate4.svg') } />
        <img className="rates__parts rates__part8" src={ require('src/images/cloud_rates/rate4.svg') } />
        <img className="rates__parts rates__part9" src={ require('src/images/cloud_rates/rate6.svg') } />
        <img className="rates__parts rates__part10" src={ require('src/images/cloud_rates/rate7.svg') } />
        <img className="rates__parts rates__part11" src={ require('src/images/cloud_rates/rate8.svg') } />
        <img className="rates__parts rates__part12" src={ require('src/images/cloud_rates/rate4.svg') } />
        <img className="rates__parts rates__part13" src={ require('src/images/cloud_rates/rate2.svg') } />
        <img className="rates__parts rates__part14" src={ require('src/images/cloud_rates/rate2.svg') } />
        <img className="rates__parts rates__part15" src={ require('src/images/cloud_rates/rate2.svg') } />
        <img className="rates__parts rates__part16" src={ require('src/images/cloud_rates/rate9.svg') } />
        <section className="rates">
            <Register signal={ registerSignal }></Register>
            <h1 className="page-title" > Тарифы для вашего бизнеса </h1>
            <p className="rates__page-description" > Выбирайте лучшее решение для ваших бизнес - задач.</p>
            <div className="rates__prices-block" >
                <div tabIndex={ 0 } className="price-block" >
                    <h2 className="price-block__title" > старт </h2>
                    <div className="price-block__price" >
                        <p className="price-block__amount" > 1 050 </p>
                        <p className="price-block__amount price-block__amount_mini" > руб.</p>
                    </div>
                    <p className="price-block__description" > За 1 пользователя в месяц </p>
                    <p className="price-block__description" > Количество пользователей: </p>
                    <p className="price-block__amount price-block__amount_mid" > 1–2 </p>
                    <button className="rates__to-plug" onClick={ () => onSignal(openSignal()) }> Подключить </button>
                </div>
                <div tabIndex={ 0 } className="price-block" >
                    <h2 className="price-block__title" > оптимальный </h2>
                    <div className="price-block__price" >
                        <p className="price-block__amount" > 990 </p>
                        <p className="price-block__amount price-block__amount_mini" > руб.</p>
                    </div>
                    <p className="price-block__description" > За 1 пользователя в месяц </p>
                    <p className="price-block__description" > Количество пользователей: </p>
                    <p className="price-block__amount price-block__amount_mid" > 3 - 7 </p>
                    <button className="rates__to-plug" onClick={ () => onSignal(openSignal()) }> Подключить </button>
                </div>
                <div tabIndex={ 0 } className="price-block" >
                    <h2 className="price-block__title" > профессионал </h2>
                    <div className="price-block__price" >
                        <p className="price-block__amount" > 960 </p>
                        <p className="price-block__amount price-block__amount_mini" > руб.</p>
                    </div>
                    <p className="price-block__description" > За 1 пользователя в месяц </p>
                    <p className="price-block__description" > Количество пользователей: </p>
                    <p className="price-block__amount price-block__amount_mid" > более 8 </p>
                    <button className="rates__to-plug" onClick={ () => onSignal(openSignal()) }> Подключить </button>
                </div>
            </div>
        </section>
        <section className="include-block" >
            <h2 className="page-title page-title_very-mini" > Сервис «Мой офис» включает: </h2>
            <div className="include-block__lists" >
                <ul className="include-block__list" >
                    <li className="include-block__element include-block__element_w-icon" >
                        Использование пакета программ:
                            <div className="include-block__container" >
                            <p className="include-block__element" >&bull; 1С: Бухгалтерия предприятия </p>
                            <p className="include-block__element" >&bull; 1С: Зарплата и &nbsp; управление персоналом </p>
                            <p className="include-block__element" >&bull; 1С: Управление торговлей </p>
                            <p className="include-block__element" >&bull; 1С: Управление небольшой фирмой </p>
                            <p className="include-block__element" >&bull; 1С: Садовод </p>
                        </div>
                    </li>
                </ul>
                < ul className="include-block__list" >
                    <li className="include-block__element include-block__element_w-icon" > Регулярное обновление программ 1С </li>
                    < li className="include-block__element include-block__element_w-icon" > Любое количество баз данных 1С </li>
                    < li className="include-block__element include-block__element_w-icon" > Дисковое пространство 25 Гб </li>
                    < li className="include-block__element include-block__element_w-icon" > Учёт любого числа организаций </li>
                </ul>
            </div>
        </section>
        <section className="discounts">
            <h2 className="page-title page-title_mini" > Скидки при оплате от трёх месяцев </h2>
            <p className="rates__page-description" >
                Оплатите использование сервиса &laquo; Мой офис &raquo;
                на &nbsp; 3 &nbsp; и &nbsp; более месяца единоразово на &nbsp; любом тарифе и &nbsp; получите скидку!
                </p>
            <div className="discounts__under-block">
                <div className="discounts__left-block" >
                    <div className="discounts__percents" >
                        <p className="discounts__percent-number" > -5 % </p>
                        <p className="discounts__percent-number" > -10 % </p>
                        <p className="discounts__percent-number" > -15 % </p>
                    </div>
                    <img className="discounts__line" src={ require('src/images/lineDisc.svg') } />
                    <div className="discounts__percents-text" >
                        <p className="discounts__description" > При единоразовой оплате на &nbsp; 3 &nbsp; месяца </p>
                        <p className="discounts__description" > При единоразовой оплате на &nbsp; 6 &nbsp; месяца </p>
                        <p className="discounts__description" > При единоразовой оплате на &nbsp; 1 &nbsp; год </p>
                    </div>
                </div>
                <img alt="кошелек и небо" className="discounts__image" src={ require('src/images/discounts.png') } />
            </div>
            <div className="rates__calculate" >
                <img alt="калькулятор" className="rates__calc-image" src={ require('src/images/calc.png') } />
                <div className="calculate-block" >
                    <h2 className="calculate-block__title" >
                        Рассчитайте стоимость сервиса &laquo; Мой офис &raquo; для вашей компании
                                                                            </h2>
                    <div className="calculate-block__row" >
                        <p className="calculate-block__text" > Сколько сотрудников вы планируете подключить ? </p>
                        <div className="calculate-block__count-block" >
                            <div className="calculate-block__minus calculate-block__minus_up" >
                                <img className="calculate-block__minus-icon" src={ require('src/images/lineMinus.svg') } />
                            </div>
                            <p className="calculate-block__number" > 0 </p>
                            <div className="calculate-block__minus calculate-block__minus_plus-up" >
                                <img className="calculate-block__minus-icon" src={ require('src/images/lineMinus.svg') } />
                                <img className="calculate-block__minus-icon_plus" src={ require('src/images/lineMinus.svg') } />
                            </div>
                        </div>
                    </div>
                    <div className="calculate-block__row" >
                        <p className="calculate-block__text" > Сколько месяцев работы вы хотите оплатить ? </p>
                        <div className="calculate-block__count-block calculate-block__count-block-down" >
                            <div className="calculate-block__minus calculate-block__minus_down" >
                                <img className="calculate-block__minus-icon" src={ require('src/images/lineMinus.svg') } />
                            </div>
                            <p className="calculate-block__number calculate-block__number_down" > 0 </p>
                            <div className="calculate-block__minus calculate-block__minus_plus-down" >
                                <img className="calculate-block__minus-icon" src={ require('src/images/lineMinus.svg') } />
                                <img className="calculate-block__minus-icon_plus" src={ require('src/images/lineMinus.svg') } />
                            </div>
                        </div>
                    </div>
                    <div className="calculate-block__bottom-block" >
                        <div className="calculate-block__row-bottom" >
                            <p className="calculate-block__text calculate-block__text_bottom" > Стоимость: </p>
                            <p className="calculate-block__text calculate-block__text_bottom calculate-block__text_cost" >
                                11 880 руб.
                                    </p>
                        </div>
                        <div className="calculate-block__row-bottom" >
                            <p className="calculate-block__text calculate-block__text_bottom" > Скидка: </p>
                            <p className="calculate-block__text calculate-block__text_bottom calculate-block__text_discount" >
                                - 1 188 руб.
                                    </p>
                        </div>
                        <div className="calculate-block__row-bottom" >
                            <p className="calculate-block__text calculate-block__text_bold" > итоговая стоимость: </p>
                            <p className="calculate-block__text calculate-block__text_bottom calculate-block__text_total" >
                                10 692 руб.
                                    </p>
                        </div>
                    </div>
                    <button className="rates__to-plug calculate-block__button" > Подключить </button>
                </div>
            </div>
        </section>
        <section className="rates__add-services" >
            <h2 className="page-title page-title_mini" > дополнительные услуги </h2>
            <p className="rates__page-description" >
                Вы &nbsp; можете расширить функционал и &nbsp; подключить дополнительные услуги
                                                                                </p>
            <div className="add-services" >
                <div className="add-services__column-1" >
                    <div className="add-services__row" >
                        <img alt="лого" className="add-services__logo" src={ require('src/images/sparkAdd.svg') } />
                        <p className="add-services__brand" > 1С Спарк </p>
                        <p className="add-services__price-mobile" > 3 900 руб./ год </p>
                    </div>
                    <div className="add-services__row" >
                        <img alt="лого" className="add-services__logo" src={ require('src/images/contrAdd.svg') } />
                        <p className="add-services__brand" > 1С Контрагент </p>
                        <p className="add-services__price-mobile" > 3 900 руб./ год </p>
                    </div>
                    <div className="add-services__row" >
                        <img alt="лого" className="add-services__logo" src={ require('src/images/reportAdd.svg') } />
                        <p className="add-services__brand" > 1С Отчётность </p>
                        <p className="add-services__price-mobile" > 3 900 руб./ год </p>
                    </div>
                    <div className="add-services__row" >
                        <img alt="лого" className="add-services__logo" src={ require('src/images/micrAdd.svg') } />
                        <p className="add-services__brand" > Microsoft office </p>
                        <p className="add-services__price-mobile" > 3 900 руб./ год </p>
                    </div>
                    <div className="add-services__row" >
                        <img alt="лого" className="add-services__logo" src={ require('src/images/serverAdd.svg') } />
                        <p className="add-services__brand" > Дополнительное дисковое пространство(за &nbsp; каждые 5 &nbsp; Гб)</p>
                        <p className="add-services__price-mobile" > 3 900 руб./ год </p>
                    </div>
                </div>
                <div className="add-services__column-2" >
                    <p className="add-services__price" > 3 900 руб./ год </p>
                    <p className="add-services__price" > 4 800 руб./ год </p>
                    <p className="add-services__price" > 3 900 руб./ год </p>
                    <p className="add-services__price" > 650 руб./ мес </p>
                    <p className="add-services__price" > 95 руб./ мес </p>
                </div>
            </div>
        </section>
        <section className="rates__to-pay" >
            <h2 className="page-title page-title_mini" > как оплатить сервис ? </h2>
            <p className="rates__page-description" >
                Вы &nbsp; можете выбрать наиболее удобный способ оплаты.
                    </p>
            <div className="additional-card additional-card_rates" >
                <img className="additional-card__icon" src={ require('src/images/bankTrans.svg') } />
                <div className="additional-card__text-block" >
                    <h3 className="additional-card__title" > БанковскИЙ ПЕРЕВОД </h3>
                    <p className="additional-card__description" >
                        На &nbsp; вашу электронную почту мы &nbsp; вышлем счёт на &nbsp; оплату.
                        После оплаты счёта вы &nbsp; можете использовать сервис.
                            </p>
                </div>
            </div>
            <div className="additional-card additional-card_rates" >
                <img className="additional-card__icon" src={ require('src/images/cardTrans.svg') } />
                <div className="additional-card__text-block" >
                    <h3 className="additional-card__title" > Банковской картой </h3>
                    <p className="additional-card__description" >
                        Вы &nbsp; можете оплатить заказ прямо в &nbsp; момент оформления заказа на &nbsp; сайте.
                        Онлайн оплата производится с &nbsp; помощью платежных систем Visa
                        или MasterCard.Платежи обрабатываются процессинговым центром PayOnline System
        </p>
                </div>
            </div>
        </section>
        <section className="rates__terms" >
            <h2 className="page-title page-title_mini" > Условия использования сервиса </h2>
            < ul className="rates__terms-bottom" >
                <li className="rates__terms-column" >
                    <h3 className="rates__terms-title" > Возврат </h3>
                    <p className="rates__terms-text" >
                        В &nbsp; случае отказа от &nbsp; пользования сервисом
                        &laquo; Мой Офис &raquo; мы &nbsp; вернем вам неиспользованные денежные средства.
                            </p>
                    <p className="rates__terms-text" >
                        Для возврата необходимо написать заявление в &nbsp; свободной
                        форме и &nbsp; отправить на &nbsp; электронный адрес: support@moiofis.ru.
                            </p>
                </li>
                < li className="rates__terms-column" >
                    <h3 className="rates__terms-title" > публичная оферта </h3>
                    < a href="#" className="rates__terms-text" >
                        Скачать публичную оферту на оказание услуг
                        </a>
                </li>
                < li className="rates__terms-column" >
                    <h3 className="rates__terms-title" > договор </h3>
                    < a href="#" className="rates__terms-text rates__terms-text_bold" >
                        Скачать договор
                                        </a>
                </li>
            </ul>
        </section>
    </main>;
}