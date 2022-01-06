/**
 * Objeto que reúne os Actions que alteram as informações no BusInfo
 */

//Função que altera a Informação do Info
export function changeInfo(info) {
    
    console.log("Action changeInfo");

    //Retorna o Redux Action busInfo/CHANGE_INFO e a informação do Info
    //para alterar o Reducer
    return {
        type: 'busInfo/CHANGE_INFO',
        payload: { info },
    };

}

//Função que altera a Informação do Info
export function getNewInfo() {

    console.log("Action getNewInfo");

    //Retorna o Redux Action busInfo/GET_NEW_INFO
    //para chamar a Saga
    return {
        type: 'busInfo/GET_NEW_INFO',
    };

}