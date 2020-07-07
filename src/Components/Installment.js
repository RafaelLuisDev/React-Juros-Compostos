import React from 'react';
import formatNumber from '../Helpers/formatHelpers';
import './Installments.css';

export default function Installment({ objInstallment, mes }) {
    const { montante, diffMontante, juros } = objInstallment;
    const textDinamicColorJuros = 'gridValue text-lighten-1 ' + (juros > 0 ? 'blue-text' : juros < 0 ? 'orange-text' : 'grey-text');
    const textDinamicColorValues = 'gridValue text-lighten-1 ' + (juros > 0 ? 'green-text' : juros < 0 ? 'red-text' : 'grey-text');
    return (
        <div className="boxCard">
            <div className="gridCard">
                <div className="gridMonth teal darken-3 grey-text text-lighten-3">{mes}</div>
                <div className="gridInfo">
                    <div className={textDinamicColorValues}>R$ {formatNumber(montante)}</div>
                    <div className={textDinamicColorValues}>
                        {diffMontante > 0 ? '+' : diffMontante < 0 ? '-' : ''} R$ {formatNumber(Math.abs(diffMontante))}
                    </div>
                    <div className={textDinamicColorJuros}>{formatNumber(juros)}%</div>
                </div>
            </div>
        </div>
    );
}
