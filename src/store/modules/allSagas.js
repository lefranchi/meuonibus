/**
 * Objeto que junta todas as Sagas que usaremos no aplicativo
 */

//Importa o all  do redux-saga
import { all } from 'redux-saga/effects';

//Importa a saga dentro do modulo busInfo
import busInfo from './busInfo/sagas.js';

//Junta todas as sagas importadas
export default function* rootSaga() {
    return yield all([busInfo]);
}