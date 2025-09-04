const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
  method: String,
  url: String,
  status: Number,
  responseTime: Number,
  userAgent: String,
  createdAt: { type: Date, default: Date.now }
});

const Log = mongoose.model.Log || mongoose.model("Log", logSchema);
module.exports = Log;