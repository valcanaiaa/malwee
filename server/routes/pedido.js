const Joi = require('joi');
const knl = require('../knl');
const securityConsts = require('../consts/security-consts');
const { custom } = require('joi');

knl.post("pedido"),async(req, resp) => {
    const schema = Joi.object({
        Fkcliente   : Joi.number().min(1).required(),
        Fkendereco  : Joi.number().min(1).required(),
        DataEmissao : Joi.date().raw().required(),
        DataEntrega : Joi.date().raw().required(),
        total       : Joi.number().min(1).required(),
        produtos : Joi.array().items(Joi.object({
            fkpedido      : Joi.number().min(1).required(),
            Fkproduto     : Joi.number().min(1).required(),
            quatidade     : Joi.number().min(0.01).required(),
            valorUnitario : Joi.number().min(0.01).required(),
            desconto      : Joi.number().min(0).required(),
            acrescimo     : Joi.number().min(0).required(),
            total         : Joi.number().min(0.01).required(),
        }))
        

    })
  
    knl.validate(req.body, schema);

    
    const pedido = knl.sequelize().models.pedido.build({
        Fkcliente    : req.body.Fkcliente, 
        Fkproduto    : req.body.Fkproduto,
        DataEmissao  :  req.body.DataEmissao,
        DataEntrega  : req.body.DataEntrega,
        status       : 1, 
    });

    await pedido.save();
    if (!req.body.pedidos || !Array.isArray(req.body.pedidos) || req.body.enderecos.length == 0){
        resp.end();        
        return;
    }

    for (const element of req.body.pedidos){
        const prodpedidos = knl.sequelize().models.pedidos.build({
            Fkcliente   : element.Fkcliente,
            Fkendereco  : element.Fkendereco,
            DataEmissao : element.DataEmissao,
            DataEntrega : element.DataEntrega,
            total       : element.total,
            status      : 1
        });

        await prodpedidos.save();
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

   
    if (!pedidos || !Array.isArray(clientes) || pedidos.length == 0){
        resp.end();
        return;
    }

    const pedido = pedidos[0];

   
    const enderecos = knl.objects.copy( await knl.sequelize().models.pedidos.findAll({
        where : {
            fkcliente : req.params.id,
            status : 1
        }
}))

pedido.pedidos = produtos;

resp.json(pedido);
});

knl.patch('pedido/:id', async(req, resp) => {
    const result = await knl.sequelize().models.pedidos.update(
        { status : 2 },
        
        { where : { id : req.params.id }

    })
    resp.json({
        pedido : result
    });
});

knl.put('pedido/:id', async(req, resp) => {
    const schema = Joi.object({
            Fkcliente   : req.body.Fkcliente,  
            Fkendereco  : req.body.Fkendereco,
            DataEmissao : req.body.DataEmissao,
            DataEntrega : req.body.DataEntrega,
            total       : req.body.total
        })
        
    knl.validate(req.body, schema);

    const result = await knl.sequelize().models.pedido.update(
        {
            Fkcliente   : cliente.id,
            Fkendereco  : element.Fkendereco,
            DataEmissao : element.DataEmissao,
            DataEntrega : element.DataEntrega,
            total       : element.total,
            status         : 1
        },
        
        { where : { id : req.params.id }}
    )
   
    await knl.sequelize().models.pedido.destroy({
        where : {
            fkpedido : req.params.id
        }
    })


    if (!req.body.pedidos || !Array.isArray(req.body.pedido) || req.body.pedidos.length == 0){
        resp.end();        
        return;
    }

    for (const element of req.body.pedidos){
        const pedido = knl.sequelize().models.pedido.build({
            Fkcliente   : cliente.id,
            Fkendereco  : element.Fkendereco,
            DataEmissao : element.DataEmissao,
            DataEntrega : element.DataEntrega,
            total       : element.total,
            status      : 1
        });

        await pedidos.save();
    }
    

    resp.end();
});