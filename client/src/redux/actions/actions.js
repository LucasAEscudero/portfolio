import axios from "axios";
import { GET_TECHNOLOGIES, GET_PROJECTS, GET_TRAINING } from "./action-types";

export const getTechnologies = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios(`/technologies`);

      return dispatch({
        type: GET_TECHNOLOGIES,
        payload: data,
      });
    } catch (error) {
      throw Error(error.message);
    }
  };
};

export const getProjects = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios(`/projects`);

      return dispatch({
        type: GET_PROJECTS,
        payload: data,
      });
    } catch (error) {
      throw Error(error.message);
    }
  };
};

export const getTraining = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios(`/training`);

      return dispatch({
        type: GET_TRAINING,
        payload: data,
      });
    } catch (error) {
      throw Error(error.message);
    }
  };
};
