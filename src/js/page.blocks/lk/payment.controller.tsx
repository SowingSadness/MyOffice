import React from "react";
import Request, { Download } from '../../transport/request';
import Payment, { IPayTariff } from './payment';

interface IResponse {
    Payment: IPayTariff[]
}

interface IPay {
    'MerchantId': number
    'OrderId': string
    'Amount': number
    'Currency': string
    'ReturnUrl': string
    'SecurityKey': string
}

export default class PaymentController extends React.Component<{ login: string }, { tariffs: IPayTariff[], isPayProcess: boolean }> {
    private form: React.Ref<HTMLFormElement>;
    private MerchantId: React.Ref<HTMLInputElement>;
    private OrderId: React.Ref<HTMLInputElement>;
    private Amount: React.Ref<HTMLInputElement>;
    private Currency: React.Ref<HTMLInputElement>;
    private ReturnUrl: React.Ref<HTMLInputElement>;
    private SecurityKey: React.Ref<HTMLInputElement>;

    constructor(props: { login: string }) {
        super(props);
        this.state = {
            tariffs: [],
            isPayProcess: false
        };
        this.collect(props.login);
        this.onLoadBill = this.onLoadBill.bind(this);
        this.onPay = this.onPay.bind(this);

        this.form = React.createRef();
        this.MerchantId = React.createRef();
        this.OrderId = React.createRef();
        this.Amount = React.createRef();
        this.Currency = React.createRef();
        this.ReturnUrl = React.createRef();
        this.SecurityKey = React.createRef();
    }

    collect(login: string) {
        let param = {
            "method": "private_widget_payment",
            "params": {
                "login": login,
            }
        };
        Request<IResponse>(param).then((data: IResponse) => {
            this.setState({ tariffs: data.Payment });
        }).catch((error) => {
            //this.setState({ validate: error?.message });
            console.error(error);
        });
    }

    onLoadBill(id: number) {
        Download({
            "method": "private_getInvoiceTariff",
            "params": {
                "login": this.props.login,
                "id": id
            }
        });
    }

    onPay(id: number) {
        this.setState({
            isPayProcess: true
        });

        Request<IPay>({
            "method": "get_payonline",
            "params": {
                "login": this.props.login,
                "id": id
            }
        }).then((res) => {
            this.setState({
                isPayProcess: false
            });
            // TODO!
        });
    }

    render() {
        return <React.Fragment>
            <Payment data={ this.state.tariffs } isPayProcess={ this.state.isPayProcess } onLoadBill={ this.onLoadBill } onPay={ this.onPay } />
            <form ref={ this.form }>
                <input type="hidden" name="MerchantId" ref={ this.MerchantId } />
                <input type="hidden" name="OrderId" ref={ this.OrderId } />
                <input type="hidden" name="Amount" ref={ this.Amount } />
                <input type="hidden" name="Currency" ref={ this.Currency } />
                <input type="hidden" name="ReturnUrl" ref={ this.ReturnUrl } />
                <input type="hidden" name="SecurityKey" ref={ this.SecurityKey } />
            </form>
        </React.Fragment>;
    };
}
