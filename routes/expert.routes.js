const router = require('express').Router()
const multer = require('multer')
const path = require('path')
const ExpertController = require('../controllers/expert.controller')
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
router.get('/', ExpertController.getAllExperts)
router.post(
  '/create',
  verifToken,
  upload.single('image'),
  ExpertController.AddExpert,
)
router.delete('/:id/delete', verifToken, ExpertController.deleteExpert)
router.put(
  '/:id/update',
  verifToken,
  upload.single('image'),
  ExpertController.updateExpert,
)

module.exports = router
