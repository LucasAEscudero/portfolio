import {
  GET_TECHNOLOGIES,
  GET_PROJECTS,
  GET_TRAINING,
} from "./actions/action-types";

const initialState = {
  // technologies: [],
  // projects: [],
  // training: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_TECHNOLOGIES:
      return { ...state, technologies: action.payload };

    case GET_PROJECTS:
      return { ...state, projects: action.payload };

    case GET_TRAINING:
      return { ...state, training: action.payload };

    default:
      return { ...state };
  }
}

export default reducer;
