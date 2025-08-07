const mongoose = require('mongoose');

const VerificationDocumentSchema = new mongoose.Schema({
  status: { type: String, enum: ['approved', 'pending', 'rejected'], required: true },
  reviewedBy: { type: String, default: null },
  date: { type: String, default: null },
  reason: { type: String, default: null },
}, { _id: false });

const AssetSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  owner: { type: String, required: true },
  submittedDate: { type: String, required: true },
  location: { type: String, required: true },
  estimatedCredits: { type: Number, required: true },
  documents: [{ type: String }],
  status: { type: String, required: true },
  priority: { type: String, enum: ['high', 'medium', 'low'], required: true },
  description: { type: String, required: true },
  verificationDocuments: { type: Map, of: VerificationDocumentSchema },
}, { timestamps: true });

module.exports = mongoose.model('Asset', AssetSchema); 