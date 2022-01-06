/**
 * View do componente BusPosition
 */
 import React from 'react';
 const BusPositionView = (props) => {
     // Criando o View com a informação do Info e o botão para alterar o Reducer
     return (
         <div>
             <div> Info: {props.info}</div>
             <div> InfoContexto: {props.infoContext}</div>
             <button onClick={() => props.changeReducer()}>Alterar Reducer</button>
         </div>
     )
 }
 export default BusPositionView;