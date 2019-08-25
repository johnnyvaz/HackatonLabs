module.exports = app => {
    const { existsOrError } = app.api.validation
    
    const save = (req, res) => {
        const produto = { ...req.body }
        if(req.params.id) produto.id = req.params.id
        try {
            existsOrError(produto.nomeproduto, 'Nome não informado')
            
        } catch(msg) {
            res.status(400).send(msg)
        }
        
        if(produto.id) {
            app.db('produtos')
            .update(produto)
            .where({ produtoid: produto.id })
            .then(_ => res.status(201).send({ "status":true, produto}))
            .catch(err => res.status(500).send(err))
        } else {
            app.db('produtos')
            .insert(produto)
            .then(_ => res.status(201).send({ "status":true, produto}))
            .catch(err => res.status(500).send(err))
        }
    }
    
    // const get = (req, res) => {
    //     app.db('produtos')
    //     .then(produto => res.json(produto))
    //     .catch(err => res.status(500).send(err))            
    // }
    
    const get = async(req, res) => {
        const page = req.query.page || 1
        const limit = req.query.limit || 10
        
        //const result = await app.db('produtos').count('id').first()
        //.where({ id: certificados.id })
        //const count = result
        const pro = "produtos"
        const se = "setores"
        const su = "subsetores"
        app.db('produtos')
        .select( pro+'.produtoid', pro+'.produtonome', pro+'.descricao', pro+'.img', pro+'.preco', pro+'.etiquetar',
        pro+'.dataEtiqueta', pro+'.barcode', se+'.setorid', se+'.setornome', se+'.cor', su+'.subsetorid', su+'.subsetornome')
        .from('produtos')
        .leftJoin('subsetores', 'produtos.subsetor_id', 'subsetores.subsetorid')
        .leftJoin('setores','subsetores.setor_id', 'setores.setorid')
        .limit(limit).offset(page * limit - limit)
        .then(produtos => res.json({ data: { limit, page} , produtos }))
        .catch(err => res.status(500).send(err))
    }
        
    const getById = (req, res) => {
        const pro = "produtos"
        app.db('produtos')
        .select( pro+'.produtoid', pro+'.produtonome', pro+'.descricao', pro+'.img', pro+'.preco', pro+'.etiquetar',
        pro+'.dataEtiqueta', pro+'.barcode')
        .from('produtos')
        .where({ produtoid: req.params.id })
        .first()
        .then(produto => res.json(produto))
        .catch(err => res.status(500).send(err))
    }
    
    const remove = async(req,res) => {
        try {
            const rowsDeleted = await app.db('produtos')
            .where({ produtoid: req.params.id }).del()
            res.status(204).send()
        } catch(msg) {
            res.status(500).send(msg)
        }
    }
    
    return { save, get, getById, remove }
}