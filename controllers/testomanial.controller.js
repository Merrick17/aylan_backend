const Testomaniel = require('../models/testomonial.model')

module.exports.addTestomaniel = async (req, res) => {
  const description = req.body.desc
  const image = req.file.path

  try {
    let test = new Testomaniel({
      description: description,
      image: image,
    })
    let result = await test.save()
    res.status(200).json({
      message: 'success',
      result: result,
    })
  } catch (error) {
    console.error(error)
  }
}
module.exports.getAllTestomaniel = async (req, res) => {
  try {
    let result = await Testomaniel.find()
    res.status(200).json({
      message: 'success',
      result: result,
    })
  } catch (error) {
    console.error(error)
  }
}

module.exports.updateTestomaniel = async (req, res) => {
  let dataToUpdate = {}
  if (req.file.path != undefined) {
    dataToUpdate = {
      description: req.body.description,
      image: req.body.description,
    }
  } else {
    dataToUpdate = {
      description: req.body.description,
    }
  }
  const id = req.params.id
  try {
    let result = await Testomaniel.findByIdAndUpdate(id, dataToUpdate, {
      new: true,
    })
    res.status(200).json({
      message: 'success',
      result: result,
    })
  } catch (error) {
    console.error(error)
  }
}

module.exports.deleteTestomaniel = async (req, res) => {
  const id = req.params.id
  try {
    let result = await Testomaniel.findByIdAndRemove(id, {
      new: true,
    })
    res.status(200).json({
      message: 'success',
    })
  } catch (error) {
    console.error(error)
  }
}
