import {
  LOAD_QUESTION_All_SUCCESS,
  LOAD_QUESTION_BY_ID_SUCCESS,
  CREATE_QUESTION_SUCCESS,
  PATCH_QUESTION_SUCCESS,
  LOAD_COMMENT_BY_QUESTION_ID_SUCCESS,
  CREATE_COMMENT_SUCCESS,
  QUESTION_FAILED,
} from "../actions/questionActions";

// Reduces
const questionReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case LOAD_QUESTION_All_SUCCESS:
      return {
        ...state,
        all: action.data,
      };
    case LOAD_QUESTION_BY_ID_SUCCESS:
      return {
        ...state,
        info: action.data,
      };
    case CREATE_QUESTION_SUCCESS:
      return {
        ...state,
        status: action.data,
      };
    case PATCH_QUESTION_SUCCESS:
      return {
        ...state,
        status: action.data,
      };
    case LOAD_COMMENT_BY_QUESTION_ID_SUCCESS:
      return {
        ...state,
        commentByQuestionId: action.data,
      };
    case CREATE_COMMENT_SUCCESS:
      return {
        ...state,
        status: action.data,
      };
    case QUESTION_FAILED:
      return {
        ...state,
        error: action.error,
      };
    default:
      return { ...state };
  }
};

export default questionReducer;
