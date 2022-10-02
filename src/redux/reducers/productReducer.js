import { 
  LOAD_PRODUCT_All_SUCCESS,
  LOAD_PRODUCT_BY_ID_SUCCESS,
  CREATE_PRODUCT_SUCCESS, 
  PATCH_PRODUCT_SUCCESS,
  DELETE_PRODUCT_BY_ID_SUCCESS,
  CLEAR_STATE_PRODUCT,
  PRODUCT_FAILED
} from "../actions/productActions";

// Reduces
const productReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case LOAD_PRODUCT_All_SUCCESS:
      return {
        ...state,
        all: action.data,
      };
    case LOAD_PRODUCT_BY_ID_SUCCESS:
      return {
        ...state,
        edit: action.data,
      };
    case CREATE_PRODUCT_SUCCESS:
      return {
        ...state,
        status: action.data,
      };
    case PATCH_PRODUCT_SUCCESS:
      return {
        ...state,
        status: action.data,
      };
    case DELETE_PRODUCT_BY_ID_SUCCESS:
      return {
        ...state,
        status: action.data,
      };
    case CLEAR_STATE_PRODUCT:
      return {
        ...state,
        status: '',
        error: '',
        edit: ''
      };
    case PRODUCT_FAILED:
      return {
        ...state,
        error: action.error,
      };
    default:
      return { ...state };
  }
};

export default productReducer;
