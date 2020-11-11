const multer = require('multer')
const router = require('express').Router()
const path = require('path')
const testomanielController = require('../controllers/testomanial.controller')
const verifToken = require('../utils/verifyToken')
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads')
  },
  filename: (req, file, cb) => {
    //console.log(file)
    cb(null, Date.now() + path.extname(file.originalname))
  },
})
const upload = multer({ storage: storage })
router.get('/', testomanielController.getAllTestomaniel)
router.post(
  '/add',
  upload.single('image'),
  verifToken,
  testomanielController.addTestomaniel,
)
router.put(
  '/:id/update',
  upload.single('image'),
  verifToken,
  testomanielController.updateTestomaniel,
)
router.delete(
  '/:id/delete',
  verifToken,
  testomanielController.deleteTestomaniel,
)

module.exports = router
