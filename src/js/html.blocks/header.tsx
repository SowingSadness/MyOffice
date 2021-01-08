import React, { useState } from 'react';
import BurgerMenu from './_header/BurgerMenu';
import MainMenu from './_header/MainMenu';
import type User from  '../model/User';
import * as auth from 'src/js/auth.blocks/auth';
import Register from 'src/js/auth.blocks/register';
import Login from 'src/js/auth.blocks/login';
import { openSignal, closeSignal, ISignal } from "../html.blocks/modal";

interface IHeaderProps {
    user?: User
    subMenu?: React.ComponentClass | React.FunctionComponent
}

export default function Header(props: Readonly<IHeaderProps>): React.ReactElement {
    const [user, setUser] = useState(props.user);
    const Right = user ? <Loginned user={ user } /> :
        <NotLoginned onLogined={ setUser } />;

    const SecondMenu = props.subMenu ? <props.subMenu /> : '';

    return <header className="header">
        <div className="header__upper-menu">
            <a href="index.html" className="header__logo">
                <img alt="лого сайта" className="header__logo-image" src="images/logo3.png" />
                <p className="header__logo-text">мой офис</p>
            </a>
            <img className="burger-menu__button" src="images/open-menu.svg" alt="скрытое меню" />
            <BurgerMenu user={ user } />
            <a href="tel: +7 (843) 202-21-40" className="header__phone">+7 (843) 202-21-40</a>
            { Right }
        </div>
        <MainMenu />
        { SecondMenu }
    </header>;
}


interface INotLoginnedProps {
    onLogined: (user: User) => unknown
}

interface IState {
    registerSignal: ISignal,
    signalOpen: ISignal
}

export class NotLoginned extends React.Component<INotLoginnedProps, IState> {
    constructor(props: INotLoginnedProps) {
        super(props);
        this.showReg = this.showReg.bind(this);
        this.showLogin = this.showLogin.bind(this);

        this.state = {
            registerSignal: closeSignal(),
            signalOpen: closeSignal()
        };
    }

    showReg() {
        this.setState({
            registerSignal: openSignal()
        });
    }

    showLogin() {
        this.setState({
            signalOpen: openSignal()
        });
    }

    render() {
        return <React.Fragment>
            <button className="header__start-button" onClick={ this.showReg }>Начать работу</button>
            <button className="header__lk-button" onClick={ this.showLogin }>Личный кабинет</button>
            <Register signal={ this.state.registerSignal }></Register>
            <Login signal={ this.state.signalOpen } onLogined={ this.props.onLogined }></Login>
        </React.Fragment>;
    }
}

function Loginned(props: Readonly<{ user: User }>): React.ReactElement {
    return <React.Fragment>
        <div className="header__lk-container">
            <div className="header__info-container">
                <div className="header__row-container">
                    <p className="header__balance-text">Баланс:</p>
                    <p className="header__balance-text header__balance-text_bold">{ props.user.balance } руб.</p>
                </div>
                <div className="header__row-container">
                    <p className="header__balance-text">Оплачено до:</p>
                    <p className="header__balance-text header__balance-text_bold">{ props.user.getDateDiscard() }</p>
                </div>
            </div>
            <a href="lk.html" className="header__user-box">
                <div className="header__image-box">
                    <img className="header__user-icon" src="images/user.svg" />
                </div>
                <p className="header__user">{ props.user.login }</p>
            </a>
            <a href="index.html">
                <img className="header__exit-icon" src="images/exit.svg" onClick={ auth.logout } />
            </a>
        </div>
    </React.Fragment>;
}
