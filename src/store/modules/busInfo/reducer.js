/**
 * Objeto que organiza o reducer do módulo busInfo
 */

//Importa a função produce do immer
import produce from 'immer';

//Seta o state inicial
const INITIAL_STATE = {
    info: 'Info Inicial'
};

//Cria a função responsável por organizar o Reducer
export default function busInfo(state = INITIAL_STATE, { type, payload }) {
    //A função de uma maneira mais fácil o state com o draft
    //e retorna um novo state para o reducer
    return produce(state, (draft) => {
        switch (type) {
            //Verifica qual Redux Action foi chamada no Action
            case 'busInfo/CHANGE_INFO': {
                console.log("REDUCER busInfo/CHANGE_INFO = " + payload.info);
                //Altera a informação do Info no state
                draft.info = payload.info;
                break;
            }
            default:
        }
    });
}