import React, { useState } from "react";
import Register from "src/js/auth.blocks/register"
import { openSignal, closeSignal, ISignal } from "src/js/html.blocks/modal";

export default function Аdvantages(): React.ReactElement {
    const [registerSignal, onSignal] = useState<ISignal>(closeSignal());

    return <main className="main main_advantages">
        <section className="upper-block">
            <img className="gear__1" src={ require('src/images/gears/gear1.svg') } />
            <img className="gear__2" src={ require('src/images/gears/gear2.svg') } />
            <img className="gear__3" src={ require('src/images/gears/gear3.svg') } />
            <img className="gear__4" src={ require('src/images/gears/gear4.svg') } />
            <h1 className="page-title">возможности</h1>
            <p className="upper-block__description">
                Мой офис&nbsp;&mdash; это пакет услуг, позволяющий вам и&nbsp;вашим
                сотрудникам работать с&nbsp;программами 1С&nbsp;и&nbsp;Microsoft Office в&nbsp;любое время,
                любом месте и&nbsp;практически на&nbsp;любом устройстве.
                </p>
            <p className="upper-block__description">
                В&nbsp;пакет входят сервисы:
                </p>
        </section>
        <section id="accounting" className="advantages-section advantages-section_accounting">
            <img alt="бухгалтерия" className="advantages-section__image" src={ require('src/images/accounting.png') } />
            <div className="ac-block">
                <h2 className="ac-block__title">1с бухгалтерия</h2>
                <p className="ac-block__description">
                    &laquo;Бухгалтерия предприятия&raquo;&nbsp;&mdash;
                    это профессиональный инструмент бухгалтера, с&nbsp;помощью которого
                    можно вести бухгалтерский и&nbsp;налоговый учет, готовить и
                    &nbsp;сдавать обязательную отчетность.
                    </p>
                <p className="ac-block__description">
                    Понятный учет в&nbsp;соответствии с&nbsp;законодательством и&nbsp;потребностями бизнеса,
                    экономия времени при расчетах налогов, оформлении документов и&nbsp;хозяйственных операций,
                    поддержка пользователей в&nbsp;сочетании с&nbsp;высоким комфортом работы.
                    </p>
                <ul className="ac-block__list">
                    <ul className="ac-block__container">
                        <li className="ac-block__element">Складской учёт</li>
                        <li className="ac-block__element">Учёт торговых операций</li>
                    </ul>
                    <ul className="ac-block__container">
                        <li className="ac-block__element">Учёт заработной платы</li>
                        <li className="ac-block__element">Учёт производства</li>
                    </ul>
                    <li className="ac-block__element">Ведение учета нескольких организаций в одной базе</li>
                    <li className="ac-block__element">Поддержка разных систем налогообложения – ОСНО, УСН, ЕНВД</li>
                    <li className="ac-block__element">Учет основных средств и нематериальных активов</li>
                    <li className="ac-block__element">
                        Совместная работа с программами «Зарплата и управление
                        персоналом» и «Управление торговлей»
                        </li>
                </ul>
                <button className="ac-block__button">Запустить программу</button>
            </div>
        </section>
        <section id="salary" className="advantages-section advantages-section_left">
            <div className="ac-block ac-block_left">
                <h2 className="ac-block__title">1С Зарплата и управление персоналом</h2>
                <p className="ac-block__description">
                    1С:Зарплата и&nbsp;управление персоналом 8&Prime;&nbsp;&mdash;
                    предназначена для автоматизации задач,
                    связанные с&nbsp;расчетом заработной платы персонала и&nbsp;реализацией кадровой политики,
                    с&nbsp;учетом требований законодательства и&nbsp;реальной практики работы предприятий.
                    </p>
                <ul className="ac-block__list">
                    <li className="ac-block__element">Ведение кадрового учёта</li>
                    <li className="ac-block__element">Подготовка и сдача отчетности</li>
                    <li className="ac-block__element">Расчет заработной платы, больничных, отпусков и прочее</li>
                    <li className="ac-block__element">Исчисление налогов и взносов с фонда оплаты труда</li>
                    <li className="ac-block__element">Интеграция с Бухгалтерией предприятия</li>
                </ul>
                <button className="ac-block__button">Запустить программу</button>
            </div>
            <img alt="бухгалтерия" className="advantages-section__image_left" src={ require('src/images/salary.png') } />
        </section>
        <section id="trading" className="advantages-section advantages-section_control">
            <img alt="бухгалтерия" className="advantages-section__image" src={ require('src/images/control.png') } />
            <div className="ac-block">
                <h2 className="ac-block__title">1С Управление торговлей</h2>
                <p className="ac-block__description">
                    Комплексная автоматизация задач оперативного и&nbsp;управленческого учета,
                    анализа и&nbsp;планирования торговых операций.
                    Обеспечивает эффективное управление современным торговым предприятием.
                    </p>
                <p className="ac-block__description">
                    Программа поддерживает все основные виды торговли
                    (розничную, оптовую), что позволяет успешно внедрить
                    ее&nbsp;в&nbsp;большинстве торговых организаций
                    </p>
                <ul className="ac-block__list">
                    <li className="ac-block__element">Анализ товарооборота</li>
                    <li className="ac-block__element">Планирование закупок и поставок</li>
                    <li className="ac-block__element">Поддержка разных систем налогообложения – ОСНО, УСН, ЕНВД</li>
                    <li className="ac-block__element">Управленческий учет по торговому предприятию в целом.</li>
                    <li className="ac-block__element">Управление товародвижением и ценообразованием</li>
                    <li className="ac-block__element">Прием заказов и контроль их исполнения</li>
                    <li className="ac-block__element">Оптимизация складских запасов</li>
                </ul>
                <button className="ac-block__button">Запустить программу</button>
            </div>
        </section>
        <section id="firm" className="advantages-section advantages-section_left">
            <div className="ac-block ac-block_left">
                <h2 className="ac-block__title">1С управление нашей фирмой</h2>
                <p className="ac-block__description">
                    Программа для тех, кто торгует оптом,
                    через интернет-магазин или в&nbsp;розницу, ведет складской учет,
                    оказывает различные услуги, выполняет подрядные работы
                    или занимается мелкосерийным и&nbsp;позаказным производством.
                    </p>
                <ul className="ac-block__list">
                    <li className="ac-block__element">Складской учёт, закупки</li>
                    <li className="ac-block__element">Учёт торговых операций</li>
                    <li className="ac-block__element">Управленческие отчёты</li>
                    <li className="ac-block__element">CRM</li>
                    <li className="ac-block__element">Подготовка отчётности ИП</li>
                </ul>
                <button className="ac-block__button">Запустить программу</button>
            </div>
            <img alt="бухгалтерия" className="advantages-section__image_left" src={ require('src/images/firm.png') } />
        </section>
        <section id="garden" className="advantages-section advantages-section_sadovod">
            <img alt="бухгалтерия" className="advantages-section__image" src={ require('src/images/sadovodIMG.png') } />
            <div className="ac-block">
                <h2 className="ac-block__title">1С САДОВОД</h2>
                <p className="ac-block__description">
                    Автоматизация бухгалтерского и&nbsp;налогового учета,
                    включая подготовку обязательной (регламентированной)
                    отчетности в&nbsp;садоводческих некоммерческих товариществах (СНТ).
                    </p>
                <p className="ac-block__description">
                    Бухгалтерский и&nbsp;налоговый учет ведется в&nbsp;соответствии
                    с&nbsp;действующим законодательством РФ. В&nbsp;случае ведения
                    учета председателем СНТ программа не&nbsp;требует знания
                    бухгалтерского учета и&nbsp;проста в&nbsp;использовании.
                    </p>
                <ul className="ac-block__list">
                    <ul className="ac-block__container">
                        <li className="ac-block__element ac-block__element_no-margin">Учёт участков</li>
                        <li className="ac-block__element ac-block__element_no-margin">Взносы садоводов</li>
                    </ul>
                    <ul className="ac-block__container ac-block__container_garden">
                        <li className="ac-block__element ac-block__element_no-margin">Учёт электроэнергии и водоснабжения</li>
                        <li className="ac-block__element ac-block__element_no-margin">Учёт банковских и кассовых операций</li>
                    </ul>
                    <li className="ac-block__element">Учёт заработной платы и персонифицированный учёт</li>
                </ul>
                <button className="ac-block__button">Запустить программу</button>
            </div>
        </section>
        <section className="additional">
            <img className="additional__mark-left" src={ require('src/images/addLeft.svg') } />
            <img className="additional__mark-right" src={ require('src/images/addRight.svg') } />
            <h2 className="additional__title">дополнительные возможности</h2>
            <ul className="additional__grid">
                <li className="additional-card">
                    <img className="additional-card__icon" src={ require('src/images/contragent.svg') } />
                    <div className="additional-card__text-block">
                        <h3 className="additional-card__title">1с Контрагент</h3>
                        <p className="additional-card__description">
                            Автоматическое заполнение реквизитов контрагентов
                            в&nbsp;различных документах и&nbsp;быстрая проверка информации о&nbsp;контрагентах
                            </p>
                    </div>
                </li>
                <li className="additional-card">
                    <img className="additional-card__icon" src={ require('src/images/reporting.svg') } />
                    <div className="additional-card__text-block">
                        <h3 className="additional-card__title">1с Отчётность</h3>
                        <p className="additional-card__description">
                            Подготовка и&nbsp;сдача регламентированной отчетности
                            из&nbsp;программ &laquo;1С&raquo; во&nbsp;все контролирующие органы Российской Федерации
                            </p>
                    </div>
                </li>
                <li className="additional-card">
                    <img className="additional-card__icon" src={ require('src/images/spark.svg') } />
                    <div className="additional-card__text-block">
                        <h3 className="additional-card__title">1с спарк</h3>
                        <p className="additional-card__description">
                            Оценка надежности и&nbsp;мониторинг контрагентов в&nbsp;программах
                            1С&nbsp;для принятия взвешенных решений о&nbsp;
                                сотрудничестве и&nbsp;минимизации налоговых рисков</p>
                    </div>
                </li>
                <li className="additional-card">
                    <img className="additional-card__icon" src={ require('src/images/microsoft.svg') } />
                    <div className="additional-card__text-block">
                        <h3 className="additional-card__title">Microsoft office</h3>
                        <p className="additional-card__description">
                            Пакет офисных программ: Word, Excel, PowerPoint, Outlook
                            </p>
                    </div>
                </li>
            </ul>
            <button className="additional__button" onClick={ () => onSignal(openSignal()) }>начать работу</button>
            <Register signal={ registerSignal }></Register>
        </section>
    </main>;
}