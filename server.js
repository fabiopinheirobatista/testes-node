const http = require("http")
const host = "127.0.0.1"
const port = 3000

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    res.end('Ola Mundo! \n Servidor rodando no endereco: http://127.0.0.1:3000');
    console.log(`Server running at http://${host}:${port}`)
})

server.listen(port, host, ()=>{
    console.log(`Server running at http://${host}:${port}`)
})