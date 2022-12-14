const { Sequelize} = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('prodpedidos', {
        id : {
            type : Sequelize.INTEGER.UNSIGNED,
            primaryKey : true,
            autoIncrement : true,
            allowNull : false
        },
        Fkpedido : {
            type : Sequelize.INTEGER,
            allowNull : false
        },
        Fkproduto : {
            type : Sequelize.INTEGER,
            allowNull : false
        },
        quantidade : {
            type : Sequelize.DECIMAL(6,2),
            allowNull : false
        },
        valorUnitario : {
            type : Sequelize.DECIMAL(6,2),
            allowNull : false
        },
        desconto :  {
            type : Sequelize.DECIMAL(6,2),
            allowNull : false
         },
        acrescimo :  {
            type : Sequelize.DECIMAL(6,2),
            allowNull : false
         },
        total : {
            type : Sequelize.DECIMAL(6,2),
            allowNull: false
        },
        status : {
            type : Sequelize.INTEGER,
            allowNull : false
        }
    })
}