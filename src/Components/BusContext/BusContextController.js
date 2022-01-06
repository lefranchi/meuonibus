/**
 * Controller do componente BusContext
 */
 import React, { useContext } from 'react';
 import BusContextView from './BusContextView'
 //Importa o BusContext
 import BusContext from '../../Context/BusContext';
 const BusContextController = () => {
     //Pegando o Contexto
     const context = useContext(BusContext);
     //função que será chamada ao clicar no botão Alterar Context
     const changeContext = () => {
         //Despacha o Action presente no changeContextInfo para chamar o Reducer
         context.changeContextInfo('Nova info do Context');
     }
     return (
         //Chamando o View e passando o props info e a funçao changeContext
         <BusContextView
             infoContext={context.info}
             changeContext={changeContext}
             
         />
     )
 }
 export default BusContextController;