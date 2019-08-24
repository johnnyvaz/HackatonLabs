module.exports = app => {
    const { existsOrError } = app.api.validation
    
    const save = (req, res) => {
        const produto = { ...req.body }
        if(req.params.id) produto.id = req.params.id
        try {
            existsOrError(produto.nome, 'Nome não informado')
            
        } catch(msg) {
            res.status(400).send(msg)
        }

        if(produto.id) {
            app.db('produtos')
                .update(produto)
                .where({ id: produto.id })
                .then(_ => res.status(201).send({ "status":true, produto}))
                .catch(err => res.status(500).send(err))
        } else {
            app.db('produtos')
                .insert(produto)
                .then(_ => res.status(201).send({ "status":true, produto}))
                .catch(err => res.status(500).send(err))
        }
    }

    const get = (req, res) => {
        app.db('produtos')
            .then(produto => res.json(produto))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('produtos')
            .where({ id: req.params.id })
            .first()
            .then(produto => res.json(produto))
            .catch(err => res.status(500).send(err))
    }

    const remove = async(req,res) => {
        try {
            const rowsDeleted = await app.db('produtos')
            .where({ id: req.params.id }).del()
            res.status(204).send()
        } catch(msg) {
            res.status(500).send(msg)
        }
    }

    return { save, get, getById, remove }
}