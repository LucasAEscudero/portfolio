const { getControllerTraining } = require("../controllers/training.controller");

const getHandlerTraining = async (req, res) => {
  try {
    const training = await getControllerTraining();
    if (!training)
      return res.status(400).json({ message: "The training was not found" });
    return res.status(200).json(training);
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

module.exports = {
  getHandlerTraining,
};
