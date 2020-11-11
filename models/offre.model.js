const mongoose = require('mongoose')

const OffreSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, min: 7, max: 128 },
    description: { type: String, required: true, min: 7, max: 128 },
    requirement: [String],
    minSalary: Number,
    ref: { type: String, required: true },
  },
  { timestamps: true },
)

module.exports = mongoose.model('Offre', OffreSchema)
