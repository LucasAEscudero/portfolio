const getProjectsHandler = (req, res) => {
  try {
    return res.json({
      message: "nice",
    });
  } catch (error) {
    return res.status(200).json({ error: error.message });
  }
};

module.exports = {
  getProjectsHandler,
};
