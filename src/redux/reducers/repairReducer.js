import { 
  LOAD_REPAIR_All_SUCCESS,
  LOAD_REPAIR_BY_ID_SUCCESS,
  CREATE_REPAIR_SUCCESS, 
  PATCH_REPAIR_SUCCESS,
  DELETE_REPAIR_BY_ID_SUCCESS,
  CLEAR_STATE_REPAIR,
  REPAIR_FAILED
} from "../actions/repairActions";

// Reduces
const repairReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case LOAD_REPAIR_All_SUCCESS:
      return {
        ...state,
        all: action.data,
      };
    case LOAD_REPAIR_BY_ID_SUCCESS:
      return {
        ...state,
        edit: action.data,
      };
    case CREATE_REPAIR_SUCCESS:
      return {
        ...state,
        status: action.data,
      };
    case PATCH_REPAIR_SUCCESS:
      return {
        ...state,
        status: action.data,
      };
    case DELETE_REPAIR_BY_ID_SUCCESS:
      return {
        ...state,
        status: action.data,
      };
    case CLEAR_STATE_REPAIR:
      return {
        ...state,
        status: '',
        error: '',
        edit: ''
      };
    case REPAIR_FAILED:
      return {
        ...state,
        error: action.error,
      };
    default:
      return { ...state };
  }
};

export default repairReducer;
