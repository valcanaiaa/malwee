const { Sequelize} = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('pedido', {
        id : {
            type : Sequelize.INTEGER.UNSIGNED,
            primaryKey : true,
            autoIncrement : true,
            allowNull : false
        },
        Fkcliente : {
            type : Sequelize.INTEGER,
            allowNull : false
        },
        Fkendereco : {
            type : Sequelize.INTEGER,
            allowNull : false
        },
        DataEmissao : {
            type : Sequelize.DATE(),
            allowNull : false
        },
        DataEntrega : {
            type : Sequelize.DATE(),
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