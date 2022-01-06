/**
 * View do componente BusContext
 */
 import React from 'react';
 const BusContextView = (props) => {
     // Criando o View com a informação do Info e o botão para alterar o Context
     return (
         <div>
             <div> Info: {props.infoContext}</div>
             <button onClick={() => props.changeContext()}>Alterar Context</button>
         </div>
     )
 }
 export default BusContextView;