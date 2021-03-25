const { Router } = require('express')
const { response } = require('express')

const router = Router()

router.get('/', async function(req, res = response){
    try {
        res.status(200).json({
            mensaje: 'Petición prueba de get',
            status: true
        })
    } catch (error) {
        res.status(400).json({
            mensaje: 'Ocurrió un error',
            status: false
        })
    }
})

module.exports = router