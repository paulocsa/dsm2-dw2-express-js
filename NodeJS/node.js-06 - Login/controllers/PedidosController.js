import express from "express";
const router = express.Router();
import Pedido from "../models/Pedido.js";

// ROTA PEDIDOS
router.get("/pedidos", (req, res) => {
    Pedido.findAll().then(pedidos => {
        res.render("pedidos", {
            pedidos: pedidos
        });
    }).catch(error => {
        console.log(error);
        res.status(500).send("Erro ao buscar pedidos");
    });
});

// ROTA DE CADASTRO DE PEDIDO
router.post("/pedidos/new", (req, res) => {
    const numero = req.body.numero;
    const valor = req.body.valor;
    Pedido.create({
        numero: numero,
        valor: valor
    }).then(() => {
        res.redirect("/pedidos");
    }).catch(error => {
        console.log(error);
        res.status(500).send("Erro ao cadastrar pedido");
    });
});

// ROTA DE EXCLUSÃO DE PEDIDO
router.get("/pedidos/delete/:id", (req, res) => {
    const id = req.params.id;
    Pedido.destroy({
        where: {
            id: id
        }
    }).then(() => {
        res.redirect("/pedidos");
    }).catch(error => {
        console.log(error);
        res.status(500).send("Erro ao excluir pedido");
    });
});

// ROTA DE EDIÇÃO DE PEDIDO
router.get("/pedidos/edit/:id", (req, res) => {
    const id = req.params.id;
    Pedido.findByPk(id).then(pedido => {
        res.render("pedidoEdit", {
            pedido: pedido
        });
    }).catch(error => {
        console.log(error);
        res.status(500).send("Erro ao buscar pedido para edição");
    });
});

// ROTA DE ALTERAÇÃO DO PEDIDO
router.post("/pedidos/update/:id", (req, res) => {
    const id = req.body.id;
    const numero = req.body.numero;
    const valor = req.body.valor;
    Pedido.update(
        {
            numero: numero,
            valor: valor
        },
        { where: { id: id } }
    ).then(() => {
        res.redirect("/pedidos");
    }).catch(error => {
        console.log(error);
        res.status(500).send("Erro ao atualizar pedido");
    });
});

// EXPORTANDO O MÓDULO DE ROTAS
export default router;
