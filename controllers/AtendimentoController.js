const Atedimento = require('../models/Atendimentos')
module.exports = app => {
    app.get('/atendimentos', (req, res) => {
        return Atedimento.all()
    })
    app.post('/atendimentos', (req, res) => {
        const attributes = req.body

        return Atedimento.create(attributes)
    })
}