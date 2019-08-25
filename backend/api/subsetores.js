module.exports = app => {
    const { existsOrError, isNumber } = app.api.validation
    
    const save = (req, res) => {
        const subsetor = { ...req.body }
        if(req.params.id) subsetor.id = req.params.id
        try {
            existsOrError(subsetor.cor, 'Cor não informado')
            existsOrError(subsetor.subsetornome, 'Nome não informado')
            existsOrError(subsetor.cod, 'Código não informada')
            
        } catch(msg) {
            res.status(400).send(msg)
        }

        if(subsetor.id) {
            app.db('subsetores')
                .update(subsetor)
                .where({ id: subsetor.id })
                .then(_ => res.status(201).send({ "status":true, subsetor}))
                .catch(err => res.status(500).send(err))
        } else {
            app.db('subsetores')
                .insert(subsetor)
                .then(_ => res.status(201).send({ "status":true, subsetor}))
                .catch(err => res.status(500).send(err))
        }
    }

    const get = (req, res) => {
        app.db('subsetores')
            .then(subsetor => res.json(subsetor))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        const pro = "produtos"
        const su = "subsetores"
        app.db('subsetores')
        .select( pro+'.produtonome', pro+'.descricao', pro+'.img', pro+'.preco', pro+'.etiquetar',
        pro+'.dataEtiqueta', pro+'.barcode', su+'.subsetorid', su+'.subsetornome')
        .from('subsetores')
        .leftJoin('produtos','produtos.produtoid', 'subsetores.subsetorid')
        .where({ subsetorid: req.params.id })
        .first()
        .then(setores => res.json(setores))
        .catch(err => res.status(500).send(err))

        
        app.db('subsetores')
            .where({ subsetorid: req.params.id })
            .first()
            .then(subsetor => res.json(subsetor))
            .catch(err => res.status(500).send(err))
    }

    const remove = async(req,res) => {
        try {
            const rowsDeleted = await app.db('subsetores')
            .where({ id: req.params.id }).del()
            res.status(204).send()
        } catch(msg) {
            res.status(500).send(msg)
        }
    }

    return { save, get, getById, remove }
}