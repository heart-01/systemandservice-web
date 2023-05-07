import {
  LOAD_PICWORK_All_SUCCESS,
  LOAD_PICWORK_BY_ID_SUCCESS,
  CREATE_PICWORK_SUCCESS,
  PATCH_PICWORK_SUCCESS,
  DELETE_PICWORK_BY_ID_SUCCESS,
  CLEAR_STATE_PICWORK,
  LOAD_ALBUMIMAGES_All_SUCCESS,
  CREATE_ALBUMIMAGES_SUCCESS,
  PATCH_ALBUMIMAGES_SUCCESS,
  DELETE_ALBUMIMAGES_BY_ID_SUCCESS,
  PICWORK_FAILED,
} from "../actions/picworkActions";

// Reduces
const picworkReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case LOAD_PICWORK_All_SUCCESS:
      return {
        ...state,
        all: action.data,
      };
    case LOAD_PICWORK_BY_ID_SUCCESS:
      return {
        ...state,
        edit: action.data,
      };
    case CREATE_PICWORK_SUCCESS:
      return {
        ...state,
        status: action.data,
      };
    case PATCH_PICWORK_SUCCESS:
      return {
        ...state,
        status: action.data,
      };
    case DELETE_PICWORK_BY_ID_SUCCESS:
      return {
        ...state,
        status: action.data,
      };
    case CLEAR_STATE_PICWORK:
      return {
        ...state,
        status: "",
        error: "",
        edit: "",
        patch: {
          status: "",
        },
      };
    case LOAD_ALBUMIMAGES_All_SUCCESS:
      return {
        ...state,
        albumImagesAll: action.data,
      };
    case CREATE_ALBUMIMAGES_SUCCESS:
      return {
        ...state,
        create: {
          status: action.data,
        },
      };
    case PATCH_ALBUMIMAGES_SUCCESS:
      return {
        ...state,
        patch: {
          status: action.data,
        },
      };
    case DELETE_ALBUMIMAGES_BY_ID_SUCCESS:
      return {
        ...state,
        status: action.data,
      };
    case PICWORK_FAILED:
      return {
        ...state,
        error: action.error,
      };
    default:
      return { ...state };
  }
};

export default picworkReducer;
