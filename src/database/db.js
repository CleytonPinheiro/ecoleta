//Importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

//Iniciar o obj de db
const db = new sqlite3.Database("./src/database/database.db")

//Exportando para liberar acesso a app
module.exports = db

//Utilizando o obj de banco de dados para operações
/*db.serialize(() => {
    //Com comando SQL irá:

    // 1. Criar uma tabela

    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)

    //2. Inserir dados na table
    const query = `
            INSERT INTO places (
                image,
                name,
                address,
                address2,
                state,
                city,
                items
            ) VALUES (?,?,?,?,?,?,?);
        `

    const values = [
        "https://images.unsplash.com/photo-1507560461415-997cd00bfd45?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "Coletoria",
        "Guilherme Gemballa, Jardim América",
        "N260",
        "Santa catarina",
        "Rio do Sul",
        " Resíduos eletrônicos, Lâmpadas"
    ]

    //Usando chamada callback
    function afterInsertData(err) {
        if (err) {
            return console.log(err)
        }

        console.log("Cadastrado com sucesso")
        console.log(this)
    }


    //db.run(query, values,afterInsertData)

    //3. Consultando o banco de dados
    db.all(`SELECT * FROM places`, function (err, rows) {
        if (err) {
            return console.log(err)
        }

        console.log("Aqui estão seus registros:")
        console.log(rows)
    })


    //4. Deletar um dado da tabela
    db.run(`DELETE FROM places WHERE id = ?`, [1], function (err) {
        if (err) {
            return console.log(err)
        }
        console.log("Registro deletado com sucesso")

    })
})*/
