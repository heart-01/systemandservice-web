import api from "../../services/backend/publicizeAPI.js";
import showMsg from "../../utils/AlertMessage";

// Actions
export const LOAD_PUBLICIZE_All_SUCCESS = "LOAD_PUBLICIZE_All_SUCCESS";
export const LOAD_PUBLICIZE_BY_ID_SUCCESS = "LOAD_PUBLICIZE_BY_ID_SUCCESS";
export const CREATE_PUBLICIZE_SUCCESS = "CREATE_PUBLICIZE_SUCCESS";
export const PATCH_PUBLICIZE_SUCCESS = "PATCH_PUBLICIZE_SUCCESS";
export const DELETE_PUBLICIZE_BY_ID_SUCCESS = "DELETE_PUBLICIZE_BY_ID_SUCCESS";
export const CLEAR_STATE_PUBLICIZE = "CLEAR_STATE_PUBLICIZE";
export const PUBLICIZE_FAILED = "PUBLICIZE_FAILED";

// Action Creators
export const loadPublicizeAllSuccess = (data) => {
  return {
    type: LOAD_PUBLICIZE_All_SUCCESS,
    data,
  };
};
export const loadPublicizeByIdSuccess = (data) => {
  return {
    type: LOAD_PUBLICIZE_BY_ID_SUCCESS,
    data,
  };
};
export const createPublicizeSuccess = (data) => {
  return {
    type: CREATE_PUBLICIZE_SUCCESS,
    data,
  };
};
export const patchPublicizeSuccess = (data) => {
  return {
    type: PATCH_PUBLICIZE_SUCCESS,
    data,
  };
};
export const deletePublicizeByIdSuccess = (data) => {
  return {
    type: DELETE_PUBLICIZE_BY_ID_SUCCESS,
    data,
  };
};
export const clearStatePublicize = () => {
  return {
    type: CLEAR_STATE_PUBLICIZE,
  };
};
export const callApiPublicizeFailed = (error) => {
  return {
    type: PUBLICIZE_FAILED,
    error,
  };
};

// Methods Call Action Creators
export const loadPublicizeAll = () => {
  return (dispatch) => {
    api
      .getAllPublicize()
      .then((response) => {
        const data = response.data.data.sort((a, b) => b.id - a.id);
        dispatch(loadPublicizeAllSuccess({ data }));
      })
      .catch((error) => {
        dispatch(callApiPublicizeFailed(error));
      });
  };
};
export const loadPublicizeById = (id) => {
  return (dispatch) => {
    api
      .getPublicizeById(id)
      .then((response) => {
        dispatch(loadPublicizeByIdSuccess(response.data));
      })
      .catch((error) => {
        dispatch(callApiPublicizeFailed(error));
      });
  };
};
export const createPublicize = (data) => {
  return (dispatch) => {
    api
      .createNewPublicize(data)
      .then((response) => {
        response.data.success === true && showMsg.success();
        dispatch(createPublicizeSuccess(response.data.success));
      })
      .catch((error) => {
        dispatch(callApiPublicizeFailed(error));
      });
  };
};
export const patchPublicize = (id, data) => {
  return (dispatch) => {
    api
      .patchPublicize(id, data)
      .then((response) => {
        response.data.success === true && showMsg.success();
        dispatch(patchPublicizeSuccess(response.data));
        window.location.reload();
      })
      .catch((error) => {
        dispatch(callApiPublicizeFailed(error));
      });
  };
};
export const deletePublicize = (id) => {
  return (dispatch) => {
    api
      .deletePublicize(id)
      .then((response) => {
        dispatch(deletePublicizeByIdSuccess(response.data));
      })
      .catch((error) => {
        dispatch(callApiPublicizeFailed(error));
      });
  };
};
