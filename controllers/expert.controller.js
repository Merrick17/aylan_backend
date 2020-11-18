const Expert = require("../models/expet.model");

module.exports.AddExpert = async (req, res) => {
  try {
    let newExpert = new Expert({
      name: req.body.name,
      image: req.file.path,
      description: req.body.desc,
      email: req.body.email,
    });
    let result = await newExpert.save();
    return res.json({
      msg: "Expert Added",
    });
  } catch (ex) {
    console.error(ex);
    return res.json({ err: ex });
  }
};

module.exports.getAllExperts = async (req, res) => {
  try {
    let result = await Expert.find();
    return res.status(200).json({ experts: result });
  } catch (ex) {
    res.json({ err: ex });
  }
};

module.exports.deleteExpert = async (req, res) => {
  try {
    await Expert.findByIdAndRemove(req.params.id);
    return res.status(200).json({ msg: "Expert Deleted" });
  } catch (ex) {
    res.json({ err: ex });
  }
};

module.exports.updateExpert = async (req, res) => {
  const id = req.params.id;
  try {
    const dataToUpdate = req.body;
    let { ...updateData } = dataToUpdate;
    if (req.file) {
    updateData ={ ...updateData, image: req.file.path };
    }
    const updateExpert = await Expert.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    return res.status(200).json(updateExpert);
  } catch (ex) {
    res.json({ err: ex });
  }
};
