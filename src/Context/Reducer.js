/**
 * Objeto que organiza o Reducer utilizado no Context, responsável por alterar as informações
 */

//Importa a função produce do immer
import produce from 'immer';

export const busReducer = (state, { type, payload }) => {
    //A função de uma maneira mais fácil o state com o draft
    //e retorna um novo state para o reducer
    return produce(state, (draft) => {
        switch (type) {
            //Verifica qual Action foi chamada
            case 'busInfoContext/CHANGE_INFO': {
                console.log("Reducer - busInfoContext/CHANGE_INFO");
                //Altera a informação do Info no state
                draft.info = payload.info;
                break;
            }
            default:
        }
    });
};