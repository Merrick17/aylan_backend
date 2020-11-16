const Testomaniel = require('../models/testomonial.model')

module.exports.addTestomaniel = async (req, res) => {
  const description = req.body.desc
  const addedBy = req.body.name

  try {
    let test = new Testomaniel({
      description: description,
      name: addedBy,
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

  dataToUpdate = {
    description: req.body.description,
    name: req.body.name,
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
