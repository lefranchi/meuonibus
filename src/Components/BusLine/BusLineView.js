/**
 * View do componente BusLine
 */

import React from 'react';

const BusLineView = (props) => {
    // Criando o View com a informação do Info e o botão para alterar a Saga
    return (    
        <div>
            <div> Info: {props.info}</div>
            <button onClick={() => props.changeInfoSaga()}>Alterar Info Saga</button>
        </div>
    )
}

export default BusLineView;