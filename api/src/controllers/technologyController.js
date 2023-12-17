const { TECHNOLOGY } = require("../database/db");
// console.log(TECHNOLOGY);
const postTechnologyController = async ({ name, resume, experience }) => {
  const created = await TECHNOLOGY.findOrCreate({
    where: {
      name_technology: name,
      resume_technology: resume,
      experience_technology: experience,
    },
  });

  if (created) return created;
};

const getTechnologyController = async ({ id }) => {
  const technology = await TECHNOLOGY.findOne({
    where: { id_technology: id },
  });

  if (technology) return technology;
};

const getTechnologiesController = async () => {
  const technologies = await TECHNOLOGY.findAll();

  if (technologies) return technologies;
};

const putTechnologyController = async ({ id, name, resume, experience }) => {
  const technology = await TECHNOLOGY.findOne({
    where: {
      id_technology: id,
    },
  });

  if (technology) {
    technology.set({
      name_technology: name,
      resume_technology: resume,
      experience_technology: experience,
    });

    technology.save();

    return technology;
  }
};

const deleteTechnologyController = async ({ id }) => {
  const technology = await TECHNOLOGY.destroy({
    where: {
      id_technology: id,
    },
  });

  if (technology) return technology;
};

module.exports = {
  postTechnologyController,
  getTechnologyController,
  getTechnologiesController,
  putTechnologyController,
  deleteTechnologyController,
};
