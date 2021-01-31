import React from "react";

export default function Support(): React.ReactElement {
    return <main className="main main_index">
        <section className="support">
            <div className="support__upper-block">
                <div className="support__upper-left">
                    <h1 className="page-title_support page-title">чем мы можем вам помочь?</h1>
                    <p className="support__description">
                        Для того, чтобы вам было комфортно и&nbsp;просто пользоваться сервисом
                        &laquo;Мой Офис&raquo;, мы&nbsp;подготовили инструкции.
                        Если&nbsp;же вам не&nbsp;удалось найти ответ на&nbsp;свой вопрос&nbsp;&mdash;
                        специалисты технической поддержки всегда вам подскажут!
                    </p>
                </div>
                <img alt="картинка с компьютером" className="support__image" src={ require('src/images/support.png') } />
            </div>
            <div className="support__bottom-block">
                <div className="support__bottom-part">
                    <h2 className="support__bottom-title">инструкции</h2>
                    <ul className="support__bottom-list">
                        <li className="support__bottom-element"><a className="support__bottom-link" href="instructions.html">Работа в личном кабинете</a></li>
                        <li className="support__bottom-element"><a className="support__bottom-link support__bottom-link_bold" href="#">Создание новой базы 1С</a></li>
                        <li className="support__bottom-element"><a className="support__bottom-link" href="#">Загрузка базы 1С в облако</a></li>
                        <li className="support__bottom-element"><a className="support__bottom-link" href="#">Обновление баз 1С</a></li>
                        <li className="support__bottom-element"><a className="support__bottom-link" href="#">Подключение торгового оборудования</a></li>
                    </ul>
                </div>
                <div className="support__bottom-part">
                    <h2 className="support__bottom-title">техническая поддержка</h2>
                    <p className="support__bottom-text">
                        Если у&nbsp;вас остались вопросы&nbsp;&mdash;
                        наши специалисты технической поддержки всегда готовы прийти вам на&nbsp;помощь!
                    </p>
                    <h3 className="support__bottom-subtitle">Часы работы тех.поддержки:</h3>
                    <p className="support__bottom-text">9:00 до&nbsp;18:00 по&nbsp;московскому времени</p>
                    <h3 className="support__bottom-subtitle support__bottom-subtitle_message">Связь с поддержкой</h3>
                    <p className="support__bottom-text">
                        Для обращения в&nbsp;техническую поддержку достаточно заполнить форму.
                        Мы&nbsp;ответим в&nbsp;течение &#8470; минут в&nbsp;рабочее время.
                    </p>
                    {/* <button className="support__bottom-button">Связаться с поддержкой</button> */}
                    <p className="support__bottom-text">Также вы можете скачать программу удалённой поддержки:</p>
                    <a href="https://anydesk.com/ru/downloads" className="support__bottom-button support__bottom-button_download">
                        Скачать Anydesk
                    </a>
                </div>
            </div>
        </section>
    </main>;
}
