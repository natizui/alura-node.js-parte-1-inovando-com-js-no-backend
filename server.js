const http = require('http');

const servidor = http.createServer((req, resp) => {
    let html = '';

    if(req.url == '/') html = `
            <html>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1>Casa do Código</h1>
                </body>
            </html>
        `;
    else if(req.url == '/livros') html = `
            <html>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1>Listagem de Livros</h1>
                </body>
            </html>
        `;
    resp.end(html);
});
servidor.listen(3000);


//No terminal:
// $ npm init
    // This utility will walk you through creating a package.json file.
    // It only covers the most common items, and tries to guess sensible defaults.

    // See `npm help json` for definitive documentation on these fields
    // and exactly what they do.

    // Use `npm install <pkg>` afterwards to install a package and
    // save it as a dependency in the package.json file.

    // Press ^C at any time to quit.
    // package name: (casadocodigo)
    // version: (1.0.0)
    // description: Livraria Casa do Código
    // entry point: (olaMundoNode.js) server.js
    // test command:
    // git repository: (https://github.com/natizui/alura-node.js-parte-1-inovando-com-js-no-backend.git)
    // keywords:
    // author: Natalia Izui
    // license: (ISC)
    // About to write to C:\Users\natalia.izui\Documents\Alura\casadocodigo\package.json:

    // {
    //   "name": "casadocodigo",
    //   "version": "1.0.0",
    //   "description": "Livraria Casa do Código",
    //   "main": "server.js",
    //   "scripts": {
    //     "test": "echo \"Error: no test specified\" && exit 1",
    //     "start": "node server.js"
    //   },
    //   "repository": {
    //     "type": "git",
    //     "url": "git+https://github.com/natizui/alura-node.js-parte-1-inovando-com-js-no-backend.git"
    //   },
    //   "author": "Natalia Izui",
    //   "license": "ISC",
    //   "bugs": {
    //     "url": "https://github.com/natizui/alura-node.js-parte-1-inovando-com-js-no-backend/issues"
    //   },
    //   "homepage": "https://github.com/natizui/alura-node.js-parte-1-inovando-com-js-no-backend#readme"
    // }


    // Is this OK? (yes)

//$ npm install express@4.16.3 --save-exact

