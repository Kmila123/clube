const socio = require('../models/socio');

module.exports = class socioController {
    static criarsocio(req, res) {
        res.render('socios/criar-socio');
    }

    static async salvarsocio(req, res) {
        const socioNovo = {
           nome: req.body.nome,
           email : req.body.email,
           senha : req.body.senha,
           cpf : req.body.cpf,
           dataNascimento : req.body.dataNascimento,
           endereco : req.body.endereco,
           cidade : req.body.cidade,
           uf : req.body.uf,
           //tipo : req.body.tipo,
           //status : req.body.status
          
        };
        await socio.create(socioNovo);
        res.redirect('/socio');
    }

   
}