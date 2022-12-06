const Joi = require('joi');
const knl = require('../knl');
const securityConsts = require('../consts/security-consts');

knl.post('cliente', async(req, resp) => {
    const schema = Joi.object({
        nomefantasia : Joi.string().min(1).max(100).required(),
        cnpj : Joi.string().min(12).max(18).required(),
        razaosocial : Joi.string().min(1).max(200).required(),
        clientedesde : Joi.date().raw().required()
    })

    knl.validate(req.body, schema);

    const result = await knl.sequelize().models.cliente.findAll({
        where : {
            nomefantasia : req.body.nomefantasia,
            cnpj : req.body.cnpj,
        razaosocial : req.body.razaosocial,
        clientedesde : req.body.clientedesde
        }
    });

    knl.createException('006', '', !knl.objects.isEmptyArray(result));

    const group = knl.sequelize().models.cliente.build({
        nomefantasia : req.body.nomefantasia,
        cnpj : req.body.cnpj,
        razaosocial : req.body.razaosocial,
        clientedesde : req.body.clientedesde,
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
