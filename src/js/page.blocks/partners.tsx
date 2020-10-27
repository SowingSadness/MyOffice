import React from "react";

export default function Partners(): React.ReactElement {
    return <main className="main main_partners">
        <img className="partners__parts partners__partn1" src={ require('src/images/cloud_partners/partn1.svg') } />
        <img className="partners__parts partners__partn2" src={ require('src/images/cloud_partners/partn2.svg') } />
        <img className="partners__parts partners__partn3" src={ require('src/images/cloud_partners/partn3.svg') } />
        <img className="partners__parts partners__partn4" src={ require('src/images/cloud_partners/partn1.svg') } />
        <img className="partners__parts partners__partn5" src={ require('src/images/cloud_partners/partn4.svg') } />
        <img className="partners__parts partners__partn6" src={ require('src/images/cloud_partners/partn5.svg') } />
        <img className="partners__parts partners__partn7" src={ require('src/images/cloud_partners/partn3.svg') } />
        <img className="partners__parts partners__partn8" src={ require('src/images/cloud_partners/partn5.svg') } />
        <img className="partners__parts partners__partn9" src={ require('src/images/cloud_partners/partn3.svg') } />
        <img className="partners__parts partners__partn10" src={ require('src/images/cloud_partners/partn2.svg') } />
        <img className="partners__parts partners__partn11" src={ require('src/images/cloud_partners/partn3.svg') } />
        <img className="partners__parts partners__partn12" src={ require('src/images/cloud_partners/partn4.svg') } />
        <img className="partners__parts partners__partn13" src={ require('src/images/cloud_partners/partn6.svg') } />
        <img className="partners__parts partners__partn14" src={ require('src/images/cloud_partners/partn5.svg') } />
        <section className="partners">
            <div className="partners__upper-block">
                <div className="partners__left-text">
                    <h1 className="page-title page-title_support partners__title">Становитесь партнёром «Мой офис»!</h1>
                    <p className="partners__description">
                        Зарабатывайте вместе с&nbsp;нами.
                        Становитесь партнёром &laquo;Мой офис&raquo;
                        и&nbsp;получайте&nbsp;10% от&nbsp;каждого платежа клиентов, приведённых вами!
                        </p>
                    <button className="partners__button">Стать партнёром</button>
                </div>
                <img alt="калькулятор" className="partners__image-right" src={ require('src/images/partner.png') } />
            </div>
            <img alt="линия" className="partners__svg partners__line" src={ require('src/images/partnerLine.svg') } />
            <img className="partners__svg partners__rocket" src={ require('src/images/rocketPart.svg') } />
            <img className="partners__svg partners__one" src={ require('src/images/one.svg') } />
            <img className="partners__svg partners__two" src={ require('src/images/two.svg') } />
            <img className="partners__svg partners__three" src={ require('src/images/three.svg') } />
            <h2 className="partners__flow partners__start-sign">как начать зарабатывать?</h2>
            <div className="partners__flow partners__registration-block">
                <h3 className="partners__subtitle">Зарегистрируйтесь в программе</h3>
                <p className="partners__block-description">
                    Для регистрации в&nbsp;партнёрской программе вам достаточно оставить свой e-mail
                                                                                                    </p>
                <form className="partners__form">
                    <label>
                        <input className="partners__input" placeholder="Введите свой e-mail" />
                    </label>
                    <button className="partners__button">Отправить</button>
                </form>
                <p className="partners__block-description partners__block-description_mini">
                    Нажимая кнопку “Отправить” вы даёте согласие на обработку персональных данных в соответствии с
                        <a href="policy.html" className="partners__block-description partners__block-description_mini">
                        Политикой конфиденциальности.
                        </a>
                </p>
            </div>
            <div className="partners__flow partners__get-clients">
                <h3 className="partners__subtitle">приводите к нам клиентов</h3>
                <p className="partners__block-description">
                    Зарегистрировать нового клиента просто&nbsp;&mdash;
                    достаточно войти в&nbsp;свой личный кабинет и&nbsp;ввести его e-mail.
                    </p>
            </div>
            <div className="partners__flow partners__get-payments">
                <h3 className="partners__subtitle">получайте выплаты</h3>
                <p className="partners__block-description">
                    Система партнёрских начислений абсолютно проста.
                    Давайте попробуем рассчитать! Представим, что вы&nbsp;привели 3&nbsp;клиентов.
                    </p>
                <div className="payments-partners">
                    <div className="payments-partners__upper-block">
                        <p className="payments-partners__title">клиент</p>
                        <p className="payments-partners__title">ежемесячный платёж</p>
                        <p className="payments-partners__title">ваша выплата</p>
                    </div>
                    <div className="payments-partners__middle-block">
                        <div className="payments-partners__column">
                            <p className="payments-partners__number">Клиент 1</p>
                            <p className="payments-partners__number">Клиент 2</p>
                            <p className="payments-partners__number">Клиент 3</p>
                        </div>
                        <div className="payments-partners__column">
                            <p className="payments-partners__number">10 000 руб.</p>
                            <p className="payments-partners__number">16 000 руб.</p>
                            <p className="payments-partners__number">4 000 руб.</p>
                        </div>
                        <div className="payments-partners__column">
                            <p className="payments-partners__number">1 000 руб.</p>
                            <p className="payments-partners__number">1 600 руб.</p>
                            <p className="payments-partners__number">400 руб.</p>
                        </div>
                    </div>
                    <div className="payments-partners__upper-block payments-partners__upper-block_bottom">
                        <p className="payments-partners__title payments-partners__title_mini">
                            Итого ежемесячно вы будете получать:
                            </p>
                        <p className="payments-partners__title">3 000 руб.</p>
                    </div>
                </div>
            </div>
            <div className="partners__others">
                <h2 className="page-title page-title_mini">Другие варианты сотрудничества</h2>
                <p className="partners__block-description partners__block-description_center">
                    Сотрудничество с&nbsp;нами не&nbsp;ограничивается только привлечением клиентов.
                    Мы&nbsp;готовы рассматривать любые предложения и&nbsp;варианты сотрудничества.
                    Для того, чтобы стать партнёром&nbsp;&mdash; заполните форму ниже или
                    напишите на&nbsp;partners@moiofis.ru.
                    </p>
                <form className="partners__form">
                    <label>
                        <input className="partners__input partners__input_long" placeholder="Введите свой e-mail" />
                    </label>
                    <button className="partners__button partners__button__long">Отправить</button>
                </form>
                <p className="partners__block-description partners__block-description_mini">
                    Нажимая кнопку “Отправить” вы даёте согласие на обработку персональных данных в соответствии с
                    <a href="policy.html" className="partners__block-description partners__block-description_mini">
                    Политикой конфиденциальности.
                    </a>
                </p>
            </div>
        </section>
    </main>;
}
