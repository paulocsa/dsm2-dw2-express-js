// IMPORTANDO O EXPRESS (CommomJS Modules)
const express = require("express");

// INICIANDO O EXPRESS NA VARIAVEL APP
const app = express();

// Iniciando o servidor
app.listen(8080, function(erro){
    if(erro){
        console.log("Ocrreu um erro!");
    }else {
        console.log("Servidor iniciado com sucesso");
    }
});