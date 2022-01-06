
const express = require('express')

var cors = require('cors')
const app = express()
const port = 3000
const fetch = require('node-fetch');

app.use(cors())

app.post('/Login/Autenticar', async (req, res) => {    
    try {
        let token = req.query.token;
        const response = await fetch('http://api.olhovivo.sptrans.com.br/v2.1/Login/Autenticar?token=' + token, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        });

        const serverResponse = await response.json();
        //Pegando cookies
        let cookies = response.headers.get('set-cookie');
        //Removendo spaces
        cookies = cookies.replace(/ /g, '');
        let arrayCookies = cookies.split(';');
        let finalToken = "";
        //Limpando para retirar informacao do token
        arrayCookies.forEach(cookie => {
            if (cookie.includes('apiCredentials')){
                let arrayCookie = cookie.split("=");
                finalToken = arrayCookie[1];
            }
        });

        //Retornando informação
        res.send({
            response: serverResponse,
            apiToken: finalToken
        });
    } catch (e) {
        console.log(e);
        res.send("Error Connecting");
    }

});

app.get('/Linha/Buscar', async (req, res) => {
    try{
        const response = await fetch('http://api.olhovivo.sptrans.com.br/v2.1/Linha/Buscar?termosBusca=' + req.query.termosBusca, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', cookie: 'apiCredentials=' + req.query.tokenConexao + ';' },
        });

        const json = await response.json();
        console.log(json);
        res.send(json)
    } catch (e) {
        console.log(e);
        res.send("Error Connecting");
    }
    
})

app.get('/Parada/BuscarParadasPorLinha', async (req, res) => {
    try{
        const response = await fetch('http://api.olhovivo.sptrans.com.br/v2.1/Parada/BuscarParadasPorLinha?codigoLinha=' + req.query.codigoLinha, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', cookie: 'apiCredentials=' + req.query.tokenConexao + ';' },
        });

        const json = await response.json();
        console.log(json);
        res.send(json)
    } catch (e) {
        console.log(e);
        res.send("Error Connecting");
    }
    
})

app.get('/Previsao/Parada', async (req, res) => {

    try {
        const response = await fetch('http://api.olhovivo.sptrans.com.br/v2.1/Previsao/Parada?codigoParada=' + req.query.codigoParada, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', cookie: 'apiCredentials=' + req.query.tokenConexao + ';' },
        });

        const json = await response.json();
        console.log(json);
        res.send(json)
    } catch (e) {
        console.log(e);
        res.send("Error Connecting");
    }

})

app.get('/Posicao/Linha', async (req, res) => {
    console.log(req.query.codigoLinha);
    console.log(req.query.tokenConexao);    
    try {
        const response = await fetch('http://api.olhovivo.sptrans.com.br/v2.1/Posicao/Linha?codigoLinha=' + req.query.codigoLinha, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', cookie: 'apiCredentials=' + req.query.tokenConexao + ';' },
        });

        const json = await response.json();
        console.log(json);
        res.send(json)
    } catch (e) {
        console.log(e);
        res.send("Error Connecting");
    }

})


app.listen(port, () => {
    console.log(`Proxy app listening at http://localhost:${port}`)
})