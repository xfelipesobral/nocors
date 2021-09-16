const { Router } = require('express')
const fetch = require('../functions/fetch')

const rotas = Router()

rotas.route('/*')
    .post(fetch)

module.exports = rotas