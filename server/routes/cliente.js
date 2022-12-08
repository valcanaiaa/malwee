const Joi = require('joi');
const knl = require('../knl');
const securityConsts = require('../consts/security-consts');
const { custom } = require('joi');

knl.post('cliente', async(req, resp) => {
    const schema = Joi.object({
        cnpj         : Joi.string().min(11).max(14).required(),
        razaosocial  : Joi.string().min(1).max(100).required(),
        nomefantasia : Joi.string().min(1).max(100).required(),
        clientedesde : Joi.string().min(10).max(10).allow(''),
        enderecos : Joi.array().items(Joi.object({
            cep : Joi.string().min(8).max(8).allow(''),
            pais : Joi.string().min(1).max(100).required(),
            estado : Joi.string().min(1).max(100).required(),
            cidade : Joi.string().min(1).max(100).required(),
            bairro : Joi.string().min(1).max(100).required(),
            rua : Joi.string().min(1).max(100).required(),
            numero : Joi.string().min(1).max(14).required(),
            complemento : Joi.string().min(1).max(100).allow('')
        }))
    })

    knl.validate(req.body, schema);

    // Salvando os dados do cliente
    //--------------------------------------------------------------------------------------------------
    const cliente = knl.sequelize().models.cliente.build({
        cnpj           : req.body.cnpj, 
        razaosocial    : req.body.razaosocial,
        nomefantasia   : req.body.nomefantasia,
        clientedesde   : new Date(),
        status         : 1, 
    });

    await cliente.save();
    //--------------------------------------------------------------------------------------------------    

    // Salvando os endereços do cliente
    //--------------------------------------------------------------------------------------------------
    if (!req.body.enderecos || !Array.isArray(req.body.enderecos) || req.body.enderecos.length == 0){
        resp.end();        
        return;
    }

    for (const element of req.body.enderecos){
        const endereco = knl.sequelize().models.endereco.build({
            fkcliente   : cliente.id,
            cep         : element.cep,
            pais        : element.pais,
            estado      : element.estado,
            cidade      : element.cidade,
            bairro      : element.bairro,
            rua         : element.rua,
            numero      : element.numero,
            complemento : element.complemento,
            status      : 1
        });

        await endereco.save();
    }
    //--------------------------------------------------------------------------------------------------

    resp.end();
},securityConsts.USER_TYPE_PUBLIC);

knl.get('cliente', async(req, resp) => {

    const result = await knl.sequelize().models.cliente.findAll({
        where : {
            status : 1
        }
    });

    resp.json(result); 
});

knl.get('cliente/:id', async (req, resp) => {

    const clientes = knl.objects.copy(await knl.sequelize().models.cliente.findAll({
        where : {
            status : 1,
            id : req.params.id
        }
    }));    

    // Se não veio o cliente desejado
    if (!clientes || !Array.isArray(clientes) || clientes.length == 0){
        resp.end();
        return;
    }

    const cliente = clientes[0];

    // Efetuamos a busca dos enderecos do cliente
    const enderecos = knl.objects.copy(await knl.sequelize().models.endereco.findAll({
        where : {
            fkcliente : req.params.id,
            status : 1
        }
    }));

    cliente.enderecos = enderecos;

    resp.json(cliente);
});

knl.patch('cliente/:id', async(req, resp) => {
    const result = await knl.sequelize().models.cliente.update(
        { status : 2 },
        
        { where : { id : req.params.id }

    })
    resp.json({
        Client : result
    });
});

knl.put('cliente/:id', async(req, resp) => {
    const schema = Joi.object({
        cnpj         : Joi.string().min(11).max(14).required(),
        razaosocial  : Joi.string().min(1).max(100).required(),
        nomefantasia : Joi.string().min(1).max(100).required(),
        clientedesde : Joi.string().min(10).max(10).allow(''),
        enderecos : Joi.array().items(Joi.object({
            cep : Joi.string().min(8).max(8).allow(''),
            pais : Joi.string().min(1).max(100).required(),
            estado : Joi.string().min(1).max(100).required(),
            cidade : Joi.string().min(1).max(100).required(),
            bairro : Joi.string().min(1).max(100).required(),
            rua : Joi.string().min(1).max(100).required(),
            numero : Joi.string().min(1).max(14).required(),
            complemento : Joi.string().min(1).max(100).allow('')
        }))
    })

    knl.validate(req.body, schema);

    // Salvando os dados do cliente
    //--------------------------------------------------------------------------------------------------
    const result = await knl.sequelize().models.cliente.update(
        {
            cnpj           : req.body.cnpj, 
            razaosocial    : req.body.razaosocial,
            nomefantasia   : req.body.nomefantasia,
            clientedesde   : new Date(),
            status         : 1
        },
        
        { where : { id : req.params.id }

    })
    //--------------------------------------------------------------------------------------------------    

    // Salvando os endereços do cliente
    //--------------------------------------------------------------------------------------------------
    await knl.sequelize().models.endereco.destroy({
        where : {
            fkcliente : req.params.id
        }
    })


    if (!req.body.enderecos || !Array.isArray(req.body.enderecos) || req.body.enderecos.length == 0){
        resp.end();        
        return;
    }

    for (const element of req.body.enderecos){
        const endereco = knl.sequelize().models.endereco.build({
            fkcliente   : req.params.id,
            cep         : element.cep,
            pais        : element.pais,
            estado      : element.estado,
            cidade      : element.cidade,
            bairro      : element.bairro,
            rua         : element.rua,
            numero      : element.numero,
            complemento : element.complemento,
            status      : 1
        });

        await endereco.save();
    }
    //--------------------------------------------------------------------------------------------------

    resp.end();
});
