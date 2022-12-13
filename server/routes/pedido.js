const Joi = require('joi');
const knl = require('../knl');
const securityConsts = require('../consts/security-consts');
const { custom } = require('joi');

knl.post("pedido"),async(req, resp) => {
    const schema = Joi.object({
        Fkcliente : Joi.number().min(1).required(),
        Fkendereco : Joi.number().min(1).required(),
        DataEmissao : Joi.date().raw().required(),
        DataEntrega : Joi.date().raw().required(),
        total : Joi.number().min(1).required()
    })
  
    knl.validate(req.body, schema);

    
    const pedido = knl.sequelize().models.pedido.build({
        Fkcliente    : req.body.Fkcliente, 
        Fkproduto    : req.body.Fkproduto,
        DataEmissao  :  new Date(),
        DataEntrega  : new Date(),
        status       : 1, 
    });

    await pedido.save();
    if (!req.body.pedidos || !Array.isArray(req.body.pedidos) || req.body.enderecos.length == 0){
        resp.end();        
        return;
    }

    for (const element of req.body.pedidos){
        const prodpedidos = knl.sequelize().models.pedidos.build({
            Fkcliente   : cliente.id,
            Fkendereco  : element.Fkendereco,
            DataEmissao : element.DataEmissao,
            DataEntrega : element.DataEntrega
            total       : element.total,
            status      : 1
        });

        await endereco.save();
    }
  

    resp.end();
},(securityConsts.USER_TYPE_PUBLIC);

knl.get('pedido', async(req, resp) => {

    const result = await knl.sequelize().models.pedido.findAll({
        where : {
            status : 1
        }
    });

    resp.json(result); 
});

knl.get('pedido/:id', async (req, resp) => {

    const pedidos = knl.objects.copy(await knl.sequelize().models.cliente.findAll({
        where : {
            status : 1,
            id : req.params.id
        }
    }));    

    // Se não veio o cliente desejado
    if (!pedidos || !Array.isArray(clientes) || pedidos.length == 0){
        resp.end();
        return;
    }

    const pedido = clientes[0];

    // Efetuamos a busca dos enderecos do cliente
    const enderecos = knl.objects.copy(await knl.sequelize().models.endereco.findAll({
        where : {
            fkcliente : req.params.id,
            status : 1
        }
    }));



