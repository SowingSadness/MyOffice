import React from "react";

export default function Questions(): React.ReactElement {
    return <main className="main main_questions">
        <section className="questions">
            <img className="questions__qs1" src={ require('src/images/qs/qs1.svg') } />
            <img className="questions__qs2" src={ require('src/images/qs/qs2.svg') } />
            <img className="questions__qs3" src={ require('src/images/qs/qs3.svg') } />
            <img className="questions__qs4" src={ require('src/images/qs/qs4.svg') } />
            <img className="questions__qs5" src={ require('src/images/qs/qs5.svg') } />
            <img className="questions__qs6" src={ require('src/images/qs/qs6.svg') } />
            <h1 className="page-title">Часто-задаваемые вопросы</h1>
            <p className="questions__description">
                Мы&nbsp;собрали ответы на&nbsp;самые распространённые вопросы о&nbsp;сервисе &laquo;Мой Офис&raquo;.
                Если вы&nbsp;не&nbsp;нашли ответ на&nbsp;свой вопрос&nbsp;&mdash;
                наша техническая поддержка с&nbsp;радостью вам поможет.
                Для обращения достаточно написать на&nbsp;support@moiofis.ru
                </p>
            <div className="questions__block">
                <h2 className="questions__block-title">Общие вопросы</h2>
                <div className="accordion">
                    <div className="accordion__panel">
                        <h3 className="accordion__title">1. Что такое «Мой Офис»?</h3>
                    </div>
                    <div className="accordion__text-block">
                        <p className="accordion__text">
                            В&nbsp;современном мире, где царит жесткая конкуренция, компаниям необходимы технологии,
                            которые&nbsp;бы позволяли гибко и&nbsp;экономически выгодно повышать эффективность работы.
                            &laquo;Мой Офис&raquo; дает вашему бизнесу такие технологии.
                            Наш сервис помогает экономить ваши время и&nbsp;средства за&nbsp;счет:
                            а) Аренды программных продуктов, а&nbsp;не&nbsp;их&nbsp;покупки в&nbsp;собственность;&nbsp;
                            б) Получения готовой информационной системы,
                            а&nbsp;не&nbsp;её&nbsp;создания с&nbsp;&laquo;нуля&raquo;;
                            в) Использования полнофункциональных
                            и&nbsp;общеизвестных программных продуктов фирм 1С&nbsp;и&nbsp;Microsoft.
                            </p>
                        <p className="accordion__text">
                            Иными словами, &laquo;Мой Офис&raquo; дает вам возможность заниматься бизнесом,
                            а&nbsp;не&nbsp;его обслуживанием.
                            </p>
                    </div>
                </div>
                <div className="accordion">
                    <div className="accordion__panel">
                        <h3 className="accordion__title">2. Что такое «облачные технологии»?</h3>
                    </div>
                    <div className="accordion__text-block">
                        <p className="accordion__text">
                            В&nbsp;современном мире, где царит жесткая конкуренция, компаниям необходимы технологии,
                            которые&nbsp;бы позволяли гибко и&nbsp;экономически выгодно повышать эффективность работы.
                            &laquo;Мой Офис&raquo; дает вашему бизнесу такие технологии.
                            Наш сервис помогает экономить ваши время и&nbsp;средства за&nbsp;счет:
                            а) Аренды программных продуктов, а&nbsp;не&nbsp;их&nbsp;покупки в&nbsp;собственность;&nbsp;
                            б) Получения готовой информационной системы,
                            а&nbsp;не&nbsp;её&nbsp;создания с&nbsp;&laquo;нуля&raquo;;
                            в) Использования полнофункциональных
                            и&nbsp;общеизвестных программных продуктов фирм 1С&nbsp;и&nbsp;Microsoft.
                            Иными словами, &laquo;Мой Офис&raquo; дает вам возможность заниматься бизнесом,
                            а&nbsp;не&nbsp;его обслуживанием.
                            </p>
                    </div>
                </div>
                <div className="accordion">
                    <div className="accordion__panel">
                        <h3 className="accordion__title">3. Как «Мой Офис» поможет вашему бизнесу?</h3>
                    </div>
                    <div className="accordion__text-block">
                        <p className="accordion__text">
                            В&nbsp;современном мире, где царит жесткая конкуренция, компаниям необходимы технологии,
                            которые&nbsp;бы позволяли гибко и&nbsp;экономически выгодно повышать эффективность работы.
                            &laquo;Мой Офис&raquo; дает вашему бизнесу такие технологии.
                            Наш сервис помогает экономить ваши время и&nbsp;средства за&nbsp;счет:
                            а) Аренды программных продуктов, а&nbsp;не&nbsp;их&nbsp;покупки в&nbsp;собственность;&nbsp;
                            б) Получения готовой информационной системы,
                            а&nbsp;не&nbsp;её&nbsp;создания с&nbsp;&laquo;нуля&raquo;;
                            в) Использования полнофункциональных
                            и&nbsp;общеизвестных программных продуктов фирм 1С&nbsp;и&nbsp;Microsoft.
                            Иными словами, &laquo;Мой Офис&raquo; дает вам возможность заниматься бизнесом,
                            а&nbsp;не&nbsp;его обслуживанием.
                            </p>
                    </div>
                </div>
            </div>
            <div className="questions__block">
                <h2 className="questions__block-title">Безопасность</h2>
                <div className="accordion">
                    <div className="accordion__panel">
                        <h3 className="accordion__title">1. Мои данные будут храниться на ваших серверах в интернете?</h3>
                    </div>
                    <div className="accordion__text-block">
                        <p className="accordion__text">
                            В&nbsp;современном мире, где царит жесткая конкуренция, компаниям необходимы технологии,
                            которые&nbsp;бы позволяли гибко и&nbsp;экономически выгодно повышать эффективность работы.
                            &laquo;Мой Офис&raquo; дает вашему бизнесу такие технологии.
                            Наш сервис помогает экономить ваши время и&nbsp;средства за&nbsp;счет:
                            а) Аренды программных продуктов, а&nbsp;не&nbsp;их&nbsp;покупки в&nbsp;собственность;&nbsp;
                            б) Получения готовой информационной системы,
                            а&nbsp;не&nbsp;её&nbsp;создания с&nbsp;&laquo;нуля&raquo;;
                            в) Использования полнофункциональных
                            и&nbsp;общеизвестных программных продуктов фирм 1С&nbsp;и&nbsp;Microsoft.
                            </p>
                        <p className="accordion__text">
                            Иными словами, &laquo;Мой Офис&raquo; дает вам возможность заниматься бизнесом,
                            а&nbsp;не&nbsp;его обслуживанием.
                            </p>
                    </div>
                </div>
                <div className="accordion">
                    <div className="accordion__panel">
                        <h3 className="accordion__title">2. Безопасно ли хранить данные в интернете?</h3>
                    </div>
                    <div className="accordion__text-block">
                        <p className="accordion__text">
                            В&nbsp;современном мире, где царит жесткая конкуренция, компаниям необходимы технологии,
                            которые&nbsp;бы позволяли гибко и&nbsp;экономически выгодно повышать эффективность работы.
                            &laquo;Мой Офис&raquo; дает вашему бизнесу такие технологии.
                            Наш сервис помогает экономить ваши время и&nbsp;средства за&nbsp;счет:
                            а) Аренды программных продуктов, а&nbsp;не&nbsp;их&nbsp;покупки в&nbsp;собственность;&nbsp;
                            б) Получения готовой информационной системы,
                            а&nbsp;не&nbsp;её&nbsp;создания с&nbsp;&laquo;нуля&raquo;;
                            в) Использования полнофункциональных
                            и&nbsp;общеизвестных программных продуктов фирм 1С&nbsp;и&nbsp;Microsoft.
                            Иными словами, &laquo;Мой Офис&raquo; дает вам возможность заниматься бизнесом,
                            а&nbsp;не&nbsp;его обслуживанием.
                            </p>
                    </div>
                </div>
                <div className="accordion">
                    <div className="accordion__panel">
                        <h3 className="accordion__title">3. Нет интернета – я не могу работать?</h3>
                    </div>
                    <div className="accordion__text-block">
                        <p className="accordion__text">
                            В&nbsp;современном мире, где царит жесткая конкуренция, компаниям необходимы технологии,
                            которые&nbsp;бы позволяли гибко и&nbsp;экономически выгодно повышать эффективность работы.
                            &laquo;Мой Офис&raquo; дает вашему бизнесу такие технологии.
                            Наш сервис помогает экономить ваши время и&nbsp;средства за&nbsp;счет:
                            а) Аренды программных продуктов, а&nbsp;не&nbsp;их&nbsp;покупки в&nbsp;собственность;&nbsp;
                            б) Получения готовой информационной системы,
                            а&nbsp;не&nbsp;её&nbsp;создания с&nbsp;&laquo;нуля&raquo;;
                            в) Использования полнофункциональных
                            и&nbsp;общеизвестных программных продуктов фирм 1С&nbsp;и&nbsp;Microsoft.
                            Иными словами, &laquo;Мой Офис&raquo; дает вам возможность заниматься бизнесом,
                            а&nbsp;не&nbsp;его обслуживанием.
                            </p>
                    </div>
                </div>
                <div className="accordion">
                    <div className="accordion__panel">
                        <h3 className="accordion__title">
                            4. Если я начну использовать ваш сервис,
                            то буду навсегда привязан к вам?
                            </h3>
                    </div>
                    <div className="accordion__text-block">
                        <p className="accordion__text">
                            В&nbsp;современном мире, где царит жесткая конкуренция, компаниям необходимы технологии,
                            которые&nbsp;бы позволяли гибко и&nbsp;экономически выгодно повышать эффективность работы.
                            &laquo;Мой Офис&raquo; дает вашему бизнесу такие технологии.
                            Наш сервис помогает экономить ваши время и&nbsp;средства за&nbsp;счет:
                            а) Аренды программных продуктов, а&nbsp;не&nbsp;их&nbsp;покупки в&nbsp;собственность;&nbsp;
                            б) Получения готовой информационной системы,
                            а&nbsp;не&nbsp;её&nbsp;создания с&nbsp;&laquo;нуля&raquo;;
                            в) Использования полнофункциональных
                            и&nbsp;общеизвестных программных продуктов фирм 1С&nbsp;и&nbsp;Microsoft.
                            Иными словами, &laquo;Мой Офис&raquo; дает вам возможность заниматься бизнесом,
                            а&nbsp;не&nbsp;его обслуживанием.
                            </p>
                    </div>
                </div>
            </div>
            <div className="questions__block">
                <h2 className="questions__block-title">Технические вопросы</h2>
                <div className="accordion">
                    <div className="accordion__panel">
                        <h3 className="accordion__title">1. Сложно ли подключиться к сервису и начать им пользоваться?</h3>
                    </div>
                    <div className="accordion__text-block">
                        <p className="accordion__text">
                            В&nbsp;современном мире, где царит жесткая конкуренция, компаниям необходимы технологии,
                            которые&nbsp;бы позволяли гибко и&nbsp;экономически выгодно повышать эффективность работы.
                            &laquo;Мой Офис&raquo; дает вашему бизнесу такие технологии.
                            Наш сервис помогает экономить ваши время и&nbsp;средства за&nbsp;счет:
                            а) Аренды программных продуктов, а&nbsp;не&nbsp;их&nbsp;покупки в&nbsp;собственность;&nbsp;
                            б) Получения готовой информационной системы,
                            а&nbsp;не&nbsp;её&nbsp;создания с&nbsp;&laquo;нуля&raquo;;
                            в) Использования полнофункциональных
                            и&nbsp;общеизвестных программных продуктов фирм 1С&nbsp;и&nbsp;Microsoft.
                            </p>
                        <p className="accordion__text">
                            Иными словами, &laquo;Мой Офис&raquo; дает вам возможность заниматься бизнесом,
                            а&nbsp;не&nbsp;его обслуживанием.
                            </p>
                    </div>
                </div>
                <div className="accordion">
                    <div className="accordion__panel">
                        <h3 className="accordion__title">2. Смогу ли я печатать документы на своём принтере?</h3>
                    </div>
                    <div className="accordion__text-block">
                        <p className="accordion__text">
                            В&nbsp;современном мире, где царит жесткая конкуренция, компаниям необходимы технологии,
                            которые&nbsp;бы позволяли гибко и&nbsp;экономически выгодно повышать эффективность работы.
                            &laquo;Мой Офис&raquo; дает вашему бизнесу такие технологии.
                            Наш сервис помогает экономить ваши время и&nbsp;средства за&nbsp;счет:
                            а) Аренды программных продуктов, а&nbsp;не&nbsp;их&nbsp;покупки в&nbsp;собственность;&nbsp;
                            б) Получения готовой информационной системы,
                            а&nbsp;не&nbsp;её&nbsp;создания с&nbsp;&laquo;нуля&raquo;;
                            в) Использования полнофункциональных
                            и&nbsp;общеизвестных программных продуктов фирм 1С&nbsp;и&nbsp;Microsoft.
                            Иными словами, &laquo;Мой Офис&raquo; дает вам возможность заниматься бизнесом,
                            а&nbsp;не&nbsp;его обслуживанием.
                            </p>
                    </div>
                </div>
                <div className="accordion">
                    <div className="accordion__panel">
                        <h3 className="accordion__title">
                            3. Нужно ли мне устанавливать на свой компьютер какое-либо программное обеспечение?
                            </h3>
                    </div>
                    <div className="accordion__text-block">
                        <p className="accordion__text">
                            В&nbsp;современном мире, где царит жесткая конкуренция, компаниям необходимы технологии,
                            которые&nbsp;бы позволяли гибко и&nbsp;экономически выгодно повышать эффективность работы.
                            &laquo;Мой Офис&raquo; дает вашему бизнесу такие технологии.
                            Наш сервис помогает экономить ваши время и&nbsp;средства за&nbsp;счет:
                            а) Аренды программных продуктов, а&nbsp;не&nbsp;их&nbsp;покупки в&nbsp;собственность;&nbsp;
                            б) Получения готовой информационной системы,
                            а&nbsp;не&nbsp;её&nbsp;создания с&nbsp;&laquo;нуля&raquo;;
                            в) Использования полнофункциональных
                            и&nbsp;общеизвестных программных продуктов фирм 1С&nbsp;и&nbsp;Microsoft.
                            Иными словами, &laquo;Мой Офис&raquo; дает вам возможность заниматься бизнесом,
                            а&nbsp;не&nbsp;его обслуживанием.
                            </p>
                    </div>
                </div>
                <div className="accordion">
                    <div className="accordion__panel">
                        <h3 className="accordion__title">
                            4. Если я начну использовать ваш сервис, то буду навсегда привязан к вам?
                            </h3>
                    </div>
                    <div className="accordion__text-block">
                        <p className="accordion__text">
                            В&nbsp;современном мире, где царит жесткая конкуренция, компаниям необходимы технологии,
                            которые&nbsp;бы позволяли гибко и&nbsp;экономически выгодно повышать эффективность работы.
                            &laquo;Мой Офис&raquo; дает вашему бизнесу такие технологии.
                            Наш сервис помогает экономить ваши время и&nbsp;средства за&nbsp;счет:
                            а) Аренды программных продуктов, а&nbsp;не&nbsp;их&nbsp;покупки в&nbsp;собственность;&nbsp;
                            б) Получения готовой информационной системы,
                            а&nbsp;не&nbsp;её&nbsp;создания с&nbsp;&laquo;нуля&raquo;;
                            в) Использования полнофункциональных
                            и&nbsp;общеизвестных программных продуктов фирм 1С&nbsp;и&nbsp;Microsoft.
                            Иными словами, &laquo;Мой Офис&raquo; дает вам возможность заниматься бизнесом,
                            а&nbsp;не&nbsp;его обслуживанием.
                            </p>
                    </div>
                </div>
            </div>
            <div className="questions__block">
                <h2 className="questions__block-title">Оплата</h2>
                <div className="accordion">
                    <div className="accordion__panel">
                        <h3 className="accordion__title">1. Как я могу оплатить услуги?</h3>
                    </div>
                    <div className="accordion__text-block">
                        <p className="accordion__text">
                            В&nbsp;современном мире, где царит жесткая конкуренция, компаниям необходимы технологии,
                            которые&nbsp;бы позволяли гибко и&nbsp;экономически выгодно повышать эффективность работы.
                            &laquo;Мой Офис&raquo; дает вашему бизнесу такие технологии.
                            Наш сервис помогает экономить ваши время и&nbsp;средства за&nbsp;счет:
                            а) Аренды программных продуктов, а&nbsp;не&nbsp;их&nbsp;покупки в&nbsp;собственность;&nbsp;
                            б) Получения готовой информационной системы,
                            а&nbsp;не&nbsp;её&nbsp;создания с&nbsp;&laquo;нуля&raquo;;
                            в) Использования полнофункциональных
                            и&nbsp;общеизвестных программных продуктов фирм 1С&nbsp;и&nbsp;Microsoft.
                            </p>
                        <p className="accordion__text">
                            Иными словами, &laquo;Мой Офис&raquo; дает вам возможность заниматься бизнесом,
                            а&nbsp;не&nbsp;его обслуживанием.
                            </p>
                    </div>
                </div>
            </div>
        </section>
    </main>;
}
