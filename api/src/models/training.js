const { Schema, model } = require("mongoose");

const trainingSchema = new Schema(
  {
    title: String,
    academy: String,
    description: String,
    certificate: String,
    date: String,
  },
  { timestamps: false }
);

module.exports = model("training", trainingSchema);
