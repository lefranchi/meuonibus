import React, {useState, useEffect, useRef} from 'react';
import HomeView from './HomeView'
import HomeModel from './HomeModel'

const HomeController = () => {

    //Inicalizando States
    const [count, setCount] = useState(0);

    //Inicializando Ref
    const homeModel = useRef(null);

    //Chamando o Effect ao montar o DOM
    useEffect(() => {
        homeModel.current = new HomeModel();//inicializando o Model
        homeModel.current.getSomeInfo(); 
        //Inicializando o timeout
        const interval = setInterval(() => {
            //atualizando o contador
            setCount(count + 1)
        }, 1000);     
   
        return () => {
            //Limpando o interval ao sair do componente
            clearInterval(interval);
        };
    }, [])
    
    console.log(" Count " + count);
    return (
        //Chamando o View e passando o props count_info
        <HomeView count_info={count}> 
            <div> Teste Info </div>
        </HomeView>
    )
}
export default HomeController;