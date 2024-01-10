const {
  getControllerTechnologies,
} = require("../controllers/technologies.controller");

const getHandlerTechnologies = async (req, res) => {
  try {
    const technologies = await getControllerTechnologies();

    if (!technologies)
      return res
        .status(400)
        .json({ message: "The technologies were not found" });

    return res.status(200).json(technologies);
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

module.exports = {
  getHandlerTechnologies,
};
