import React from 'react';
import Installment from './Installment';
import './Installments.css';

export default function Installments({ allInstallments }) {
    let divsInstallments = [];

    allInstallments.forEach((objInstallment, index) => {
        divsInstallments.push(<Installment key={index} objInstallment={objInstallment} mes={index + 1} />);
    });

    return <div className="flexRow">{divsInstallments}</div>;
}
