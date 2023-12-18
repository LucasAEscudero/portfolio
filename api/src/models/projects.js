const { Schema, model } = require("mongoose");

const projectsSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    resume: {
      type: String,
    },
    description: {
      type: String,
    },
    collaborators: {
      type: Boolean,
    },
    finished: {
      type: Boolean,
    },
    image: {
      type: String,
      default:
        "https://cdn.discordapp.com/attachments/903348879905415181/1169047661303828520/default_image.jpg?ex=658b5a7a&is=6578e57a&hm=fb4fea3a5cc9264dc2b5d3448a1b96e43cbfb7b9c0b904e1168a0920a2d721d4&",
    },
    technologies: {
      type: Array,
    },
    links: {
      type: Object,
    },
  },
  { timestamps: true }
);

module.exports = model("projects", projectsSchema);
