import {
  LOAD_PUBLICIZE_All_SUCCESS,
  LOAD_PUBLICIZE_BY_ID_SUCCESS,
  CREATE_PUBLICIZE_SUCCESS,
  PATCH_PUBLICIZE_SUCCESS,
  DELETE_PUBLICIZE_BY_ID_SUCCESS,
  CLEAR_STATE_PUBLICIZE,
  PUBLICIZE_FAILED,
} from "../actions/publicizeActions";

// Reduces
const publicizeReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case LOAD_PUBLICIZE_All_SUCCESS:
      return {
        ...state,
        all: action.data,
      };
    case LOAD_PUBLICIZE_BY_ID_SUCCESS:
      return {
        ...state,
        edit: action.data,
      };
    case CREATE_PUBLICIZE_SUCCESS:
      return {
        ...state,
        status: action.data,
      };
    case PATCH_PUBLICIZE_SUCCESS:
      return {
        ...state,
        status: action.data,
      };
    case DELETE_PUBLICIZE_BY_ID_SUCCESS:
      return {
        ...state,
        status: action.data,
      };
    case CLEAR_STATE_PUBLICIZE:
      return {
        ...state,
        status: "",
        error: "",
        edit: "",
      };
    case PUBLICIZE_FAILED:
      return {
        ...state,
        error: action.error,
      };
    default:
      return { ...state };
  }
};

export default publicizeReducer;
