import express from 'express';
const router = express.Router();
import Cliente from '../models/Cliente.js';
import { where } from 'sequelize';

//ROTA CLIENTES

router.get("/clientes", (req, res) => {
    Cliente.findAll().then(clientes => {
        res.render("clientes", {
            clientes:clientes
        });
    })
});

// rota de cadastro de cliente
router.post("/clientes/new", (req, res) => {
    const nome = req.body.nome;
    const cpf = req.body.cpf;
    const endereco = req.body.endereco;
    Cliente.create({
        nome: nome,
        cpf: cpf,
        endereco: endereco
    }).then( () => {
        res.redirect("/clientes");
    }).catch(erro => {
        console.log(erro);
    });
});


// rota delete
router.get("/clientes/delete/:id", (req, res) => {
    const id = req.params.id;

    Cliente.destroy({
        where:{
            id:id
        }
    }).then( () => {
        res.redirect("/clientes");
    }).catch(erro => {
        console.log(erro);
    });
});


// rota editar

router.get("/clientes/edit/:id", (req, res) => {
    const id = req.params.id;
    Cliente.findByPk(id).then(cliente => {
        res.render("clienteEdit", {
            cliente: cliente
        });
    });
});



// Rota para atualizar informações do cliente
router.post("/clientes/edit/:id", (req, res) => {
    const id = req.params.id;
    const nome = req.body.nome;
    const cpf = req.body.cpf;
    const endereco = req.body.endereco;

    // Atualiza os dados do cliente no banco de dados
    Cliente.update(
        {
            nome: nome,
            cpf: cpf,
            endereco: endereco
        },
        {
            where: {
                id: id
            }
        }
    )
    .then(() => {
        // Redireciona de volta para a página de clientes após a atualização
        res.redirect("/clientes");
    });
});









// EXPORTANDO O MODULO DE ROTAS 
export default router;