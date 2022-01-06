/**
 * Objeto que compartilha a informação a todos os states
 */
import React, { useReducer } from 'react';

//
import BusContext from './BusContext';
import { busReducer } from './Reducer';

const GlobalState = props => {
    //Inicializa o state e retorna as informações quando atualizado
    const [infoState, dispatch] = useReducer(busReducer, { info: 'Info Context inicial' });
    //Função que irá alterar a informação
    const changeContextInfo = info => {
        setTimeout(() => {
            console.log("GlobalState - changeContextInfo = " + info)
            //Despacha a Action para alterar a informação
            dispatch({ type: 'busInfoContext/CHANGE_INFO', payload: {info: info} });
        }, 700);
    };
    console.log("GlobalState Info = " + infoState.info);
    return (
        <BusContext.Provider
            //Inicializa o state global e guarda a função
            value={{
                info: infoState.info,
                changeContextInfo: changeContextInfo,
            }}
        >
            {props.children}
        </BusContext.Provider>
    );
};

export default GlobalState;