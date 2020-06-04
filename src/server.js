const express = require("express")
const server = express()


// configurar caminhos na minha aplicação 
// pagina inicial
// req: Requisição
// res: Resposta
server.get("/", (req, res) => {
    
})

// ligar o servidor
server.listen(3000)