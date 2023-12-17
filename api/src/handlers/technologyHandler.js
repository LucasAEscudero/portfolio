const {
  postTechnologyController,
  getTechnologiesController,
  getTechnologyController,
  putTechnologyController,
  deleteTechnologyController,
} = require("../controllers/technologyController");

const postTechnologyHandler = async (req, res) => {
  try {
    const { name, resume, experience } = req.body;

    if (!name || !resume || !experience)
      return res.status(400).json({ message: "Faltan datos" });

    const response = await postTechnologyController({
      name,
      resume,
      experience,
    });

    if (!response)
      return res.status(400).json({ message: "No se pudo postear la tech" });

    return res.status(201).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getTechnologyHandler = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) return res.status(400).json({ message: "Faltan datos" });

    const response = await getTechnologyController({
      id,
    });

    if (!response)
      return res.status(400).json({ message: "No existe esa tecnologia" });

    return res.status(201).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getTechnologiesHandler = async (req, res) => {
  try {
    const response = await getTechnologiesController();

    if (!response)
      return res
        .status(400)
        .json({ message: "No existe ninguna tecnologia actualmente" });

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const putTechnologyHandler = async (req, res) => {
  try {
    const { id, name, resume, experience } = req.body;

    if (!id || !name || !resume)
      return res.status(400).json({ message: "Faltan datos" });

    const response = await putTechnologyController({
      id,
      name,
      resume,
      experience,
    });

    if (!response)
      return res
        .status(400)
        .json({ message: "No se puedo editar la tecnologia" });

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteTechnologyHandler = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) return res.status(400).json({ message: "Faltan datos" });

    const response = await deleteTechnologyController({
      id,
    });

    if (!response)
      return res.status(400).json({ message: "No exite la tecnologia" });

    return res
      .status(200)
      .json({ message: "La tecnologia fue eliminada con exito" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  postTechnologyHandler,
  getTechnologiesHandler,
  getTechnologyHandler,
  putTechnologyHandler,
  deleteTechnologyHandler,
};
