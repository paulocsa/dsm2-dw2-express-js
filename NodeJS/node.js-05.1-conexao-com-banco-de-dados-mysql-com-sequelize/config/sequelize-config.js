//importando o sequelize
import  Sequelize from "sequelize";

// Criando os dados de conexao com o banco 
const connection = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'loja',
    timezone: '-03:00'
});

export default connection;