class LivroDao {
    
    constructor(db) {
        this._db = db;
    }

    lista() {
        return new Promise((resolve, reject) => {
            this._db.all('SELECT * FROM livros', 
            (erro, resultados) => {
                if(erro) return reject('Não foi possível listar os livros!');
                return resolve(resultados);
            });
        });
    }
}

module.exports = LivroDao;

//OBSERVAÇÃO
//DAO = data access object, é um padrão para persistência de dados que permite separar regras de negócio das regras de acesso a banco de dados. 

//O padrão de projeto DAO permite dar maior semântica aos nossos códigos, como foi o caso do que ocorreu no módulo de rotas da nossa aplicação.

//Quando implementamos o padrão DAO, como convenção, sempre criamos uma estrutura com um nome que inicia pelo tipo de dados acessado (no nosso caso livro) e terminando com a palavra DAO. Por isso, no nosso caso, criamos uma classe com o nome LivroDao. Isso é feito para facilitar o entendimento de modo que quem bata o olho em tal nome já saiba de antemão e sem a necessidade de ler todo o código, de que ali está tudo referente ao acesso de dados do tipo livro.

//O padrão DAO permite que façamos acesso aos dados sem nos preocupar em como esse acesso é feito ou onde os dados estão armazenados. O padrão DAO é para acesso a dado! Portanto, independentemente se dados estão armazenados num banco de dados, num arquivo xml ou numa planilha, esse padrão é muito bem vindo!