import React from "react";
import Support from "./supp";
import PaymentController from "./payment.controller";
import AddServicesController from "./addservices.controller";
import EmploiesController from "./emploies.controller";
import MyTariff, { IData as ITariffProps } from "./tariff";
import TransactionsController from "./transactions.controller";

export interface ILoginProps {
    login: string
}

export interface ISupportResp {
    "1CSupportLogin": string
    "1CSupportPass": string
}

interface IProps {
    data: ILoginProps & ITariffProps & ISupportResp
}

export default function LK(props: IProps): React.ReactElement {
    return <main className="main main_lk">
        <section className="lk">
            <div className="lk__upper-block">
                <div className="lk__left">
                    <PaymentController login={ props.data.login } />
                    <AddServicesController login={ props.data.login } />
                </div>

                <div className="lk__right">
                    <Support SupportLogin={ props.data["1CSupportLogin"] } SupportPass={ props.data["1CSupportPass"] } />
                    <MyTariff data={ props.data } />
                </div>
            </div>

            <EmploiesController login={ props.data.login } />

            <TransactionsController login={ props.data.login } />
        </section>
    </main>;
}
