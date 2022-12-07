const Joi = require('joi');
const knl = require('../knl');
const securityConsts = require('../consts/security-consts');

knl.post('cliente', async(req, resp) => {
    const schema = Joi.object({
        nomefantasia : Joi.string().min(1).max(100).required(),
        cnpj : Joi.string().min(1).max(14).required(),
        razaosocial : Joi.string().min(1).max(200).required(),
        clientedesde : Joi.date().raw().required(),
        cep : Joi.string().min(1).max(8).required(),
        pais: Joi.string().min(1).max(100).required(),
        estado: Joi.string().min(1).max(2).required(),
        cidade: Joi.string().min(1).max(100).required(),
        bairro: Joi.string().min(1).max(100).required(),
        rua: Joi.string().min(1).max(100).required(),
        numero: Joi.string().min(1).max(100).required(),
        complemento: Joi.string().min(1).max(100).required(),

    })

    knl.validate(req.body, schema);

    const result = await knl.sequelize().models.cliente.findAll({
        where : {
            nomefantasia : req.body.nomefantasia,
            cnpj : req.body.cnpj,
             razaosocial : req.body.razaosocial,
            clientedesde : req.body.clientedesde,
            cep  : req.body.cep,
            pais : req.body.pais,
            estado : req.body.estado,
            cidade : req.body.cidade,
            bairro : req.body.bairro,
            rua : req.body.rua,
            numero : req.body.numero,
            complemento : req.body.complemento
        }
    });

    knl.createException('006', '', !knl.objects.isEmptyArray(result));

    const group = knl.sequelize().models.cliente.build({
        nomefantasia : req.body.nomefantasia,
        cnpj : req.body.cnpj,
        razaosocial : req.body.razaosocial,
        clientedesde : req.body.clientedesde,
        cep  : req.body.cep,
        pais : req.body.pais,
        estado : req.body.estado,
        cidade : req.body.cidade,
        bairro : req.body.bairro,
        rua : req.body.rua,
        numero : req.body.numero,
        complemento : req.body.complemento,
        status : 1
    });

    await group.save();
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

knl.patch('cliente/:id', async(req, resp) => {
    const result = await knl.sequelize().models.cliente.update(
        { status : 2 },
        
        { where : { id : req.params.id }

    })
    resp.json({
        Client : result
    });
});

knl.put('cliente', async(req, resp) => {
    const result = await knl.sequelize().models.cliente.update(

        { nomefantasia : req.body.nomefantasia,
        razaosocial : req.body.razaosocial},

        {where : { id : req.body.id}}
    )
    resp.json(result);
});
