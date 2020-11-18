const Message = require("../models/message.model");

module.exports.getAllMessages = async (req, res) => {
  try {
    let result = await Message.find();
    return res.status(200).json({ messages: result });
  } catch (ex) {
    return res.status(500).json({ err: ex });
  }
};

module.exports.addMessage = async (req, res) => {
  const newMessage = new Message({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    message: req.body.message,
  });
  try {
    const result = await newMessage.save();
    return res.status(200).json({
      msg: "Message Added",
    });
  } catch (ex) {
    return res.status(500).json({ err: ex });
  }
};

module.exports.deleteMessage = async (req, res) => {
    const id = req.params.id
    try {
        await Message.findByIdAndDelete(id)
        return res.status(200).json({ msg: "Offer Deleted" });
    } catch (ex) {
        return res.status(500).json({ err: ex });
    }
}