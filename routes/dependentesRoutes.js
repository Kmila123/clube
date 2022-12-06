const express           = require('express');
const router            = express.Router();
const socioController  = require('../controllers/socioController');

//Rota responsável por exibir todas as socios
//router.get('/', socioController.criarsocio);
//Rota responsável por exibir o formulário de cadastro de socios
router.get('/', socioController.criarsocio);
//Rota responsável por salvar os dados da socio no banco de dados
router.post('/save', socioController.salvarsocio);

module.exports = router;