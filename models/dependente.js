const {DataTypes}   = require('sequelize');
const db            = require('../db/conn');
const Socio = require('./socio');

const Dependente = db.define('dependente', {
    nome: {type:DataTypes.STRING, allowNull: false},
    cpf: {type:DataTypes.STRING, allowNull: false},
    dataNascimento: {type:DataTypes.DATE, allowNull: false},

});

Dependente.belongsTo(Socio); 
Clube.hasMany(Dependente); 
module.exports = Dependente;