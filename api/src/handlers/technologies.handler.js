// controllers
const {
  getTechnologiesController,
  getTechnologyController,
} = require("../controllers/technologies.controller");

const getTechnologiesHandler = async (req, res) => {
  try {
    const response = await getTechnologiesController();

    return res.status(200).json(response);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const getTechnologyHandler = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await getTechnologyController({ id });

    return res.status(200).json(response);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

module.exports = {
  getTechnologiesHandler,
  getTechnologyHandler,
};
