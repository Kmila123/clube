const {DataTypes}   = require('sequelize');
const db            = require('../db/conn');

const Socio = db.define('dependente', {
    nome: {type:DataTypes.STRING, allowNull: false},
    email: {type:DataTypes.STRING, allowNull: false},
    cpf: {type:DataTypes.STRING, allowNull: false},
    dataNascimento: {type:DataTypes.DATE, allowNull: false},

});

module.exports = Socio;