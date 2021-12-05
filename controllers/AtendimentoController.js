module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('Sou um get'))
    app.post('/atendimentos', (req, res) => {
        console.log(req.body)
        res.send('Sou um post')
    })
}