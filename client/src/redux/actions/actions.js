import axios from "axios";
import { GET_TECHNOLOGIES, GET_PROJECTS, GET_TRAINING } from "./action-types";

export const getTechnologies = async () => {
  try {
    const data = await axios("/technologies");

    return {
      type: GET_TECHNOLOGIES,
      payload: data,
    };
  } catch (err) {
    throw Error(err);
  }
};

export const getProjects = async () => {
  try {
    const data = await axios("/projects");

    return {
      type: GET_PROJECTS,
      payload: data,
    };
  } catch (err) {
    throw Error(err);
  }
};

export const getTraining = async () => {
  try {
    const data = await axios("/training");

    return {
      type: GET_TRAINING,
      payload: data,
    };
  } catch (err) {
    throw Error(err);
  }
};
