const mongoose = require('mongoose')

const TestomanialSchema = new mongoose.Schema(
  {
    description: String,
    name: String,
  },
  { timestamps: true },
)

module.exports = mongoose.model('Testomnial', TestomanialSchema)
