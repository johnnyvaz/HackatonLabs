module.exports = app => {
    const { existsOrError, isNumber } = app.api.validation
    
    const save = (req, res) => {
        const setor = { ...req.body }
        if(req.params.id) setor.id = req.params.id
        try {
            existsOrError(setor.cor, 'Cor não informado')
            existsOrError(setor.setornome, 'Nome não informado')
            existsOrError(setor.cod, 'Código não informada')
            
        } catch(msg) {
            res.status(400).send(msg)
        }

        if(setor.id) {
            app.db('setores')
                .update(setor)
                .where({ setorid: setor.id })
                .then(_ => res.status(201).send({ "status":true, setor}))
                .catch(err => res.status(500).send(err))
        } else {
            app.db('setores')
                .insert(setor)
                .then(_ => res.status(201).send({ "status":true, setor}))
                .catch(err => res.status(500).send(err))
        }
    }

    const get = (req, res) => {
        app.db('setores')
            .then(setor => res.json(setor))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        const pro = "produtos"
        const su = "subsetores"
        const se = "setores"
        app.db('subsetores')
        .select( pro+'.produtonome', pro+'.descricao', pro+'.img', pro+'.preco', pro+'.etiquetar',
        pro+'.dataEtiqueta', pro+'.barcode', su+'.subsetorid', su+'.subsetornome', se+'.setornome')
        .from('subsetores')
        .leftJoin('produtos','produtos.produtoid', 'subsetores.subsetorid')
        .leftJoin('setores','setores.setorid', 'subsetores.setor_id')
        .where({ subsetorid: req.params.id })
        .first()
        .then(setores => res.json(setores))
        .catch(err => res.status(500).send(err))
    }

    const getSetPro = (req, res) => {
        const pro = "produtos"
        const se = "setores"
        app.db('setores')
        .select( pro+'.produtonome', pro+'.descricao', pro+'.img', pro+'.preco', pro+'.etiquetar',
        pro+'.dataEtiqueta', pro+'.barcode', se+'.setornome')
        .from('setores')
        .leftJoin('produtos','produtos.produtoid', 'setores.setorid')
        .where({ setorid: req.params.setorid })
        .then(setores => res.json({data: {setores}}))
        .catch(err => res.status(500).send(err))
    }

    const remove = async(req,res) => {
        try {
            const rowsDeleted = await app.db('setores')
            .where({ setorid: req.params.id }).del()
            res.status(204).send()
        } catch(msg) {
            res.status(500).send(msg)
        }
    }

    return { save, get, getById, getSetPro, remove }
}