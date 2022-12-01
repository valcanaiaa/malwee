const Joi = require('joi');
const knl = require('../knl');
const securityConsts = require('../consts/security-consts');

knl.post('produto', async(req, resp) => {
    const schema = Joi.object({
        description : Joi.string().min(1).max(200).required(),
        preco : Joi.number().min(1).required(),
        FkGrupo : Joi.number().min(1).required(),
        FkSubGrupo:  Joi.number().min(1).required(),
        FkColecao :  Joi.number().min(1).required()

    })

    knl.validate(req.body, schema);

    const result = await knl.sequelize().models.produto.findAll({
        where : {
            description : req.body.description
        }
    });

    knl.createException('006', '', !knl.objects.isEmptyArray(result));

    const group = knl.sequelize().models.produto.build({
        description : req.body.description,
        preco : req.body.preco,
        FkGrupo : req.body.FkGrupo,
        FkSubGrupo : req.body.FkSubGrupo,
        FkColecao : req.body.FkColecao,
        status : 1
    });

    await group.save();
    resp.end();
},securityConsts.USER_TYPE_PUBLIC);

knl.get('produto', async(req, resp) => {

    const result = await knl.sequelize().models.produto.findAll({
        where : {
            status : 1
        }
    });
    resp.json(result);
});

knl.patch('produto/:id', async(req, resp) => {
    console.log(req.body);
    const result = await knl.sequelize().models.produto.update(
        { status : 2 },
        
        { where : { idproduto : req.params.id } })
        
    resp.json(result);
    resp.end();
});

knl.put('produto', async(req, resp) => {
    console.log(req.body)
    const result = await knl.sequelize().models.produto.update(
        
        {description : req.body.description, preco : req.body.preco},

        {where : { idproduto : req.body.idproduto}}
    )
    resp.json(result);
});
