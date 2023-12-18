// controllers
const {
  getProjectsController,
  getProjectController,
} = require("../controllers/projects.controller");

const getProjectsHandler = async (req, res) => {
  try {
    const response = await getProjectsController();

    return res.status(200).json(response);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const getProjectHandler = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await getProjectController({ id });

    return res.status(200).json(response);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

module.exports = {
  getProjectsHandler,
  getProjectHandler,
};
