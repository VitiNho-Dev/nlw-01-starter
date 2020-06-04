const express = require("express")
const server = express()


// configurar a pasta publica
server.use(express.static("public"))

// configurar caminhos na minha aplicação 
// pagina inicial
// req: Requisição
// res: Resposta
server.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

server.get("/create-point", (req, res) => {
    res.sendFile(__dirname + "/views/create-point.html")
})

// ligar o servidor
server.listen(3000)