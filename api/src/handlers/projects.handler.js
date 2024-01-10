const { getControllerProjects } = require("../controllers/projects.controller");

const getHandlerProjects = async (req, res) => {
  try {
    const projects = await getControllerProjects();

    if (!projects)
      return res.status(400).json({ message: "The projects were not found" });

    return res.status(200).json(projects);
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

module.exports = {
  getHandlerProjects,
};
