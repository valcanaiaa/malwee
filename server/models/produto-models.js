const { Sequelize } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('produto', {
        idproduto : {
            type : Sequelize.INTEGER.UNSIGNED,
            primaryKey : true,
            autoIncrement : true,
            allowNull : false
        },
        description : {
            type : Sequelize.STRING(100),
            allowNull : false
        },
        preco  : {
            type : Sequelize.DECIMAL(6,2),
            allowNull : false
        },
        FkGrupo : {
            type : Sequelize.INTEGER,
            allowNull : false
        },
        FkSubGrupo : {
            type : Sequelize.INTEGER,
            allowNull : false
        },
        FkColecao : {
            type : Sequelize.INTEGER,
            allowNull : false
        },
        status : {
            type : Sequelize.INTEGER,
            allowNull : false
        }
    })
}