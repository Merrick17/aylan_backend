const router = require('express').Router()
const serviceController = require('../controllers/service.controller')
const verifToken = require('../utils/verifyToken')
router.get('/', serviceController.getAllServices)
router.post('/create', verifToken, serviceController.addService)
router.delete('/:id/delete', verifToken, serviceController.deleteService)
router.put('/:id/update', verifToken, serviceController.updateService)

module.exports = router
