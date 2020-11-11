const mongoose = require('mongoose')

const TestomanialSchema = new mongoose.Schema(
  {
    description: String,
    image: String,
  },
  { timestamps: true },
)

module.exports = mongoose.model('Testomnial', TestomanialSchema)
