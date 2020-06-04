
//Chamando módulo express do node_modules
const express = require("express")

//executando o servidor
const server = express()

//Configurando a pasta publica
server.use(express.static("public"))

//Configurando caminhos da app. page home. Req: Requisição, res: Resposta
server.get("/", (req,res) => {
    res.sendFile(__dirname + "/views/index.html")
})

server.get("/create-point", (req,res) => {
    res.sendFile(__dirname + "/views/create-point.html")
})

//Subindo servidor
server.listen(3000)