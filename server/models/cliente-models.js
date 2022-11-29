const { Sequelize } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('cliente', {
        id : {
            type : Sequelize.INTEGER.UNSIGNED,
            primaryKey : true,
            autoIncrement : true,
            allowNull : false
        },
        Name : {
            type : Sequelize.STRING(100),
            allowNull : false
        },
        cnpj : {
            type : Sequelize.STRING(14),
            allowNull : false
        },
        razaosocial : {
            type : Sequelize.STRING(100),
            allowNull : true,
        },
        clientedesde : {
            type : Sequelize.INTEGER,
            allowNull : false
        },
        estado : {
            type : Sequelize.STRING(100),
            allowNull : false
        },
        cidade : {
            type : Sequelize.STRING(100),
            allowNull : false
        },
        endereco : {
            type : Sequelize.STRING(100),
            allowNull : false
        },
        bairro : {
            type : Sequelize.STRING(100),
            allowNull : false
        },
        numero: {
            type : Sequelize.STRING(100),
            allowNull : false
        },
         status : {
            type : Sequelize.INTEGER,
            allowNull : false
        }
})}