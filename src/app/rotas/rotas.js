const LivroDao = require('../infra/livro-dao');
const db = require('../../config/database');

module.exports = (app) => {
    app.get('/', (req, resp) => {
        resp.send(`
                    <html>
                        <head>
                            <meta charset="utf-8">
                        </head>
                        <body>
                            <h1>Casa do Código</h1>
                        </body>
                    </html>
                `);
    });
    app.get('/livros', (req, resp) => {
        const livroDao = new LivroDao(db);

        livroDao.lista((erro, resultados) => {
            resp.marko(
                require('../views/livros/lista/lista.marko'),
                {
                    livros: resultados
                }
            );
        })

        // db.all('SELECT * FROM livros', (erro, resultados) => {
        //     resp.marko(
        //         require('../views/livros/lista/lista.marko'),
        //         {
        //             livros: resultados
        //         }
        //     );
        // });
    });
};


