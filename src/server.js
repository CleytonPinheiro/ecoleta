
//Chamando módulo express do node_modules
const express = require("express")
//executando o servidor
const server = express()

//Pegando o banco de dados do db.js
const db = require("./database/db.js")

//Configurando a pasta publica
server.use(express.static("public"))

//Habilitar o uso do req.body na app
server.use(express.urlencoded({ extended: true }))


//UTILIZANDO TEMPLATE ENGINES
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

//Configurando caminhos da app. page home. Req: Requisição, res: Resposta
server.get("/", (req, res) => {
    return res.render("index.html")
})

server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})

server.post("/savepoint", (req, res) => {

    // req.body: Corpo do formulário
    // console.log("req.body")

    //Inseris dados no db

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
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]

    //Usando chamada callback
    function afterInsertData(err) {
        if (err) {
            console.log(err)
            return res.send("Erro no cadastro")
        }

        console.log("Cadastrado com sucesso")
        console.log(this)

        return res.render("create-point.html", { saved: true })
    }

    db.run(query, values, afterInsertData)
})


server.get("/search", (req, res) => {

    //Pegando os dados do db
    db.all(`SELECT * FROM places`, function (err, rows) {
        if (err) {
            return console.log(err)
        }

        const total = rows.length

        //Renderizando a view com dados do db
        return res.render("search-results.html", { places: rows, total: total })
    })

})

//Subindo servidor
server.listen(3000)
