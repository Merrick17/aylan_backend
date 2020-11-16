const Resume = require('../models/resume.model')

module.exports.addResume = async (req, res) => {
  console.log(req.body)
  try {
    let newResume = new Resume({
      name: req.body.name,
      firstName: req.body.firstName,
      resume: req.file.path,
      phone: req.body.phone,
      email: req.body.email,
      offer: req.body.offer,
    })
    let result = await newResume.save()
    return res.json({
      msg: 'Offre Added',
    })
  } catch (ex) {
    console.error(ex)
    return res.json({ err: ex })
  }
}

module.exports.getAllResumes = async (req, res) => {
  try {
    let result = await Resume.find()
    return res.status(200).json({ Resumes: result })
  } catch (ex) {
    res.json({ err: ex })
  }
}

module.exports.deleteResume = async (req, res) => {
  try {
    await Resume.findByIdAndRemove(req.params.id)
    return res.status(200).json({ msg: 'Resume Deleted' })
  } catch (ex) {
    res.json({ err: ex })
  }
}

module.exports.updateResume = async (req, res) => {
  const id = req.params.id
  console.log('My Resume', id)
  try {
    const dataToUpdate = req.body
    const { ...updateData } = dataToUpdate
    const updateUser = await Resume.findByIdAndUpdate(id, updateData, {
      new: true,
    })
    return res.status(200).json(updateUser)
  } catch (ex) {
    res.json({ err: ex })
  }
}
