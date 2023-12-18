const { Schema, model } = require("mongoose");

const technologiesSchema = new Schema(
  {
    name: { type: String, required: true },
    resume: { type: String },
  },
  { timestamps: true }
);

module.exports = model("technologies", technologiesSchema);
