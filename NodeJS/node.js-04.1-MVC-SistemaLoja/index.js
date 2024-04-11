// Importando o Express com ES6 Modules
import express from 'express'


// Iniciando o Express na variável app
const app = express()


// Importando os Controllers (onde estão as rotas) 
import PedidosController from "./controllers/PedidosController.js" 


// Importando os ClientesController (onde estão as rotas) 
import ClientesController from "./controllers/ClientesController.js"

// Importando os ProdutosController (onde estão as rotas) 
import ProdutosController from "./controllers/ProdutosController.js"


// Define o EJS como Renderizador de páginas
app.set('view engine', 'ejs');


// Define o uso da pasta "public" para uso de arquivos estáticos
app.use(express.static('public'));


// Definindo o uso das rotas dos Controllers
app.use("/", PedidosController);
app.use("/", ProdutosController);
app.use("/", ClientesController);



// ROTA PRINCIPAL
app.get("/",function(req,res){
    res.render("index");
});




// INICIA O SERVIDOR NA PORTA 8080
app.listen(8080,function(erro){
    if(erro) {
        console.log("Ocorreu um erro!");

    }else{
        console.log("Servidor iniciado com sucesso!");
    }
});