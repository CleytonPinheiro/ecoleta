
//Chamando módulo express do node_modules
const express = require("express")

//executando o servidor
const server = express()

//Configurando a pasta publica
server.use(express.static("public"))


//UTILIZANDO TEMPLATE ENGINES
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

//Configurando caminhos da app. page home. Req: Requisição, res: Resposta
server.get("/", (req,res) => {
    return res.render("index.html")
})

server.get("/create-point", (req,res) => {
    return res.render("create-point.html")
})

server.get("/search", (req,res) => {
    return res.render("search-results.html")
})

//Subindo servidor
server.listen(3000)