import React from "react";
import * as auth from "../auth.blocks/auth";
import LK from "./lk/lk";

const emptyData = {
    "login": "Buh1",
    "name": "Иванов Вася",
    "email": "Buh1@v.ru",
    "phone": "+79600368214",
    "1CSupportLogin": "fedya",
    "1CSupportPass": "232332f",
    "tariffName": "Cтарт",
    "balance": "950.30 руб.",
    "dailyPaid": "25.00 руб.",
    "users": 2,
    "DiskSpace": "25 ГБ",
    "paidUntil": "21.10.2020",
    "addServices": [
        {
            "service": "1С Спарк",
            "paidUntil": "31.12.2020"
        },
        {
            "service": "1С Контрагент",
            "paidUntil": "31.12.2020"
        }
    ],
    "diskSpace": {
        "busy": 21,
        "total": 25,
        "add": 0,
        "price": 95
    },
    "activeUsers": [
        {
            "name": "Иванов Вася",
            "login": "user1@moiofis",
            "email": "vasy@mail.ru"
        },
        {
            "name": "Гоша",
            "login": "user2@moiofis",
            "email": "goga@mail.ru"
        }
    ],
    "unactiveUsers": [
        {
            "name": "Гаврило",
            "login": "user3@moiofis",
            "email": "gavrik@mail.ru"
        },
        {
            "name": "Измайлов",
            "login": "user4@moiofis",
            "email": "uzma@mail.ru"
        }
    ],
    "todayTransactions": [
        {
            "dateTime": "01.10.2020 01:00",
            "desc": "Внесён платёж за май",
            "type": "+",
            "summ": "120.00 руб."
        },
        {
            "dateTime": "01.10.2020 04:05",
            "desc": "Оплата за пользователя user1@moiofis",
            "type": "-",
            "summ": "35.00 руб."
        }
    ],
    "payTariff": [
        {
            "period": "1 месяц",
            "summ": 1000,
            "discount": 0,
            "summForPay": 1000
        },
        {
            "period": "3 месяца",
            "summ": 3000,
            "discount": 200,
            "summForPay": 2800
        },
        {
            "period": "6 месяцев",
            "summ": 6000,
            "discount": 500,
            "summForPay": 5500
        }
    ],
    "payServices": [
        {
            "name": "1С Контрагент",
            "desc": "Автоматическое заполнение реквизитов контрагентов по ИНН",
            "summ": 4800
        },
        {
            "name": "1С Отчётность",
            "desc": "Сдача отчетности прямо из программы 1С",
            "summ": 3900
        }
    ]
}

export default class LKController extends React.Component<{}, any> {
    constructor(props: {}) {
        super(props);
        this.state = emptyData;
        this.collect(auth.get().login)
    }

    collect(login: string) {
        let param = {
            "method": "private",
            "params": {
                "login": login,
            }
        };

        fetch('/rpc', {
            method: 'POST',
            body: JSON.stringify(param)
        }).then((response) => response.json()).then((data: any) => {
            if (!data.result) {
                this.setState({ validate: data?.error?.message })
                return;
            }
            this.setState(data.result);
        });
    }

    render() {
        return <LK data={ this.state } />;
    };
}
