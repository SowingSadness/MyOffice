import React from "react";
import Begin from "./begin";
import PaymentList from "./payment";
import Emploies from "./emploies";
import MyTariff from "./tariff";
import Transactions from "./transactions";

export default function LK(props: any): React.ReactElement {
    return <main className="main main_lk">
        <section className="lk">
            <div className="lk__upper-block">
                <div className="lk__left">

                    <PaymentList payTariff={ props.data.payTariff } payServices={ props.data.payServices } />

                </div>

                <div className="lk__right">

                    <Begin SupportLogin={ props.data["1CSupportLogin"] } SupportPass={ props.data["1CSupportPass"] } />

                    <MyTariff data={ props.data } />

                </div>
            </div>

            <Emploies />

            <Transactions todayTransactions={ props.data.todayTransactions } />
        </section>
    </main>;
}
