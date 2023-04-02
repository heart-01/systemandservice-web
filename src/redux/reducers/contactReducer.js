import {
  LOAD_CONTACT_All_SUCCESS,
  LOAD_CONTACT_BY_ID_SUCCESS,
  CREATE_CONTACT_SUCCESS,
  DELETE_CONTACT_BY_ID_SUCCESS,
  CONTACT_FAILED,
} from "../actions/contactActions";

// Reduces
const contactReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case LOAD_CONTACT_All_SUCCESS:
      return {
        ...state,
        all: action.data,
      };
    case LOAD_CONTACT_BY_ID_SUCCESS:
      return {
        ...state,
        info: action.data,
      };
    case CREATE_CONTACT_SUCCESS:
      return {
        ...state,
        status: action.data,
      };
    case DELETE_CONTACT_BY_ID_SUCCESS:
      return {
        ...state,
        status: action.data,
      };
    case CONTACT_FAILED:
      return {
        ...state,
        error: action.error,
      };
    default:
      return { ...state };
  }
};

export default contactReducer;
