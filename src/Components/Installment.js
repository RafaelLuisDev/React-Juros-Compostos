import React from 'react';
import formatNumber from '../Helpers/formatHelpers';
import './Installments.css';

export default function Installment({ objInstallment, mes }) {
    const { montante, diffMontante, juros } = objInstallment;
    return (
        <div className="boxCard">
            <div className="gridCard">
                <div className="gridMonth teal darken-3 grey-text text-lighten-3">{mes}</div>
                <div className="gridInstallments">
                    <div className="gridValue">R$ {formatNumber(montante)}</div>
                    <div className="gridValue ">
                        {diffMontante > 0 ? '+' : diffMontante < 0 ? '-' : ''} R$ {formatNumber(Math.abs(diffMontante))}
                    </div>
                    <div className="gridValue">{formatNumber(juros)}%</div>
                </div>
            </div>
        </div>
    );
}
