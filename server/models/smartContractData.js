const mongoose = require("mongoose");

const SmartContractDataSchema = new mongoose.Schema({
  data: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("SmartContractData", SmartContractDataSchema);
