const Atedimento = require('../models/Atendimentos')
const moment = require("moment");
module.exports = app => {
    app.get('/atendimentos', (req, res) => {
        return Atedimento.all(res)
    })

    app.get('/atendimento/:id', (req, res) => {
        const id = parseInt(req.params.id)
        if(!id){
            return res.status(400).json({ message: 'Informe o id do atendimento' })
        }
        return Atedimento.findById(id, res)
    })

    app.patch('/atendimentos/:id/update', (req, res) => {
        const id = parseInt(req.params.id)
        const attributes = req.body
        if(attributes.data){
            attributes.data = moment(attributes.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        }

        return Atedimento.update({id,attributes, response:res})
    })

    app.post('/atendimentos', (req, res) => {
        const attributes = req.body
        const data = moment(attributes.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        const dataIsValid = moment(data).isSameOrAfter(new Date())
        const clienteIsValid = attributes.cliente.length >= 5

        const validation = [
            {
                nome: 'data',
                valid: dataIsValid,
                message: 'Data deve ser maior ou igual a data atual'
            },
            {
                nome: 'cliente',
                valid: clienteIsValid,
                message: 'O nome do cliente deve ter pelo menos 5 caracteres'
            }
        ]

        const erros = validation.filter(field => !field.valid)

        if(erros.length){
            return res.status(400).json(erros)
        }

        return Atedimento.create({...attributes, data}, res)
    })

    app.delete('/atendimento/:id', (req, res) => {
        const id = parseInt(req.params.id)
        if(!id){
            return res.status().json({ message: 'Informe o id do atendimento, para remoção' })
        }
        return Atedimento.destroy(id, res)
    })
}