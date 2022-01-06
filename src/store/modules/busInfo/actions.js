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

//Função que adiciona Action Start no Search Buslines
export function searchBusLinesStart() {
    //Retorna o Redux Action busInfo/SEARCH_BUSLINES_START
    return {
        type: 'busInfo/SEARCH_BUSLINES_START',
    };
}

//Função que adiciona a Saga para buscar as linhas
export function searchBusLines(search) {
    //Retorna o Redux Action busInfo/SEARCH_BUSLINES
    //para chamar a Saga
    return {
        type: 'busInfo/SEARCH_BUSLINES',
        payload: { search },
    };
}

//Função que adiciona Action Finish Success no Search Buslines
export function searchBusLinesFinishSuccess(busLines, apiToken) {
    //Retorna o Redux Action busInfo/SEARCH_BUSLINES_FINISH_SUCCESS
    return {
        type: 'busInfo/SEARCH_BUSLINES_FINISH_SUCCESS',
        payload: { busLines, apiToken },
    };
}

//Função que adiciona Action Finish Error no Search Buslines
export function searchBusLinesFinishError() {
    //Retorna o Redux Action busInfo/SEARCH_BUSLINES_FINISH_ERROR
    return {
        type: 'busInfo/SEARCH_BUSLINES_FINISH_ERROR',
        payload: {  },
    };
}

//Função que adiciona Action Start no Get Buslines Stops
export function getBusLineStopsStart(busLine) {
    //Retorna o Redux Action busInfo/GET_BUSLINES_STOPS_START
    return {
        type: 'busInfo/GET_BUSLINES_STOPS_START',
        payload: { busLine },
    };
}
//Função que adiciona a Saga para buscar as paradas da linha
export function getBusLineStops(busLine) {
    //Retorna o Redux Action busInfo/GET_BUSLINES_STOPS
    //para chamar a Saga
    return {
        type: 'busInfo/GET_BUSLINES_STOPS',
        payload: { busLine },
    };
}
//Função que adiciona Action Finish Success no Get Buslines Stops
export function getBusLineStopsFinishSuccess(busStops) {
    //Retorna o Redux Action busInfo/GET_BUSLINES_STOPS_FINISH_SUCCESS
    return {
        type: 'busInfo/GET_BUSLINES_STOPS_FINISH_SUCCESS',
        payload: { busStops },
    };
}
//Função que adiciona Action Finish Error no Get Buslines Stops
export function getBusLineStopsFinishError() {
    //Retorna o Redux Action busInfo/GET_BUSLINES_STOPS_FINISH_ERROR
    return {
        type: 'busInfo/GET_BUSLINES_STOPS_FINISH_ERROR',
        payload: {  },
    };
}

//Função que altera a posição do usuário no Reducer
export function updateUserCoordinate(latitude, longitude) {
    //Retorna o Redux Action busInfo/CHANGE_USER_COORDINATE
    return {
        type: 'busInfo/CHANGE_USER_COORDINATE',
        payload: {
            latitude, longitude
        },
    };
}