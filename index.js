const express = require('express')
const rotas = require('./src/routes')
const cors = require('cors')

const porta = 3301
const app = express()

app.use(express.json())
app.use(cors({ origin: '*', exposedHeaders: '*' }))
app.use('/', rotas)

app.listen(porta, () => {
    console.log('\n\n###########################################')
	console.log('NO CORS INICIADO...')
	console.log('PORTA: ' + porta)
	console.log('###########################################\n\n') 
})