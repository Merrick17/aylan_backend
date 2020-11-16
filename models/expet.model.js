const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, min: 7, max: 128 },
    image: { type: String, default: "", required: true },
    description:{ type: String, default: "", required: true },
    email:{ type: String, default: "", required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Expert", ClientSchema);
