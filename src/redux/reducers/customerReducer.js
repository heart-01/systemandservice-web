import { 
  LOAD_CUSTOMER_All_SUCCESS,
  LOAD_CUSTOMER_BY_ID_SUCCESS,
  CREATE_CUSTOMER_SUCCESS, 
  PATCH_CUSTOMER_SUCCESS,
  DELETE_CUSTOMER_BY_ID_SUCCESS,
  CLEAR_STATE_CUSTOMER,
  CUSTOMER_FAILED
} from "../actions/customerActions";

// Reduces
const customerReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case LOAD_CUSTOMER_All_SUCCESS:
      return {
        ...state,
        all: action.data,
      };
    case LOAD_CUSTOMER_BY_ID_SUCCESS:
      return {
        ...state,
        edit: action.data,
      };
    case CREATE_CUSTOMER_SUCCESS:
      return {
        ...state,
        status: action.data,
      };
    case PATCH_CUSTOMER_SUCCESS:
      return {
        ...state,
        status: action.data,
      };
    case DELETE_CUSTOMER_BY_ID_SUCCESS:
      return {
        ...state,
        status: action.data,
      };
    case CLEAR_STATE_CUSTOMER:
      return {
        ...state,
        status: '',
        error: '',
        edit: ''
      };
    case CUSTOMER_FAILED:
      return {
        ...state,
        error: action.error,
      };
    default:
      return { ...state };
  }
};

export default customerReducer;
