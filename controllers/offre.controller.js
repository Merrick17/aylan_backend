const Offer = require('../models/offre.model')

module.exports.addOffer = async (req, res) => {
  try {
    let newOffer = new Offer({
      title: req.body.title,
      description: req.body.desc,
      requirement: req.body.rec,
      minSalary: req.body.salary,
      ref: req.body.ref,
    })
    let result = await newOffer.save()
    return res.status(200).json({
      msg: 'Offre Added',
    })
  } catch (ex) {
    console.error(ex)
    return res.json({ err: ex })
  }
}

module.exports.getAllOffers = async (req, res) => {
  try {
    let result = await Offer.find()
    return res.status(200).json({ offers: result })
  } catch (ex) {
    res.json({ err: ex })
  }
}

module.exports.deleteOffer = async (req, res) => {
  try {
    await Offer.findByIdAndRemove(req.params.id)
    return res.status(200).json({ msg: 'Offer Deleted' })
  } catch (ex) {
    res.json({ err: ex })
  }
}

module.exports.updateOffer = async (req, res) => {
  const id = req.params.id
  try {
    const dataToUpdate = req.body
    let { ...updateData } = dataToUpdate;
    if (req.file) {
      updateData = { ...updateData, image: req.file.path };
    }
    const updatedOffer = await Offer.findByIdAndUpdate(id, updateData, {
      new: true,
    })

    return res.status(200).json(updatedOffer)
  } catch (ex) {
    res.json({ err: ex })
  }
}
