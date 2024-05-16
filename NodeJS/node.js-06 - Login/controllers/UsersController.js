import express from 'express';
const router = express.Router();
import User from "../models/User.js";
import bcrypt from "bcrypt";
import { where } from 'sequelize';


router.get("/login", (req, res) => {
    res.render('login');
});


router.get("/cadastro", (req, res) => {
    res.render('cadastro');
});


router.post("/createUser", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({where:{ email: email}}).then(user => {
        if (user == undefined){

            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);

            User.create({
                email:email,
                password: hash
            }).then(() => {
                res.redirect("/login");
            });

        }else {
            res.send('Usuario ja cadastrado! <br> <a href="/login">Tentar novamente.</a>');
        }
    });
});


router.post("/authenticate", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({where: {email: email}}).then(user => {
        if(user != undefined){
            const correct = bcrypt.compareSync(password, user.password);

            if(correct){
                res.redirect("/");
            }else{
                res.send('Senha invalida');
            }
        }else{
            res.send('Usuario nao cadastrado.<br><a href="/login">Tentar novamente</a>');
        }
    });

});


export default router;