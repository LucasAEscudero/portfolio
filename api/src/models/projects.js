const { Schema, model } = require("mongoose");

const projectsSchema = new Schema(
  {
    title: String,
    varName: String,
    resume: String,
    description: String,
    role: { text: String, types: Array },
    technologies: Array,
    links: { github: String, youtube: String, deploy: String },
    date: String,
  },
  { timestamps: false }
);

module.exports = model("projects", projectsSchema);
