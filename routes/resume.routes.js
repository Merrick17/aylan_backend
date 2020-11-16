const router = require('express').Router()
const multer = require('multer')
const path = require('path')
const ResumeController = require('../controllers/resume.controller')
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
router.get('/', ResumeController.getAllResumes)
router.post(
  '/create',
  verifToken,
  upload.single('resume'),
  ResumeController.addResume,
)
router.delete('/:id/delete', verifToken, ResumeController.deleteResume)
router.put(
  '/:id/update',
  verifToken,
  upload.single('resume'),
  ResumeController.updateResume,
)

module.exports = router
