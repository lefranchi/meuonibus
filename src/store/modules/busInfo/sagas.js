/**
 * Objeto que reúne as sagas deste módulo
 */

//Importa os effects do Redux-Saga 
import { takeLatest, call, put, all, select } from 'redux-saga/effects';
import ApiSPTrans from '../../../Services/ApiSPTrans';
// Importa as funções Actions que serão chamadas pela Saga
import {    
    changeInfo,
    searchBusLinesStart,
    searchBusLinesFinishSuccess,
    searchBusLinesFinishError
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
//Saga responsável por buscar a informação e alterar o Reducer
function* getBusLines({ payload }) {
    try {
        //Obtendo a variável search do payload
        const { search } = payload;
        console.log("Start Connection");
        //Envia o Redux action que iniciou a conexão
        yield put(searchBusLinesStart());
        //Obtendo a informação da apitoken para não ter de buscar novamente
        let apiToken = yield select(state => state.busInfo.apiToken);
        //Se o apiToken ja existe, não vamos precisar buscar novamente
        if (apiToken === ''){            
            //Realiza a primeira conexão para autenticar a conexão
            const dataReturn = yield call(ApiSPTrans.post, '/Login/Autenticar?token=' + process.env.REACT_APP_TOKEN_SPTRANS);
            //recebe as informações
            let response = dataReturn.data.response;
            apiToken = dataReturn.data.apiToken;
            //Verifica se a responsta da conexão veio como true
            if (response === false) {
                console.log("NOT SUCCESS");
                yield put(searchBusLinesFinishError());
            }   
        }        
        console.log("Before Call");
        //Realiza a conexão para buscar as linhas
        const returnSearch = yield call(ApiSPTrans.get, '/Linha/Buscar?termosBusca=' + search +'&amp;tokenConexao='+apiToken);
        console.log("After Call");
        console.log(returnSearch);        
        //Verificar se o retorno é um array, se sim, volta sucesso
        if (returnSearch.data instanceof Array){
            console.log("Success Call");
            yield put(searchBusLinesFinishSuccess(returnSearch.data, apiToken
));
        } else {
            console.log("NOT SUCCESS");
            yield put(searchBusLinesFinishError());
        }        
    } catch (err) {
        //console.log(err);
        console.log("Error Call");
        yield put(searchBusLinesFinishError());
    }
}

//Junta todos as sagas deste objeto
export default all([
    //executa as operações recebidas e retorna o valor da última
    // Atenção ao busInfo/GET_NEW_INFO, ele é o link chamado no ACTION 
    // para executar a Action
    takeLatest('busInfo/GET_NEW_INFO', getNewInfo),
    takeLatest('busInfo/SEARCH_BUSLINES', getBusLines),
]);