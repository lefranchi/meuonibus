/**
 * Objeto que organiza o reducer do módulo busInfo
 */

//Importa a função produce do immer
import produce from 'immer';

//Seta o state inicial
const INITIAL_STATE = {
    info: 'Info Inicial',
    apiToken: '',
    busLines: [],
    isConnectingSearchBusLines: false,
    searchBusLinesWithSuccess: 0,
};

//Cria a função responsável por organizar o Reducer
export default function busInfo(state = INITIAL_STATE, { type, payload }) {
    //A função de uma maneira mais fácil o state com o draft
    // e retorna um novo state para o reducer
    return produce(state, (draft) => {
        switch (type) {
            //Verifica qual Redux Action foi chamada no Action
            case 'busInfo/CHANGE_INFO': {
                console.log("REDUCER busInfo/CHANGE_INFO = " + payload.info);
                //Altera a informação do Info no state
                draft.info = payload.info;
                break;
            }
            case 'busInfo/SEARCH_BUSLINES_START': {
                //Altera a informação do Info no state
                draft.busLines = [];
                draft.isConnectingSearchBusLines = true;
                draft.searchBusLinesWithSuccess = 0;
                break;
            }
            case 'busInfo/SEARCH_BUSLINES_FINISH_SUCCESS': {
                //Altera a informação do Info no state
                draft.apiToken = payload.apiToken;
                draft.busLines = payload.busLines;
                draft.isConnectingSearchBusLines = false;
                draft.searchBusLinesWithSuccess = 1;
                break;
            }
            case 'busInfo/SEARCH_BUSLINES_FINISH_ERROR': {
                //Altera a informação do Info no state
                draft.busLines = [];
                draft.isConnectingSearchBusLines = false;
                draft.searchBusLinesWithSuccess = 2;
                break;
            }
            default:
        }
    });
}