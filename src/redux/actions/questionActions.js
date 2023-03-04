import api from "../../services/frontend/questionAPI.js";
import showMsg from "../../utils/AlertMessage";
import { isEmpty } from "lodash";

// Actions
export const LOAD_QUESTION_All_SUCCESS = "LOAD_QUESTION_All_SUCCESS";
export const LOAD_QUESTION_BY_ID_SUCCESS = "LOAD_QUESTION_BY_ID_SUCCESS";
export const CREATE_QUESTION_SUCCESS = "CREATE_QUESTION_SUCCESS";
export const PATCH_QUESTION_SUCCESS = "PATCH_QUESTION_SUCCESS";
export const LOAD_COMMENT_BY_QUESTION_ID_SUCCESS = "LOAD_COMMENT_BY_QUESTION_ID_SUCCESS";
export const CREATE_COMMENT_SUCCESS = "CREATE_COMMENT_SUCCESS";
export const QUESTION_FAILED = "QUESTION_FAILED";

// Action Creators
export const loadQuestionAllSuccess = (data) => {
  return {
    type: LOAD_QUESTION_All_SUCCESS,
    data,
  };
};

export const loadQuestionByIdSuccess = (data) => {
  return {
    type: LOAD_QUESTION_BY_ID_SUCCESS,
    data,
  };
};

export const createQuestionSuccess = (data) => {
  return {
    type: CREATE_QUESTION_SUCCESS,
    data,
  };
};

export const patchQuestionSuccess = (data) => {
  return {
    type: PATCH_QUESTION_SUCCESS,
    data,
  };
};

export const loadCommentByQuestionIdSuccess = (data) => {
  return {
    type: LOAD_COMMENT_BY_QUESTION_ID_SUCCESS,
    data,
  };
};

export const createCommentSuccess = (data) => {
  return {
    type: CREATE_COMMENT_SUCCESS,
    data,
  };
};

export const callApiQuestionFailed = (error) => {
  return {
    type: QUESTION_FAILED,
    error,
  };
};

// Methods Call Action Creators
export const loadQuestionAll = (order = null, search = null) => {
  let query = "";

  if (!isEmpty(order)) {
    query = `order=${order}`;
  } else if (!isEmpty(search)) {
    query = `search=${search}`;
  }

  if (!isEmpty(order) && !isEmpty(search)) {
    query = `order=${order}&search=${search}`;
  }

  return (dispatch) => {
    api
      .getAllQuestion(query)
      .then((response) => {
        dispatch(loadQuestionAllSuccess(response.data));
      })
      .catch((error) => {
        dispatch(callApiQuestionFailed(error));
      });
  };
};

export const loadQuestionById = (id) => {
  return (dispatch) => {
    api
      .getQuestionById(id)
      .then((response) => {
        dispatch(loadQuestionByIdSuccess(response.data));
      })
      .catch((error) => {
        dispatch(callApiQuestionFailed(error));
      });
  };
};

export const createQuestion = (data) => {
  return (dispatch) => {
    api
      .createNewQuestion(data)
      .then((response) => {
        response.data.success === true && showMsg.success();
        dispatch(createQuestionSuccess(response.data));
        window.location.reload();
      })
      .catch((error) => {
        dispatch(callApiQuestionFailed(error));
      });
  };
};

export const patchQuestion = (id, data) => {
  return (dispatch) => {
    api
      .patchQuestion(id, data)
      .then((response) => {
        dispatch(patchQuestionSuccess(response.data));
      })
      .catch((error) => {
        dispatch(callApiQuestionFailed(error));
      });
  };
};

export const deleteQuestion = (id) => {
  return (dispatch) => {
    api
      .deleteQuestion(id)
      .then((response) => {
        dispatch(patchQuestionSuccess(response.data));
        window.location.reload();
      })
      .catch((error) => {
        dispatch(callApiQuestionFailed(error));
      });
  };
};

export const loadCommentByQuestionId = (questionId) => {
  return (dispatch) => {
    api
      .getCommentByQuestionId(questionId)
      .then((response) => {
        dispatch(loadCommentByQuestionIdSuccess(response.data));
      })
      .catch((error) => {
        dispatch(callApiQuestionFailed(error));
      });
  };
};

export const createComment = (data) => {
  return (dispatch) => {
    api
      .createNewComment(data)
      .then((response) => {
        response.data.success === true && showMsg.success();
        dispatch(createCommentSuccess(response.data));
      })
      .catch((error) => {
        dispatch(callApiQuestionFailed(error));
      });
  };
};
