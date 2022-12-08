const { Sequelize } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('endereco', {
        id : {
            type : Sequelize.INTEGER.UNSIGNED,
            primaryKey : true,
            autoIncrement : true,
            allowNull : false
        },
        fkcliente : {
            type : Sequelize.INTEGER.UNSIGNED,
            allowNull : false
        },
        cep : {
            type : Sequelize.STRING(100),
            allowNull : false
        },
        pais : {
            type : Sequelize.STRING(100),
            allowNull : true,
        },
        estado : {
            type : Sequelize.STRING(100),
            allowNull : true,
        },
        cidade : {
            type : Sequelize.STRING(100),
            allowNull : true,
        },
        bairro : {
            type : Sequelize.STRING(100),
            allowNull : true,
        },
        rua : {
            type : Sequelize.STRING(100),
            allowNull : true,
        },
        numero : {
            type : Sequelize.STRING(14),
            allowNull : false
        },
        complemento : {
            type : Sequelize.STRING(100),
            allowNull : true,
        },
        status : {
            type : Sequelize.INTEGER,
            allowNull : false
        }
})}