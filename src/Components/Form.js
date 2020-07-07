import React from 'react';

export default function Form({ montanteInicial, taxaJuros, periodoMensal, handleChangesForm }) {
    const handleChangeInputs = (event) => {
        handleChangesForm(event);
    };

    return (
        <div>
            <div className="row">
                <div className="input-field col s4">
                    <label htmlFor="montanteInicial">Montante Inicial:</label>
                    <input type="number" name="montanteInicial" id="montanteInicial" value={montanteInicial} onChange={handleChangeInputs} min={0} step={100} />
                </div>
                <div className="input-field col s4">
                    <label htmlFor="taxaJuros">Taxa de Juros:</label>
                    <input type="number" name="taxaJuros" id="taxaJuros" value={taxaJuros} onChange={handleChangeInputs} step={0.1} />
                </div>
                <div className="input-field col s4">
                    <label htmlFor="periodoMensal">Periodo Mensal:</label>
                    <input type="number" name="periodoMensal" id="periodoMensal" value={periodoMensal} onChange={handleChangeInputs} min={1} />
                </div>
            </div>
        </div>
    );
}
