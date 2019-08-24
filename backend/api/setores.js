module.exports = app => {
    const { existsOrError, isNumber } = app.api.validation
    
    const save = (req, res) => {
        const setor = { ...req.body }
        if(req.params.id) setor.id = req.params.id
        try {
            existsOrError(setor.cor, 'Cor não informado')
            existsOrError(setor.nome, 'Nome não informado')
            existsOrError(setor.cod, 'Código não informada')
            
        } catch(msg) {
            res.status(400).send(msg)
        }

        if(setor.id) {
            app.db('setores')
                .update(setor)
                .where({ id: setor.id })
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
        app.db('setores')
            .where({ id: req.params.id })
            .first()
            .then(setor => res.json(setor))
            .catch(err => res.status(500).send(err))
    }

    const remove = async(req,res) => {
        try {
            const rowsDeleted = await app.db('setores')
            .where({ id: req.params.id }).del()
            res.status(204).send()
        } catch(msg) {
            res.status(500).send(msg)
        }
    }

    return { save, get, getById, remove }
}