/**
 * Controller da page Home
 */

import React from 'react';

//Vamos comentar o HomeView por enquanto
//import HomeView from './HomeView'
//Importa os componentes
import BusLineController from '../../Components/BusLine/BusLineController';
import BusPositionController from '../../Components/BusPosition/BusPositionController';

const HomeController = () => {    
    //Adiciona o BusLineController e BusPosition
    return (
        <div className="App">
            <BusLineController />
            <BusPositionController />
        </div>                
    )
}

export default HomeController;