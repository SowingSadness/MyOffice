import React from "react";
import Request, { Download } from '../../transport/request';
import Payment, { IPayTariff } from './payment';

interface IResponse {
    Payment: IPayTariff[]
}

interface IState {
    tariffs: IPayTariff[]
    isPayProcess: boolean
}

interface IPay {
    url: string
    MerchantId: number
    OrderId: string
    Amount: string
    Currency: string
    ReturnUrl: string
    SecurityKey: string
}

export default class PaymentController extends React.Component<{ login: string }, IState> {
    private form: React.RefObject<HTMLFormElement>;
    private MerchantId: React.RefObject<HTMLInputElement>;
    private OrderId: React.RefObject<HTMLInputElement>;
    private Amount: React.RefObject<HTMLInputElement>;
    private Currency: React.RefObject<HTMLInputElement>;
    private SecurityKey: React.RefObject<HTMLInputElement>;
    private ReturnUrl: React.RefObject<HTMLInputElement>;

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
        this.SecurityKey = React.createRef();
        this.ReturnUrl = React.createRef();
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

    onLoadBill(id: string) {
        Download({
            "method": "private_getInvoiceTariff",
            "params": {
                "login": this.props.login,
                "id": id
            }
        });
    }

    onPay(id: string) {
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
                isPayProcess: false,
            });

            this.MerchantId.current.value = String(res.MerchantId);
            this.OrderId.current.value = res.OrderId;
            this.Amount.current.value = String(res.Amount);
            this.Currency.current.value = res.Currency;
            this.SecurityKey.current.value = res.SecurityKey;
            this.ReturnUrl.current.value = res.ReturnUrl;
            this.form.current.action = res.url;
            this.form.current.submit();
        }, () => {
            this.setState({
                isPayProcess: false,
            });
        });
    }

    render() {
        return <React.Fragment>
            <Payment data={ this.state.tariffs } isPayProcess={ this.state.isPayProcess }
                onLoadBill={ this.onLoadBill } onPay={ this.onPay } />
            <form ref={ this.form }>
                <input type="hidden" name="MerchantId" ref={ this.MerchantId } />
                <input type="hidden" name="OrderId" ref={ this.OrderId } />
                <input type="hidden" name="Amount" ref={ this.Amount } />
                <input type="hidden" name="Currency" ref={ this.Currency } />
                <input type="hidden" name="SecurityKey" ref={ this.SecurityKey } />
                <input type="hidden" name="ReturnUrl" ref={ this.ReturnUrl } />
            </form>
        </React.Fragment>;
    };
}
