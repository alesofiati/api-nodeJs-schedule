const express = require('express')
const consign = require('consign')
module.exports = () => {
    const app = express()
    app.use(express.urlencoded({extends:true}))
    app.use(express.json())
    consign().include('controllers').into(app)
    return app
}
