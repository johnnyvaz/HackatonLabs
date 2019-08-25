const admin = require('./admin')

module.exports = app => {
    app.post('/signup', app.api.user.save)
    app.post('/signin', app.api.auth.signin)
    app.post('/validateToken', app.api.auth.validateToken)

    app.get('/', function (req, res) {
        res.send('Api MagaluAchei');
    });
    
    app.route('/users')
        // .all(app.config.passport.authenticate())
        .post(admin(app.api.user.save))
        .get(app.api.user.get)

    app.route('/users/:id')
        // .all(app.config.passport.authenticate())
        .put(admin(app.api.user.save))
        .get(admin(app.api.user.getById))
        .delete(admin(app.api.user.remove))

    app.route('/setores/')  //funcionando - ok
        // .all(app.config.passport.authenticate())
        .get(app.api.setores.get)
        .put(app.api.setores.save)
        .delete(app.api.setores.remove)
    
    app.route('/:setorid/produtos')  //funcionando - ok
        // .all(app.config.passport.authenticate())
        .get(app.api.setores.getSetPro)

    app.route('/setores/:id') //funcionando - ok
        // .all(app.config.passport.authenticate())
        .get(app.api.setores.getById)
        .put(app.api.setores.save)
        .delete(app.api.setores.remove)
    
    app.route('/subsetores/') 
        // .all(app.config.passport.authenticate())
        .get(app.api.subsetores.get)
        .put(app.api.subsetores.save)
        .delete(app.api.subsetores.remove)

    app.route('/subsetores/:id') 
        // .all(app.config.passport.authenticate())
        .get(app.api.subsetores.getById)
        .put(app.api.subsetores.save)
        .delete(app.api.subsetores.remove)
    
    app.route('/produtos/') 
        // .all(app.config.passport.authenticate())
        .get(app.api.produtos.get)
        .put(app.api.produtos.save)
        .delete(app.api.produtos.remove)

    app.route('/produtos/:id') 
        // .all(app.config.passport.authenticate())
        .get(app.api.produtos.getById)
        .put(app.api.produtos.save)
        .delete(app.api.produtos.remove)
    
        // rota com setores, subsetores e produtos agrupados 
    }