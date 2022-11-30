const Joi = require('joi');
const knl = require('../knl');
const securityConsts = require('../consts/security-consts');

knl.post('cliente', async(req, resp) => {
    const schema = Joi.object({
        fantasyName : Joi.string().min(1).max(100).required(),
        cnpj : Joi.number().min(14).max(14).required(),
        socialreason : Joi.string().min(1).max(200).required(),
        customerSince : Joi.date().required()
    })

    knl.validate(req.body, schema);

    const result = await knl.sequelize().models.client.findAll({
        where : {
            fantasyName : req.body.fantasyName
        }
    });

    knl.createException('006', '', !knl.objects.isEmptyArray(result));

    const group = knl.sequelize().models.cliente.build({
        fantasyName : req.body.description,
        cnpj : req.body.cnpj,
        socialreason : req.body.company,
        customersince : req.body.customersince,
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

knl.put('cliente/:id', async(req, resp) => {
    const result = await knl.sequelize().models.cliente.update(

        {description : Joi.string().min(1).max(200).required()},

        {where : { id : req.params.id}}
    )
    resp.json({
        Client : result
    });
});
