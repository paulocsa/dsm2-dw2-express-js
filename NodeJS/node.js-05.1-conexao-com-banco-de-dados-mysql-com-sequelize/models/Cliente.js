import { Sequelize } from "sequelize";
import connection from "../config/sequelize-config.js";

const Cliente = connection.define('clientes',{
    nome: {type: Sequelize.STRING,allowNuell:false},
    cpf: {type: Sequelize.STRING,allowNuell:false},
    endereco: {type: Sequelize.STRING,allowNuell:false}
    });

    Cliente.sync({force: false});

    export default Cliente;