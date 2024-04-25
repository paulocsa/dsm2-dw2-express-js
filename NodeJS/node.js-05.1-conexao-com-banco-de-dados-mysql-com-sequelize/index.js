// Importando o Express com ES6 Modules
import express from 'express'


// Iniciando o Express na variável app
const app = express()

// importando o arquivo de conexao
import connection from './config/sequelize-config.js'


// Importando os Controllers (onde estão as rotas) 
import PedidosController from "./controllers/PedidosController.js"


// Importando os ClientesController (onde estão as rotas) 
import ClientesController from "./controllers/ClientesController.js"

// Importando os ProdutosController (onde estão as rotas) 
import ProdutosController from "./controllers/ProdutosController.js"


// realizando a contexao com o banco de dados
connection.authenticate().then(()=>{
    console.log("Conexão com o banco de dados feita com sucesso");
}).catch((error) => {
    console.log(error);
});

// criando o banco de dados se ele nao existir

connection.query(`CREATE DATABASE IF NOT EXISTS loja`).then(() => {
    console.log("Banco de dados criado!");
}).catch((error) => {
    console.log("Erro");
});

// Define o EJS como Renderizador de páginas
app.set('view engine', 'ejs');

// Define o uso da pasta "public" para uso de arquivos estáticos
app.use(express.static('public'));

// Configurando o express para receber dados vindo de formularios
app.use(express.urlencoded({extended: false}));

// Definindo o uso das rotas dos Controllers
app.use("/", PedidosController);
app.use("/", ProdutosController);
app.use("/", ClientesController);


// ROTA PRINCIPAL
app.get("/", function (req, res) {
    res.render("index");
});


// INICIA O SERVIDOR NA PORTA 8080
app.listen(8080, function (erro) {
    if (erro) {
        console.log("Ocorreu um erro!");

    } else {
        console.log("Servidor iniciado com sucesso!");
    }
});