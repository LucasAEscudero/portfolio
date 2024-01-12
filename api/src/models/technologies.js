const { Schema, model } = require("mongoose");

const technoSchema = new Schema(
  {
    name: String,
    order: Number,
    image: String,
    type: String,
  },
  { timestamps: false }
);

module.exports = model("technologies", technoSchema);
