import { 
  LOAD_SALE_All_SUCCESS,
  LOAD_SALE_BY_ID_SUCCESS,
  CREATE_SALE_SUCCESS, 
  PATCH_SALE_SUCCESS,
  DELETE_SALE_BY_ID_SUCCESS,
  CLEAR_STATE_SALE,
  SALE_FAILED
} from "../actions/saleActions";

// Reduces
const customerReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case LOAD_SALE_All_SUCCESS:
      return {
        ...state,
        all: action.data,
      };
    case LOAD_SALE_BY_ID_SUCCESS:
      return {
        ...state,
        edit: action.data,
      };
    case CREATE_SALE_SUCCESS:
      return {
        ...state,
        status: action.data,
      };
    case PATCH_SALE_SUCCESS:
      return {
        ...state,
        status: action.data,
      };
    case DELETE_SALE_BY_ID_SUCCESS:
      return {
        ...state,
        status: action.data,
      };
    case CLEAR_STATE_SALE:
      return {
        ...state,
        status: '',
        error: '',
        edit: ''
      };
    case SALE_FAILED:
      return {
        ...state,
        error: action.error,
      };
    default:
      return { ...state };
  }
};

export default customerReducer;
