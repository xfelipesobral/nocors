const axios = require('axios')

const fetch = (req, res) => {
    const rota = req.params['0']
    const corpo = req.body
    const cabecalho = {
        ...req.headers,
        host: '',
        'user-agent': '',
        accept: '*/*'
    }

    console.log('Requisicao para: ' + rota)

    axios.post(rota, corpo, { headers: cabecalho })
        .then(ok => {
            res.send(ok.data)
        })
        .catch(err => {
            res.send(err)
        })
}

module.exports = fetch