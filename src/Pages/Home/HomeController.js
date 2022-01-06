/**
 * Controller da page Home
 */
 import React from 'react';
 //Vamos comentar o HomeView por enquanto
 //import HomeView from './HomeView'
 //Importa os componentes
 import BusLineController from '../../Components/BusLine/BusLineController';
 import BusPositionController from '../../Components/BusPosition/BusPositionController';
 import BusContextController from '../../Components/BusContext/BusContextController';
 //Importa o GlobalSate
 import GlobalState from '../../Context/GlobalState';
 const HomeController = () => {    
     //Adiciona o Global State BusLineController e BusPosition
     return (
         <GlobalState>
             <div className="App">
                 <BusLineController />
                 <BusPositionController />
                 <BusContextController />
             </div>       
         </GlobalState>         
     )
 }
 export default HomeController;