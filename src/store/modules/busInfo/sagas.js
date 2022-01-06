/**
 * Objeto que reúne as sagas deste módulo
 */

//Importa os effects do Redux-Saga 
import { takeLatest, call, put, all } from 'redux-saga/effects';

// Importa as funções Actions que serão chamadas pela Saga
import {    
    changeInfo,
} from './actions';

//Função que retorna um texto após 3 segundos (somente para teste)
function getInfo() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                info: "Info do Saga",
            });
        }, 3000);
    });    
}

//Saga responsável por buscar a informação e alterar o Reducer
function* getNewInfo() {
    console.log("SAGA - getNewInfo");
    //Chama o método assícrono getInfo e retorna a informação após executar a informação
    const dataReturn = yield call(getInfo)
    console.log("SAGA - Retorno do Call GetInfo " + dataReturn.info);
    //Chama a action ChangeInfo e despacha a ReduxAction
    yield put(changeInfo(dataReturn.info));
}

//Junta todos as sagas deste objeto
export default all([
    //executa as operações recebidas e retorna o valor da última
    //Atenção ao busInfo/GET_NEW_INFO, ele é o link chamado no ACTION 
    //para executar a Action
    takeLatest('busInfo/GET_NEW_INFO', getNewInfo),
]);