class LivroDao {
    
    constructor(db) {
        this._db = db;
    }

    lista(callback) {
        this._db.all('SELECT * FROM livros', (erro, resultados) => callback(erro, resultados));
    }
}

module.exports = LivroDao;

//OBSERVAÇÃO
//DAO = data access object, é um padrão para persistência de dados que permite separar regras de negócio das regras de acesso a banco de dados. 