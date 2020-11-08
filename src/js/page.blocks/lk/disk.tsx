import React, { useState } from "react";

export default function Disk(): React.ReactElement {
    return <div className="profile-settings profile-settings_row">
        <div className="profile-settings__title-wrapper">
            <h2 className="profile-settings__title">Управление дисковым пространством</h2>
        </div>
        <div className="lk__wrapper lk__wrapper_control">
            <div className="control-lk">
                <div className="control-lk__engaged">
                    <p className="control-lk__sign">Занято:</p>
                    <p className="control-lk__sign control-lk__sign_bold">5 Гб</p>
                </div>
                <div className="control-lk__line">
                    <div className="control-lk__line control-lk__line_blue"></div>
                </div>
                <div className="control-lk__row">
                    <p className="control-lk__sign control-lk__sign_row">
                        Дополнительное дисковое пространство
                                </p>
                    <div className="calculate-block__count-block calculate-block__count-block_lk">
                        <div className="calculate-block__minus calculate-block__minus_lk">
                            <img className="calculate-block__minus-icon" src={ require('src/images/lineMinus.svg') } />
                        </div>
                        <p className="calculate-block__number calculate-block__number_lk">5 Гб</p>
                        <div className="calculate-block__minus calculate-block__minus_lk">
                            <img className="calculate-block__minus-icon" src={ require('src/images/lineMinus.svg') } />
                            <img className="calculate-block__minus-icon_plus" src={ require('src/images/lineMinus.svg') } />
                        </div>
                    </div>
                    <div className="control-lk__pay">
                        <p className="control-lk__sign control-lk__sign_pay">Доплата:</p>
                        <p className="control-lk__sign">95 руб./мес</p>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}
