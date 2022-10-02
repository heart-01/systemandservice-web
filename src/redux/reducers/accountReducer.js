import { 
  LOAD_ACCOUNT_All_SUCCESS,
  LOAD_ACCOUNT_BY_ID_SUCCESS,
  REGISTER_SUCCESS, 
  LOGIN_SUCCESS,
  CLEAR_STATE_ACCOUNT,
  LOAD_ACCOUNT_INFO_SUCCESS,
  PATCH_ACCOUNT_SUCCESS,
  DELETE_ACCOUNT_BY_ID_SUCCESS,
  ACCOUNT_FAILED 
} from "../actions/accountActions";

// Reduces
const accountReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case LOAD_ACCOUNT_All_SUCCESS:
      return {
        ...state,
        all: action.data,
      };
    case LOAD_ACCOUNT_BY_ID_SUCCESS:
      return {
        ...state,
        edit: action.data,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        status: action.data,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        status: action.data,
      };
    case LOAD_ACCOUNT_INFO_SUCCESS:
      return {
        ...state,
        info: action.data,
      };
    case PATCH_ACCOUNT_SUCCESS:
      return {
        ...state,
        status: action.data,
      };
    case DELETE_ACCOUNT_BY_ID_SUCCESS:
      return {
        ...state,
        status: action.data,
      };
    case CLEAR_STATE_ACCOUNT:
      return {
        ...state,
        status: '',
        error: '',
        edit: ''
      };
    case ACCOUNT_FAILED:
      return {
        ...state,
        error: action.error,
      };
    default:
      return { ...state };
  }
};

export default accountReducer;
