import React, { useState, useEffect } from 'react';
import Form from './Components/Form';
import Installments from './Components/Installments';

function App() {
    const [montanteInicial, setMontanteInicial] = useState(1000);
    const [taxaJuros, setTaxaJuros] = useState(1);
    const [periodoMensal, setPeriodoMensal] = useState(1);
    const [allInstallments, setAllInstallments] = useState([]);

    const handleChangesForm = (event) => {
        const { id, value } = event.target;
        if (id === 'montanteInicial') setMontanteInicial(Number(value));
        if (id === 'taxaJuros') setTaxaJuros(Number(value));
        if (id === 'periodoMensal') setPeriodoMensal(Number(value));
    };

    useEffect(() => {
        let newInstallments = [];
        for (let i = 0; i < periodoMensal; i++) {
            if (i === 0) {
                const montanteAtual = (montanteInicial * taxaJuros) / 100 + montanteInicial;
                const diffMontante = montanteAtual - montanteInicial;
                newInstallments.push({ montante: montanteAtual, diffMontante: diffMontante, juros: taxaJuros });
            } else {
                const { montante: montanteAnterior } = newInstallments[i - 1];
                const montanteAtual = (montanteAnterior * taxaJuros) / 100 + montanteAnterior;
                const diffMontante = montanteAtual - montanteInicial;
                const jurosCalculado = (diffMontante / montanteInicial) * 100;
                newInstallments.push({ montante: montanteAtual, diffMontante: diffMontante, juros: jurosCalculado });
            }
        }
        setAllInstallments(newInstallments);
    }, [montanteInicial, taxaJuros, periodoMensal]);

    return (
        <div className="container">
            <h2 className="center">React Hooks - Juros Compostos</h2>
            <Form montanteInicial={montanteInicial} taxaJuros={taxaJuros} periodoMensal={periodoMensal} handleChangesForm={handleChangesForm} />
            <Installments allInstallments={allInstallments} />
        </div>
    );
}

export default App;
