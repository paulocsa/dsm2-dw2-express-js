import express from 'express'
const app = express()
import multer from 'multer'
import connection from './config/sequelize-config.js'
// import Galeria from "./models/Galeria.js"
import GaleriaService from './services/GaleriaService.js'

app.use(express.static('public'))
app.set('view engine', 'ejs')

// Realizando a conexão com o banco
connection.authenticate().then(() => {
    console.log("Conexão com o banco de dados feita com sucesso!")
}).catch((error) => {
    console.log(error)
})
// Criando o banco caso ele não exista
connection.query(`CREATE DATABASE IF NOT EXISTS galeria;`).then(() => {
    console.log("O banco de dados está criado.")
}).catch((error) => {
    console.log(error)
})

// Configurando o MULTER
const upload = multer({dest: "public/uploads/"})

// ROTA PRINCIPAL
app.get("/", (req, res) => {
    GaleriaService.SelectPictures().then
    (
        imagens => {
        res.render('index', {
            imagens:imagens
        });
        }
    )
});

// ROTA DE UPLOAD
app.post("/upload", upload.single("file"), (req, res) => {
    const file = req.file.filename
    GaleriaService.Save(file)
    res.redirect("/")
})

const port = 8080
app.listen(port, (error) => {
    if(error){
        console.log(`Ocorreu um erro! ${error}`)
    } else {
        console.log(`Servidor rodando em http://localhost:${port}.`)
    }
})