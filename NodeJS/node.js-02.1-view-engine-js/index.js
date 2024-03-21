// Importando o Express 
const express = require("express")

//Iniciando o express na variável app
const app = express();

// definindo o EJS para renderizar paginas HTML
app.set('view engine', 'ejs');


// criando a primeira rota (ROTA PRINCIPAL)
app.get("/", (req,res) => {
    // sera renderizdo a pagina inicial
    res.render('index');
});


// rota perfil

app.get("/perfil", (req,res) => {
    // sera renderizdo a pagina perfil
    res.sender('perfil');
});

// rodar o comando NPM INSTALL EJS

// rota videos( com varios parametros obrigatorios)

app.get("/videos", (req,res) => {

    const playlist = req.params.playlist
    const video = req.params.video;
    // sera renderizdo a pagina videos
    res.sender('videos');
});


// rota produto

app.get("/produtos/:produto?",(req,res)=>{
    const produto = req.params.produto
    if(produto){
        res.send(`<h2 style = 'text-align: center'>Página de ${produto}</h2>`)
    }
    else{
        res.send(`<h2 style = 'text-align: center'>Seja bem-vindo a página de produtos!</h2>`)
    }
});


//Iniciando o servidor 
app.listen(8080, function(erro){ //porta localhost , se fosse web seria 80
    if(erro) {
        console.log("Ocorreu um erro!")
    }
    else{
        console.log("Servidor iniciado com sucesso!")
    }
}) 
