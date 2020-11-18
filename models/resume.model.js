const mongoose = require('mongoose')

const ResumeSchema = new mongoose.Schema(
  {
    lastName: { type: String, required: true, min: 7, max: 128 },
    firstName: { type: String, required: true, min: 7, max: 128 },
    resume: { type: String, default: '', required: true },
    phone: { type: String, default: '', required: true },
    email: { type: String, default: '', required: true },
    offer: { type: mongoose.Schema.Types.ObjectId, ref: 'Offre' },
  },
  { timestamps: true },
)

module.exports = mongoose.model('Resume', ResumeSchema)
