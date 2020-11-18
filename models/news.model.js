const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NewsSchema = new Schema({
  image: { type: String, default: "", required: true },
  title: { type: String },
  body: { type: String },
},{timestamps: true});

module.exports = mongoose.model("News", NewsSchema);
