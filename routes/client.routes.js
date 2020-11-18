const router = require('express').Router()
const multer = require('multer')
const path = require('path')
const clientController = require('../controllers/client.controller')
const verifToken = require('../utils/verifyToken')
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads')
  },
  filename: (req, file, cb) => {
    //console.log(file)
    cb(
      null,
      new Date().toISOString().replace(/[/\\:]/g, "_") + file.originalname
    );
  },
})
const upload = multer({ storage: storage })
router.get('/', clientController.getAllClients)
router.post(
  '/create',
  verifToken,
  upload.single('image'),
  clientController.addClient,
)
router.delete('/:id/delete', verifToken, clientController.deleteClient)
router.put(
  '/:id/update',
  verifToken,
  upload.single('image'),
  clientController.updateClient,
)

module.exports = router
