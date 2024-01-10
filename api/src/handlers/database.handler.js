const {
  postControllerDatabase,
  deleteControllerDatabase,
} = require("../controllers/database.controllers");

const postHandlerDatabase = async (req, res) => {
  try {
    await postControllerDatabase();

    return res.send("Database has been charged");
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

const deleteHandlerDatabase = async (req, res) => {
  try {
    await deleteControllerDatabase();

    return res.send("Database has been deleted");
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

module.exports = {
  postHandlerDatabase,
  deleteHandlerDatabase,
};
