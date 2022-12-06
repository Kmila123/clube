const {DataTypes}   = require('sequelize');
const db            = require('../db/conn');

const Socio = db.define('usuario', {
    nome: {type:DataTypes.STRING, allowNull: false},
    email: {type:DataTypes.STRING, allowNull: false},
    cpf: {type:DataTypes.STRING, allowNull: false},
    senha: {type:DataTypes.STRING, allowNull: false},
    dataNascimento: {type:DataTypes.DATE, allowNull: false},
    endereco: {type:DataTypes.STRING(200), allowNull: false},
    cidade: {type:DataTypes.STRING, allowNull: false},
    uf: {type:DataTypes.STRING, allowNull: false},
    tipo: {type:DataTypes.ENUM('socio', ' admin'), allowNull: true},
    status: {type:DataTypes.ENUM('aprovado', 'pendente', 'reprovado'), allowNull: true},

});

module.exports = Socio;