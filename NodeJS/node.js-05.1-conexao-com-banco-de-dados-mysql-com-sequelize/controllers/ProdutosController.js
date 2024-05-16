import express from "express";
const router = express.Router();
import Produto from "../models/Produto.js";

// ROTA DE LISTAGEM DE PRODUTOS
router.get("/produtos", (req, res) => {
    Produto.findAll().then(produtos => {
        res.render("produtos", {
            produtos: produtos
        });
    }).catch(erro => {
        console.log(erro);
    });
});

// ROTA DE CADASTRO DE PRODUTO
router.post("/produtos/new", (req, res) => {
    const { nome, preco, categoria } = req.body;
    Produto.create({
        nome: nome,
        preco: preco,
        categoria: categoria
    }).then(() => {
        res.redirect("/produtos");
    }).catch(erro => {
        console.log(erro);
    });
});

// ROTA DE EXCLUSÃO DE PRODUTO
router.get("/produtos/delete/:id", (req, res) => {
    const id = req.params.id;
    Produto.destroy({
        where: {
            id: id
        }
    }).then(() => {
        res.redirect("/produtos");
    }).catch(erro => {
        console.log(erro);
    });
});

// ROTA DE EDIÇÃO DE PRODUTO
router.get("/produtos/edit/:id", (req, res) => {
    const id = req.params.id;
    Produto.findByPk(id).then(produto => {
        res.render("produtoEdit", {
            produto: produto
        });
    }).catch(erro => {
        console.log(erro);
    });
});

// ROTA DE ALTERAÇÃO DO PRODUTO
router.post("/produtos/update/:id", (req, res) => {
    const id = req.body.id;
    const { nome, preco, categoria } = req.body;
    Produto.update(
        {
            nome: nome,
            preco: preco,
            categoria: categoria
        },
        { where: { id: id } }
    ).then(() => {
        res.redirect("/produtos");
    }).catch(erro => {
        console.log(erro);
    });
});

// EXPORTANDO O MÓDULO DE ROTAS
export default router;
