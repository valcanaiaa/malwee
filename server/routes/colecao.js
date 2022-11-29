const Joi = require('joi');
const knl = require('../knl');
const securityConsts = require('../consts/security-consts');

knl.post('colecao', async(req, resp) => {
    const schema = Joi.object({
        description : Joi.string().min(1).max(200).required()
    })

    knl.validate(req.body, schema);

    const result = await knl.sequelize().models.colecao.findAll({
        where : {
            description : req.body.description
        }
    });

    knl.createException('006', '', !knl.objects.isEmptyArray(result));

    const user = knl.sequelize().models.colecao.build({
        description : req.body.description,
        status : 1
    });

    await user.save();
    resp.end();
},securityConsts.USER_TYPE_PUBLIC);

knl.get('colecao/', async(req, resp) => {

    const result = await knl.sequelize().models.colecao.findAll({
        where : {
            status : 1
        }
    });

    resp.json(result); 
});

knl.patch('colecao/:id', async(req, resp) => {
    const result = await knl.sequelize().models.colecao.update(
        { status : 2 },
        
        { where : { id : req.params.id } })
        
    resp.json(result);
    resp.end();
});

knl.put('colecao/:id', async(req, resp) => {
    const schema = Joi.object({
        description : Joi.string().min(1).max(100).required()
    })
    knl.validate(req.body, schema);
    
    const result = await knl.sequelize().models.colecao.update(

        {description : req.body.description},

        {where : { id : req.params.id}}
    )
    resp.json(result);
});


