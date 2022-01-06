/**
 * Objeto Contexto do aplicativo
 */

import React from 'react';

//Cria o contexto a ser compartilhado com as variáveis e funções do contexto
export default React.createContext({
    info: '',
    changeContextInfo: info => { },
});