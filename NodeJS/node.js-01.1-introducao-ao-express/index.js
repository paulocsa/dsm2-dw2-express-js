// Importando o Express 
const express = require("express")

//Iniciando o express na variável app
const app = express();

// definindo o EJS para renderizar paginas HTML
app.set('view engine', 'ejs');


// criando a primeira rota (ROTA PRINCIPAL)
app.get("/", (req,res) => {
    res.send("<h1>Bem Vindo ao Site</h1>");
});


// rota perfil

app.get("/perfil/:nome", (req,res) => { 
    // :nome  -> é um parametro obrigatorio
    const nome = req.params.nome;
    // coletando o parametro da nota e gravando na variavel nome
    res.send(`<h2>Olá, ${nome}. Seja bem-vindo ao seu perfil!</h2>`);
});



// rota videos( com varios parametros obrigatorios)

app.get("/videos/:playlist/:video", (req,res) => {

    const playlist = req.params.playlist
    const video = req.params.video;
    res.send(`<h2>Voce ta na playlist ${playlist}<br> Reproduzindo o video
     <strong>${video}</strong></h2>`);
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

