require('marko/node-require').install();
require('marko/express');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));

const rotas = require('../app/rotas/rotas');
rotas(app);

module.exports =  app;

//Aprofundando sobre middlewares

// Para se aprofundar um pouco mais nas possibilidades que os middlewares nos oferecem, João pesquisou um pouco sobre o assunto e descobriu que o método use() do Express pode receber dois parâmetros, sendo o primeiro uma string que define as URLs que serão atendidas pelo middleware e como segundo parâmetro uma função. É essa função que irá definir o que o middleware deverá fazer e, por sua vez, recebe três parâmetros, a requisição, a resposta e uma função (normalmente chamada de next) que deve ser invocada para que o Express avance para o próximo middleware existente e caso não exista mais nenhum, passa a execução para a rota ativada. Sendo assim, a ordem em que os middlewares são definidos é de extrema importância! Além disso, um detalhe a ser observado, é que tudo que estiver antes da chamada da função next será executado antes da rota ativada e o que estiver após a chamada da função next será executado somente ao término da rota ativada!

// Para saber mais: http://expressjs.com/pt-br/guide/using-middleware.html

// Desse modo, para treinar o que aprendeu, nosso colega escreveu o seguinte código:

    // // custom-express.js

        // const express = require('express');
        // const app = express();

        // app.use('*', (req, res, next) => {
        //    console.log('1.1');
        //    next();
        //    console.log('1.2');
        // });

        // app.use('*', (req, res, next) => {
        //    console.log('2.1');
        //    next();
        //    console.log('2.2');
        // });


    // // rotas.js

        // module.exports = (app) => {

        //    app.get('/livros', function(req, resp) {
        //        console.log('listagem livros')
        //        const livroDao = new LivroDao(db);
        //        livroDao.lista()
        //                .then(livros => resp.marko(
        //                    require('../views/livros/lista/lista.marko'),
        //                    {
        //                        livros: livros
        //                    }
        //                ))
        //                .catch(erro => console.log(erro));
        //    });
        // };

    // A saída que nosso colega terá em seu terminal ao acessar a URL http://localhost:3000/livros será:
        // 1.1
        // 2.1
        // listagem livros
        // 2.2
        // 1.2


//OBS:
//Como o próprio nome indica, são trechos intermediários de código que são executados entre o envio da requisição e seu tratamento pela rota ativada!
//O middleware, de modo geral, é composto por um padrão de URLs que são usadas para o ativar e um callback que recebe a requisição, a resposta e uma função, normalmente chamada de next, que deve ser invocada para que o processamento da requisição siga em frente.
//Uma aplicação possível de um middleware seria a contagem de tempo gasto ao executar uma rota.