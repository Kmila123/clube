const socio = require('../models/dependente');

module.exports = class socioController {
    static criardependente(req, res) {
        res.render('dependente/criar-dependentes');
    }

    static async salvardependente(req, res) {
        const dependenteNovo = {
           nome: req.body.nome,
           cpf : req.body.cpf,
           dataNascimento : req.body.dataNascimento,
           id : req.body.socioid
        };
        await socio.create(dependenteNovo);
        res.redirect(`/dependente/${id}`);
    }

   
}