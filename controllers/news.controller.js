const News = require("../models/news.model");

module.exports.addNews = async (req, res) => {
  try {
    let newNews = new News({
      title: req.body.title,
      body: req.body.body,
    image: req.file.path
    });
    let result = await newNews.save();
    return res.status(200).json({
      msg: "News Added",
    });
  } catch (ex) {
    console.error(ex);
    return res.json({ err: ex });
  }
};

module.exports.getAllNews = async (req, res) => {
  try {
    let result = await News.find();
    return res.status(200).json({ news: result });
  } catch (ex) {
    res.json({ err: ex });
  }
};

module.exports.deleteNews = async (req, res) => {
  try {
    await News.findByIdAndRemove(req.params.id);
    return res.status(200).json({ msg: "News Deleted" });
  } catch (ex) {
    res.json({ err: ex });
  }
};

module.exports.updateNews = async (req, res) => {
  const id = req.params.id;
  try {
    const dataToUpdate = req.body;
    let { ...updateData } = dataToUpdate;
    if (req.file) {
      updateData = { ...updateData, image: req.file.path };
    }
    const updatedNews = await News.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    return res.status(200).json(updatedNews);
  } catch (ex) {
    res.json({ err: ex });
  }
};
