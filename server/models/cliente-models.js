const { Sequelize } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('cliente', {
        id : {
            type : Sequelize.INTEGER.UNSIGNED,
            primaryKey : true,
            autoIncrement : true,
            allowNull : false
        },
        nomefantasia : {
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
       
         status : {
            type : Sequelize.INTEGER,
            allowNull : false
        }
})}