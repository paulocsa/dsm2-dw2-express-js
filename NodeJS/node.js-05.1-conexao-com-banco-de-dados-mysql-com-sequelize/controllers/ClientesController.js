import express from 'express';
const router = express.Router();
import Cliente from '../models/Cliente.js';

//ROTA CLIENTES

router.get("/clientes", (req, res) => {
    Cliente.findAll().then(clientes => {
        res.render("clientes", {
            clientes:clientes
        });
    })
});


// EXPORTANDO O MODULO DE ROTAS 
export default router;